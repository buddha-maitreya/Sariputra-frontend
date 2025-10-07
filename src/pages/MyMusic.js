import React from 'react';
import { trackPageInteraction } from '../utils/analytics';

const MyMusic = () => {
  // Featured songs from YouTube channel
  const featuredSongs = [
    {
      id: 1,
      title: "Tilt the Graph to God",
      description: "Conscious Roots Dub - An exploration of higher states of awareness through meditative music composition",
      category: "Spirituality",
      videoId: "ldqzAQ-RI88", // Actual video from RasKalki channel
      thumbnail: `https://img.youtube.com/vi/ldqzAQ-RI88/mqdefault.jpg`
    },
    {
      id: 2,
      title: "The Full Chant",
      description: "Militant Dub Roots Vocal - A commentary on social justice and consciousness",
      category: "Politics",
      videoId: "V1ffKdoMaMo", // Actual video from RasKalki channel
      thumbnail: `https://img.youtube.com/vi/V1ffKdoMaMo/mqdefault.jpg`
    },
    {
      id: 3,
      title: "Teach the Light",
      description: "Roots Dub Meditation - Deep reflections on existence and spiritual practice",
      category: "Philosophy",
      videoId: "_rJSW318YtU", // Actual video from RasKalki channel
      thumbnail: `https://img.youtube.com/vi/_rJSW318YtU/mqdefault.jpg`
    },
    {
      id: 4,
      title: "The Seeker's Code",
      description: "Dub of Hidden Meanings - Exploring the relationship between consciousness and reality",
      category: "Consciousness",
      videoId: "xsRA9g4LGq0", // Actual video from RasKalki channel
      thumbnail: `https://img.youtube.com/vi/xsRA9g4LGq0/mqdefault.jpg`
    },
    {
      id: 5,
      title: "The Concentrated Essence",
      description: "Radio Edit - Observations on contemporary society and human behavior",
      category: "Social Commentary",
      videoId: "TrqugwuAKyQ", // Actual video from RasKalki channel
      thumbnail: `https://img.youtube.com/vi/TrqugwuAKyQ/mqdefault.jpg`
    },
    {
      id: 6,
      title: "The Sixfold Crown Dub",
      description: "A musical meditation on personal transformation and spiritual growth",
      category: "Spirituality",
      videoId: "J-lS3Fk7i70", // Actual video from RasKalki channel
      thumbnail: `https://img.youtube.com/vi/J-lS3Fk7i70/mqdefault.jpg`
    }
  ];

  const handleYouTubeClick = (songTitle) => {
    trackPageInteraction.music.playClick(songTitle);
  };

  const handleChannelClick = () => {
    trackPageInteraction.music.playClick('YouTube Channel Visit');
  };

  const SongCard = ({ song }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative group">
        <img 
          src={song.thumbnail} 
          alt={song.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
          <a
            href={`https://www.youtube.com/watch?v=${song.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleYouTubeClick(song.title)}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red-600 text-white p-3 rounded-full hover:bg-red-700"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </a>
        </div>
        <span className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 text-xs rounded-full">
          {song.category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{song.title}</h3>
        <p className="text-sm text-gray-600 mb-3">{song.description}</p>
        <a
          href={`https://www.youtube.com/watch?v=${song.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleYouTubeClick(song.title)}
          className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
        >
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136C4.495 20.455 12 20.455 12 20.455s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          Watch on YouTube
        </a>
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
            Exploring the intersection of meditative practice and meaningful content creation
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              A New Passion for Meditative Music Composition
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              I have discovered a newfound passion for creating music through meditative composition and mindful creativity. 
              This journey has opened up incredible possibilities for expressing complex ideas about 
              spirituality, philosophy, and human consciousness through the medium of sound and rhythm.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              I am actively seeking collaboration with other like-minded individuals who share a vision 
              of how creative expression can be leveraged to create meaningful impact in communities. Together, we can 
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
                Coming Soon: Meditative Music Creation Platform
              </h4>
              <p className="text-blue-800">
                I am currently developing a platform that will enable users to create 
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
              mindful creativity in service of higher consciousness and community education.
            </p>

            <div className="text-center mb-8">
              <a 
                href="https://www.youtube.com/RasKalki" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleChannelClick}
                className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136C4.495 20.455 12 20.455 12 20.455s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Visit My YouTube Channel - RasKalki
              </a>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Collaboration Opportunities
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              If you are passionate about creative expression for community education, or 
              spiritual development, I would love to connect with you. Whether you're a fellow creator, 
              developer, educator, or simply someone with innovative ideas about the potential of 
              mindful creativity in service of human consciousness, let's explore how we can work together to make a 
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

        {/* Featured Songs Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Featured Songs from My YouTube Channel
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore a selection of my music covering spirituality, philosophy, politics, and consciousness. 
              Click on any song to watch it on YouTube.
            </p>
          </div>

          {/* Featured Songs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredSongs.map((song) => (
              <SongCard key={song.id} song={song} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Discover More Music
            </h3>
            <p className="text-gray-700 mb-6">
              Visit my YouTube channel to explore over 100+ tracks covering diverse topics 
              and themes. New music is regularly added to the collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.youtube.com/RasKalki" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleChannelClick}
                className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136C4.495 20.455 12 20.455 12 20.455s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Explore Full Channel
              </a>
              <a 
                href="https://www.youtube.com/RasKalki/playlists" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => handleYouTubeClick('Playlists')}
                className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                Browse Playlists
              </a>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="mt-8 bg-gray-50 rounded-lg p-6 text-center">
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Stay Updated with New Releases
            </h4>
            <p className="text-gray-600 mb-4">
              Subscribe to my YouTube channel to be notified when new music is released.
            </p>
            <a 
              href="https://www.youtube.com/RasKalki" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => handleYouTubeClick('Visit Channel')}
              className="inline-flex items-center px-4 py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors duration-200"
            >
              🎵 Visit My Channel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyMusic;