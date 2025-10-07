import React, { useState } from 'react';
import heroImage from '../assets/images/zenmind.jpg';
import { trackPageInteraction } from '../utils/analytics';

const Home = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleQuickAsk = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    // Track the quick question submission
    trackPageInteraction.home.quickQuestionSubmit(question);

    setLoading(true);
    setResponse('');

    try {
      // Call the OpenAI chat endpoint directly
      const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
      const response = await fetch(`${API_BASE_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: question
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      if (data.choices && data.choices[0]) {
        setResponse(data.choices[0].message.content);
      } else {
        setResponse('I apologize, but I encountered an issue processing your question. Please try again.');
      }
    } catch (error) {
      console.error('Error asking question:', error);
      setResponse('I apologize, but I encountered an error. Please try again or visit the Ask page.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Hero Section */}
      <div className="relative h-screen min-h-96">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img 
          src={heroImage} 
          alt="Zen Mind - A contemplative scene representing timeless wisdom" 
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Welcome to <span className="text-yellow-300">Sariputra App</span>
            </h1>
            <p className="text-xl text-white mb-8 drop-shadow-md">
              Discover timeless wisdom through contemplative insights that distill knowledge 
              from masters of wisdom since the beginningless past. Explore philosophy, 
              management, and life guidance rooted in ancient understanding and clear insight.
            </p>
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleQuickAsk} className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <div className="mb-4">
                  <textarea
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Ask Sariputra: What wisdom do you seek today?"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    disabled={loading}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading || !question.trim()}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Consulting the wisdom...' : 'Seek Wisdom'}
                </button>
              </form>
              
              {response && (
                <div className="mt-6 bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-primary-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Sariputra's Wisdom
                  </h3>
                  <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">
                    {response}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <a
                      href="/ask"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Explore more wisdom →
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Development Status & Vision */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-400 rounded-lg p-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-orange-800 mb-4">
                  🚧 App Currently in Development
                </h3>
                <div className="text-orange-700 space-y-4">
                  <p>
                    Welcome to Sariputra App! We're currently in the development stage, building something transformative 
                    for spreading consciousness among ordinary folk. While we work on completing the full application, 
                    we encourage you to explore our current content and vision.
                  </p>
                  
                  <div className="bg-white/60 rounded-lg p-6">
                    <h4 className="font-semibold text-orange-800 mb-3">🎵 Current Content Available:</h4>
                    <p className="mb-3">
                      Check out our content on <strong>TikTok</strong> and <strong>YouTube</strong> for current updates! 
                      We're uploading over 100 music tracks featuring content about the contemporary 
                      world's human condition, consciousness, and transformation.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <a 
                        href="https://www.youtube.com/@RasKalki" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136C4.495 20.455 12 20.455 12 20.455s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        YouTube
                      </a>
                      <a 
                        href="/my-music" 
                        className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                      >
                        🎵 My Music Page
                      </a>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                    <h4 className="font-semibold text-green-800 mb-3">🌍 Our Vision for Africa & Beyond:</h4>
                    <p className="text-green-700">
                      We're seeking collaboration in building something that can spread consciousness among ordinary people. 
                      We're creating music that discusses the state of mankind through contemplative composition. 
                      <strong> How can we scale these and other such efforts so that we have a better Africa 
                      in the next 20 years?</strong>
                    </p>
                    <p className="text-green-700 mt-3">
                      Instead of just complaining about the challenges facing us, let's actually do something about it. 
                      Join us in this mission of transformation through consciousness, creativity, and collaborative action.
                    </p>
                    <div className="mt-4">
                      <a 
                        href="/contact" 
                        className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        🤝 Join the Collaboration
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Ask Any Question</h3>
            <p className="text-gray-600">Get wisdom-based guidance on life's challenges, relationships, and inner growth from various wisdom traditions.</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Contemplative Insights</h3>
            <p className="text-gray-600">Receive thoughtful responses drawing from masters of wisdom and various traditions of knowledge and understanding.</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Track Your Journey</h3>
            <p className="text-gray-600">Optional account creation lets you save questions and see your wisdom evolution over time.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white rounded-lg shadow-sm p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Deepen Your Wisdom Journey
          </h2>
          <p className="text-gray-600 mb-6">
            Ready for more personalized guidance? Create an account to save your conversations, track insights, and access advanced features like RAG-powered wisdom from sacred texts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/ask"
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Advanced Wisdom Chat
            </a>
            <a
              href="/register"
              className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Create Free Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;