import React, { useState, useEffect } from 'react';
import { useAuth } from '../utils/AuthContext';

const History = () => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const { user } = useAuth();

  // Mock data for now - would normally fetch from API
  const mockQueries = [
    {
      id: 1,
      question: "How can I find inner peace in stressful times?",
      category: "spirituality",
      response: "Inner peace comes from understanding the impermanent nature of stress...",
      createdAt: new Date(Date.now() - 86400000).toISOString(),
      rating: 5
    },
    {
      id: 2,
      question: "What is the meaning of compassion in daily life?",
      category: "ethics",
      response: "Compassion is the foundation of all meaningful relationships...",
      createdAt: new Date(Date.now() - 172800000).toISOString(),
      rating: 4
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setQueries(mockQueries);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredQueries = filter === 'all' 
    ? queries 
    : queries.filter(query => query.category === filter);

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'general', label: 'General Wisdom' },
    { value: 'spirituality', label: 'Spirituality' },
    { value: 'relationships', label: 'Relationships' },
    { value: 'career', label: 'Career & Purpose' },
    { value: 'mindfulness', label: 'Mindfulness' },
    { value: 'ethics', label: 'Ethics & Morality' }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Your Wisdom Journey
            </h1>
            <p className="text-gray-600 mb-6">
              Review your past questions and the insights you've received.
            </p>

            <div className="mb-6">
              <label htmlFor="filter" className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Category
              </label>
              <select
                id="filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="block w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {filteredQueries.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No questions yet</h3>
              <p className="text-gray-600 mb-4">Start your wisdom journey by asking your first question.</p>
              <a
                href="/ask"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
              >
                Ask a Question
              </a>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredQueries.map((query) => (
                <div key={query.id} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        {query.question}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="bg-gray-100 px-2 py-1 rounded-full">
                          {categories.find(cat => cat.value === query.category)?.label || query.category}
                        </span>
                        <span>{formatDate(query.createdAt)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Wisdom Response:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      {query.response}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`w-4 h-4 ${
                            star <= query.rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default History;