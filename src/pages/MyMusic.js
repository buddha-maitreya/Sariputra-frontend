import React from 'react';

const MyMusic = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            My Music
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Exploring the intersection of artificial intelligence and meaningful content creation
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              A New Passion for AI-Generated Music
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              I have discovered a newfound passion for creating music using artificial intelligence. 
              This journey has opened up incredible possibilities for expressing complex ideas about 
              spirituality, philosophy, and human consciousness through the medium of sound and rhythm.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              I am actively seeking collaboration with other like-minded individuals who share a vision 
              of how AI can be leveraged to create meaningful impact in communities. Together, we can 
              explore how content creation—whether through music, spoken word, or other creative 
              mediums—can serve as a powerful tool to educate the masses and inspire positive transformation.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Current Projects & Vision
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              My work spans diverse topics including politics, spirituality, consciousness, and social 
              commentary. Each track is crafted with the intention of sparking deeper reflection and 
              meaningful dialogue about the world we live in and the world we aspire to create.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-2">
                Coming Soon: AI Music Creation App
              </h4>
              <p className="text-blue-800">
                I am currently developing an AI-powered application that will enable users to create 
                their own music and spoken poetry focused on spiritual growth and personal development. 
                This tool will democratize creative expression and make it accessible to anyone seeking 
                to explore their inner wisdom through artistic creation.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Explore My Current Work
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              While I work on organizing and listing all my tracks here on this page, I invite you to 
              explore my current collection on YouTube, where I have already released over 100 tracks. 
              These compositions cover a wide range of topics and represent my ongoing exploration of 
              AI-assisted creativity in service of higher consciousness and community education.
            </p>

            <div className="text-center mb-8">
              <a 
                href="https://www.youtube.com/@RasKalki" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136C4.495 20.455 12 20.455 12 20.455s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Visit My YouTube Channel
              </a>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Collaboration Opportunities
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              If you are passionate about using AI for creative expression, community education, or 
              spiritual development, I would love to connect with you. Whether you're a fellow creator, 
              developer, educator, or simply someone with innovative ideas about the potential of AI 
              in service of human consciousness, let's explore how we can work together to make a 
              meaningful impact.
            </p>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Ready to Collaborate?
              </h4>
              <p className="text-gray-700 mb-4">
                Reach out through the contact page to discuss potential partnerships and creative ventures.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center px-4 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors duration-200"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        {/* Track Listing Placeholder */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Track Listings
          </h2>
          <div className="text-center py-12 text-gray-500">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
            <p className="text-lg mb-2">Track listings coming soon!</p>
            <p className="text-sm">
              In the meantime, visit my YouTube channel to explore my current collection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyMusic;