import React from 'react';
import heroImage from '../assets/images/zenmind.jpg';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <img 
          src={heroImage} 
          alt="Zen Mind - A contemplative scene representing timeless wisdom" 
          className="w-full h-96 object-cover opacity-90"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Welcome to <span className="text-yellow-300">Sariputra</span>
            </h1>
            <p className="text-xl text-white mb-8 drop-shadow-md">
              Discover timeless wisdom through AI-powered insights that distill knowledge 
              from masters and mystics across all traditions. Explore philosophy, spirituality, 
              management, and life guidance rooted in ageless wisdom from the beginningless past.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/ask"
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Try It Now
              </a>
              <a
                href="/about"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Ask Any Question</h3>
            <p className="text-gray-600">Get wisdom-based guidance on life's challenges, relationships, and spiritual growth from all wisdom traditions.</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Insights</h3>
            <p className="text-gray-600">Receive thoughtful responses drawing from masters, mystics, and wisdom keepers across all spiritual traditions.</p>
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
            Start Your Wisdom Journey Today
          </h2>
          <p className="text-gray-600 mb-6">
            No account required to get started. Ask your first question and tap into the collective wisdom of ages.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/ask"
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Ask a Question
            </a>
            <a
              href="/features"
              className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;