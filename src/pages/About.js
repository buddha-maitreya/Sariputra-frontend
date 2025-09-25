import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              About Sariputra
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Named after one of Buddha's principal disciples, Sariputra is your gateway to 
              exploring the wisdom of Siddhartha Gautama (the historical Buddha) and Maitreya 
              (the future Buddha) through modern AI technology.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Ancient Wisdom, Modern Access
              </h3>
              <p className="text-gray-600">
                Sariputra bridges the gap between the teachings of Siddhartha and Maitreya and contemporary life. 
                Our AI-powered platform draws from their profound wisdom to provide 
                personalized guidance on life's challenges.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Personalized Insights
              </h3>
              <p className="text-gray-600">
                Whether you're seeking guidance on relationships, career decisions, spiritual growth, 
                or daily mindfulness, Sariputra offers thoughtful, compassionate responses rooted 
                in the teachings of Siddhartha and Maitreya.
              </p>
            </div>
          </div>

          {/* Who Was Sariputra Section */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Who Was Sariputra?
            </h2>
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">
                Sariputra (Sanskrit: Śāriputra) was one of the Buddha's two chief disciples, 
                renowned for his exceptional wisdom and analytical mind. Born as Upatissa in ancient India, 
                he became known as Sariputra (son of Sari) after his mother.
              </p>
              <p className="mb-4">
                He was celebrated for his ability to explain complex dharma concepts clearly and 
                systematically, making Buddhist teachings accessible to people from all walks of life. 
                His methodical approach to wisdom and his compassionate teaching style inspire our 
                platform's mission.
              </p>
              <p>
                Just as Sariputra helped countless individuals understand the path to enlightenment, 
                our platform aims to make ancient wisdom accessible and relevant to modern seekers.
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ask Questions</h3>
              <p className="text-gray-600 text-sm">
                Submit your questions and receive thoughtful responses based on the wisdom of Siddhartha and Maitreya
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Track Progress</h3>
              <p className="text-gray-600 text-sm">
                Review your wisdom journey and see how insights evolve over time
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice Mindfulness</h3>
              <p className="text-gray-600 text-sm">
                Integrate the teachings of Siddhartha and Maitreya into daily life with practical guidance
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-primary-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Begin Your Wisdom Journey
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether you're new to the teachings of Siddhartha and Maitreya or a seasoned practitioner, 
              Sariputra offers insights tailored to your unique path.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/ask"
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Ask a Question
              </a>
              <a
                href="/register"
                className="border border-primary-600 text-primary-600 hover:bg-primary-50 font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Create Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;