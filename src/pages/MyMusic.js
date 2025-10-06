import React, { useState, useEffect } from 'react';
import { musicAPI } from '../utils/api';

const MyMusic = () => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchTracks();
  }, [selectedCategory]);

  const fetchTracks = async () => {
    try {
      setLoading(true);
      const response = selectedCategory === 'all' 
        ? await musicAPI.getTracks()
        : await musicAPI.getTracksByCategory(selectedCategory);
      setTracks(response.data.tracks || response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching tracks:', err);
      setError('Failed to load tracks. Please try again later.');
      setTracks([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (trackId, title) => {
    try {
      const response = await musicAPI.downloadTrack(trackId);
      
      // Create download link
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${title}.mp3`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Download failed:', err);
      alert('Download failed. Please try again.');
    }
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      fetchTracks();
      return;
    }
    
    try {
      setLoading(true);
      const response = await musicAPI.searchTracks(searchQuery);
      setTracks(response.data.tracks || response.data);
    } catch (err) {
      console.error('Search failed:', err);
      setError('Search failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { value: 'all', label: 'All Tracks' },
    { value: 'spirituality', label: 'Spirituality' },
    { value: 'politics', label: 'Politics' },
    { value: 'consciousness', label: 'Consciousness' },
    { value: 'philosophy', label: 'Philosophy' },
    { value: 'social-commentary', label: 'Social Commentary' }
  ];

  const TrackCard = ({ track }) => (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{track.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{track.description}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {track.tags && track.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <span>🕒 {Math.floor(track.duration / 60)}:{String(track.duration % 60).padStart(2, '0')}</span>
            <span>📥 {track.download_count || 0} downloads</span>
            <span>📅 {new Date(track.upload_date).toLocaleDateString()}</span>
          </div>
        </div>
        <div className="ml-4">
          <button
            onClick={() => handleDownload(track.id, track.title)}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>
  );
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

        {/* Track Listings Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 md:mb-0">
              My Tracks Collection
            </h2>
            
            {/* Search and Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Search tracks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  onClick={handleSearch}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  Search
                </button>
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading tracks...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12 text-red-600">
              <svg className="w-16 h-16 mx-auto mb-4 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-lg mb-2">Oops! Something went wrong</p>
              <p className="text-sm">{error}</p>
              <button 
                onClick={fetchTracks}
                className="mt-4 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Tracks List */}
          {!loading && !error && (
            <>
              {tracks.length > 0 ? (
                <div className="space-y-4">
                  {tracks.map((track) => (
                    <TrackCard key={track.id} track={track} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                  <p className="text-lg mb-2">No tracks found</p>
                  <p className="text-sm">
                    {searchQuery ? 'Try a different search term' : 'Tracks will appear here once uploaded to the database'}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyMusic;