import React from 'react';
import { Link } from 'react-router-dom';
import momawaken from '../assets/images/momawaken.jpg';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'AI as a Mirror: Accelerating Self-Discovery on the Path to Enlightenment',
      slug: 'ai-mirror-self-discovery-enlightenment',
      excerpt: 'Artificial intelligence can serve as a powerful mirror for self-reflection, helping seekers identify patterns and blind spots that might take years to recognize through traditional practice alone.',
      readTime: '3 min read',
      publishedDate: 'September 26, 2025',
      category: 'Technology & Spirituality',
      image: momawaken
    },
    {
      id: 2,
      title: 'The Digital Dharma Teacher: How AI Guidance Complements Traditional Wisdom',
      slug: 'digital-dharma-teacher-ai-guidance',
      excerpt: 'While AI cannot replace the irreplaceable role of an accomplished spiritual friend, it can provide continuous support and personalized guidance that accelerates learning between formal teachings.',
      readTime: '3 min read',
      publishedDate: 'September 26, 2025',
      category: 'Technology & Spirituality',
      image: momawaken
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Wisdom Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Exploring the intersection of ancient wisdom and modern technology, 
              where timeless insights meet contemporary innovation.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm ml-3">
                        {post.publishedDate}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="hover:text-primary-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                      >
                        Read more
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                      <span className="text-sm text-gray-500">
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Explore AI-Enhanced Wisdom?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Experience firsthand how artificial intelligence can support your spiritual journey. 
              Ask Sariputra any question about life, spirituality, or personal growth.
            </p>
            <Link
              to="/ask"
              className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Ask a Question
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;