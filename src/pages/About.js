import React from 'react';
import aboutImage from '../assets/images/Pensive_Bodhisattva_02.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              About This Journey
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Born from a passionate hobby and 15 years of post-awakening exploration, this platform 
              endeavors to distill wisdom and insights from all masters of wisdom since the 
              beginningless past — offering pure intellect over ritual dogma.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                A Passion Project
              </h3>
              <p className="text-gray-600">
                This platform emerges as a passionate hobby, driven by the recognition that after 
                awakening and years of perfecting that realization, finding distilled, unstained 
                wisdom and insight to guide others to clarity without dogma or doctrine remains remarkably difficult.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Pure Intellect Over Ritual
              </h3>
              <p className="text-gray-600">
                The inspiration behind this initiative is simple: to help awaken others via pure intellect 
                as opposed to ritual dogma and mere belief. True wisdom transcends sectarian boundaries 
                and speaks directly to the clear mind seeking understanding.
              </p>
            </div>
          </div>

          {/* Personal Story Section */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-16">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src={aboutImage} 
                  alt="Pensive Bodhisattva in contemplative meditation" 
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  The Journey Behind This Platform
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4 text-lg leading-relaxed">
                    Fifteen years ago, awakening dawned — not as a mystical experience shrouded in mystery, 
                    but as the simple recognition of what had always been present. The years that followed involved 
                    the gradual perfection and integration of this understanding into every aspect of life and being.
                  </p>
                  <p className="mb-4 leading-relaxed">
                    Yet in this journey, a striking challenge became apparent: <strong>the profound difficulty 
                    of finding pure, distilled wisdom free from the accumulated layers of dogma, ritual, and 
                    institutional doctrine</strong> that so often obscure the original clarity of insight.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-6 my-6">
                    <p className="text-blue-800 italic mb-0">
                      "The unexamined life is not worth living... I know that I know nothing, yet in this knowing 
                      lies the beginning of all wisdom. Truth is not hidden from those who seek it with sincerity, 
                      but rather obscured by our attachment to what we think we already know."
                    </p>
                    <p className="text-blue-600 text-sm mt-3 font-medium">
                      — Socrates, as recorded by Plato
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Who Was Sariputra Section */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Why "Sariputra"?
            </h2>
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">
                Sariputra (Sanskrit: Śāriputra) was one of history's most renowned wisdom keepers, 
                celebrated for his exceptional analytical mind and ability to distill complex spiritual 
                concepts into clear, practical guidance that could be immediately understood and applied.
              </p>
              <p className="mb-4">
                He became synonymous with <strong>wisdom without pretense</strong> — the rare ability 
                to cut through conceptual complexity and point directly to the heart of truth. His 
                methodical, intellectual approach to understanding perfectly embodies this platform's mission.
              </p>
              <p>
                Just as Sariputra helped countless individuals navigate life's deepest questions through 
                pure insight rather than ritual observance, this platform aims to make the collective 
                wisdom of all masters throughout history accessible through clarity of understanding rather 
                than adherence to any particular tradition or practice.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Direct Inquiry</h3>
              <p className="text-gray-600 text-sm">
                Ask questions and receive clear, direct responses free from dogmatic interpretations or prescribed practices
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Wisdom Articles</h3>
              <p className="text-gray-600 text-sm">
                Explore curated insights from masters of ageless wisdom, distilled into clear understanding
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pure Understanding</h3>
              <p className="text-gray-600 text-sm">
                Receive guidance based on direct recognition rather than belief systems or cultural traditions
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-primary-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Begin Your Journey of Understanding
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether you're new to contemplating life's deeper questions or have been seeking truth for years, 
              this platform offers direct pointers to clarity without the baggage of tradition or doctrine.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/ask"
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Ask a Question
              </a>
              <a
                href="/articles"
                className="border border-primary-600 text-primary-600 hover:bg-primary-50 font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Explore Articles
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;