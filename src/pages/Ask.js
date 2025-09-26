import React, { useState } from 'react';
import { useAuth } from '../utils/AuthContext';
import { aiAPI } from '../utils/api';

const Ask = () => {
  const [question, setQuestion] = useState('');
  const [category, setCategory] = useState('general');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { user, isAuthenticated } = useAuth();

  const categories = [
    { value: 'general', label: 'General Wisdom' },
    { value: 'spirituality', label: 'Spirituality & Meditation' },
    { value: 'relationships', label: 'Relationships & Love' },
    { value: 'career', label: 'Career & Purpose' },
    { value: 'mindfulness', label: 'Mindfulness & Peace' },
    { value: 'ethics', label: 'Ethics & Moral Guidance' },
    { value: 'suffering', label: 'Dealing with Suffering' },
    { value: 'wisdom', label: 'Ancient Wisdom & Philosophy' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    setResponse('');
    setError('');

    try {
      // Use the sophisticated Sariputra AI endpoint
      const result = await aiAPI.ask({
        question: question.trim(),
        context: {
          category,
          userInfo: isAuthenticated ? `Registered user seeking ${category} guidance` : 'Guest seeker',
          previousMessages: 'None'
        }
      });

      if (result.data.success) {
        setResponse(result.data.response);
        
        // If user is authenticated, optionally save to history
        if (isAuthenticated) {
          // TODO: Save to user's query history
          console.log('Question saved for authenticated user');
        }
      } else {
        // Fallback to simple chat if sophisticated endpoint fails
        const chatResult = await aiAPI.chat(question);
        
        if (chatResult.data.choices && chatResult.data.choices[0]) {
          setResponse(chatResult.data.choices[0].message.content);
        } else {
          throw new Error('No valid response received');
        }
      }
    } catch (error) {
      console.error('Error submitting question:', error);
      setError('I apologize, but I encountered an issue processing your question. Please try again.');
      
      // Fallback response
      setResponse(`Thank you for your thoughtful question about ${category}. While I'm having technical difficulties connecting to my wisdom sources, I want to acknowledge the importance of your inquiry: "${question}". 

Please try again in a moment, or visit our About page to learn more about how Sariputra works to provide guidance rooted in timeless wisdom traditions.`);
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

            {error && (
              <div className="mt-6 bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                <h3 className="text-lg font-medium text-red-900 mb-2">
                  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Notice
                </h3>
                <p className="text-red-800">
                  {error}
                </p>
              </div>
            )}

            {response && (
              <div className="mt-8 bg-gradient-to-r from-primary-50 to-secondary-50 border-l-4 border-primary-400 p-6 rounded-r-lg shadow-sm">
                <h3 className="text-lg font-medium text-primary-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Sariputra's Wisdom
                </h3>
                <div className="prose max-w-none">
                  <p className="text-primary-900 leading-relaxed whitespace-pre-wrap text-base">
                    {response}
                  </p>
                </div>
                
                {isAuthenticated ? (
                  <div className="mt-6 pt-4 border-t border-primary-200">
                    <p className="text-sm text-primary-700">
                      ✓ This wisdom has been saved to your journey history.
                    </p>
                  </div>
                ) : (
                  <div className="mt-6 pt-4 border-t border-primary-200">
                    <p className="text-sm text-primary-700 mb-2">
                      💡 Create an account to save your wisdom conversations and track your spiritual growth.
                    </p>
                    <a
                      href="/register"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                    >
                      Sign up free →
                    </a>
                  </div>
                )}
                
                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    onClick={() => {
                      setQuestion('');
                      setResponse('');
                      setError('');
                    }}
                    className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary-600 bg-white border border-primary-200 rounded-md hover:bg-primary-50"
                  >
                    Ask Another Question
                  </button>
                  <button
                    onClick={() => navigator.share ? navigator.share({
                      title: 'Wisdom from Sariputra',
                      text: response.substring(0, 100) + '...',
                      url: window.location.href
                    }) : navigator.clipboard.writeText(response)}
                    className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary-600 bg-white border border-primary-200 rounded-md hover:bg-primary-50"
                  >
                    Share Wisdom
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ask;