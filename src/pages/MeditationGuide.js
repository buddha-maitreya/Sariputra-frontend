import React, { useState } from 'react';
import { aiAPI } from '../utils/api';

const MeditationGuide = () => {
  const [preferences, setPreferences] = useState({
    experience: 'beginner',
    timeAvailable: '10 minutes',
    focus: 'general mindfulness',
    mood: 'neutral'
  });
  const [guidance, setGuidance] = useState('');
  const [loading, setLoading] = useState(false);

  const experienceLevels = [
    { value: 'beginner', label: 'Beginner (New to meditation)' },
    { value: 'intermediate', label: 'Intermediate (Some experience)' },
    { value: 'advanced', label: 'Advanced (Regular practitioner)' }
  ];

  const timeOptions = [
    '5 minutes', '10 minutes', '15 minutes', '20 minutes', '30 minutes', '45 minutes', '1 hour'
  ];

  const focusAreas = [
    'general mindfulness', 'stress relief', 'anxiety management', 'sleep preparation',
    'concentration', 'loving-kindness', 'body awareness', 'emotional balance'
  ];

  const moodOptions = [
    'calm', 'stressed', 'anxious', 'tired', 'restless', 'sad', 'neutral', 'energetic'
  ];

  const handleGenerate = async () => {
    setLoading(true);
    setGuidance('');

    try {
      const result = await aiAPI.getMeditation(preferences);
      
      if (result.data.success) {
        setGuidance(result.data.guidance);
      } else {
        setGuidance('I apologize, but I encountered an issue generating your personalized meditation. Please try again.');
      }
    } catch (error) {
      console.error('Error generating meditation:', error);
      setGuidance(`Here's a simple ${preferences.timeAvailable} meditation for ${preferences.focus}:

1. Find a comfortable seated position and close your eyes
2. Take three deep, slow breaths to center yourself
3. Notice your natural breathing rhythm without changing it
4. When your mind wanders, gently return attention to your breath
5. Continue this practice for the remaining time
6. End with three deep breaths and slowly open your eyes

This is a foundational practice. For personalized guidance, please ensure the meditation service is available.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Personalized Meditation Guide
            </h1>
            <p className="text-gray-600 mb-8">
              Receive customized meditation guidance based on your experience level, available time, 
              current mood, and intention. This is perfect for experimenting with RAG (Retrieval-Augmented Generation) 
              using meditation texts and wisdom literature.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience Level
                </label>
                <select
                  value={preferences.experience}
                  onChange={(e) => setPreferences(prev => ({ ...prev, experience: e.target.value }))}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                >
                  {experienceLevels.map((level) => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time Available
                </label>
                <select
                  value={preferences.timeAvailable}
                  onChange={(e) => setPreferences(prev => ({ ...prev, timeAvailable: e.target.value }))}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                >
                  {timeOptions.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Focus Area
                </label>
                <select
                  value={preferences.focus}
                  onChange={(e) => setPreferences(prev => ({ ...prev, focus: e.target.value }))}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                >
                  {focusAreas.map((focus) => (
                    <option key={focus} value={focus}>
                      {focus.charAt(0).toUpperCase() + focus.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Mood
                </label>
                <select
                  value={preferences.mood}
                  onChange={(e) => setPreferences(prev => ({ ...prev, mood: e.target.value }))}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                >
                  {moodOptions.map((mood) => (
                    <option key={mood} value={mood}>
                      {mood.charAt(0).toUpperCase() + mood.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full bg-primary-600 text-white py-3 px-4 rounded-md font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed mb-8"
            >
              {loading ? 'Creating Your Personal Guide...' : 'Generate Meditation Guide'}
            </button>

            {guidance && (
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 border-l-4 border-primary-400 p-6 rounded-r-lg">
                <h3 className="text-lg font-medium text-primary-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Your Personalized Meditation Guide
                </h3>
                <div className="prose max-w-none">
                  <div className="text-primary-900 leading-relaxed whitespace-pre-wrap text-base">
                    {guidance}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-primary-200">
                  <p className="text-sm text-primary-700 mb-2">
                    💡 This is perfect for RAG experimentation - imagine pulling from thousands of meditation texts!
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                      Experience: {preferences.experience}
                    </span>
                    <span className="px-3 py-1 bg-secondary-100 text-secondary-700 text-xs rounded-full">
                      Duration: {preferences.timeAvailable}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                      Focus: {preferences.focus}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeditationGuide;