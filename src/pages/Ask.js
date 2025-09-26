import React, { useState } from 'react';
import { useAuth } from '../utils/AuthContext';

const Ask = () => {
  const [question, setQuestion] = useState('');
  const [category, setCategory] = useState('general');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const { user, isAuthenticated } = useAuth();

  const categories = [
    { value: 'general', label: 'General Wisdom' },
    { value: 'spirituality', label: 'Spirituality' },
    { value: 'relationships', label: 'Relationships' },
    { value: 'career', label: 'Career & Purpose' },
    { value: 'mindfulness', label: 'Mindfulness' },
    { value: 'ethics', label: 'Ethics & Morality' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    setResponse('');

    try {
      // This would normally make an API call to the backend
      // For now, showing a placeholder response
      setTimeout(() => {
        const saveNote = isAuthenticated 
          ? "Your question and response have been saved to your history." 
          : "Sign in to save your questions and build your wisdom journey.";
        
        setResponse(`Thank you for your question: "${question}". This feature is being implemented and will provide AI-powered wisdom insights based on Buddhist teachings and philosophy. Your query has been categorized as "${category}". ${saveNote}`);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error('Error submitting question:', error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Ask for Wisdom
            </h1>
            <p className="text-gray-600 mb-8">
              Share your questions about life, relationships, spirituality, or any challenges you're facing. 
              Receive insights rooted in perfected wisdom and clarity of insight.
            </p>

            {!isAuthenticated && (
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      <strong>Create an account</strong> to save your questions, track your wisdom journey, and access personalized insights over time.
                      <a href="/register" className="font-medium underline hover:text-blue-600 ml-1">
                        Sign up free →
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Question
                </label>
                <textarea
                  id="question"
                  rows={6}
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Share what's on your mind..."
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading || !question.trim()}
                className="w-full bg-primary-600 text-white py-3 px-4 rounded-md font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Seeking Wisdom...' : 'Ask Question'}
              </button>
            </form>

            {response && (
              <div className="mt-8 bg-primary-50 border-l-4 border-primary-400 p-6 rounded-r-lg">
                <h3 className="text-lg font-medium text-primary-900 mb-3">
                  Wisdom Response
                </h3>
                <p className="text-primary-800 leading-relaxed">
                  {response}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ask;