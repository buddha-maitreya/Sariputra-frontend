import React, { useState } from 'react';
import { trackPageInteraction } from '../utils/analytics';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Track contact form submission with subject
    trackPageInteraction.contact.formSubmit(formData.subject);
    
    // In a real app, you would send this to your backend
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Thank You!
              </h2>
              <p className="text-gray-600">
                Your message has been received. We'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Connect & Collaborate
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Have questions about this wisdom journey? Interested in collaboration? 
              I'm always eager to connect with fellow seekers and learn from diverse perspectives.
            </p>
            <p className="text-lg text-primary-600 font-medium">
              As a perpetual student of life, I'm open to engaging with others who share a passion for truth and clarity.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Let's Connect
              </h2>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Open for Collaboration & Learning</h3>
                    <p className="text-blue-800 text-sm">
                      Whether you're sharing insights, seeking guidance, or interested in collaboration, 
                      I welcome all sincere inquiries. As a perpetual student of life, I'm always eager 
                      to learn from others and explore truth together.
                    </p>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="collaboration">Collaboration Opportunity</option>
                    <option value="wisdom-sharing">Wisdom Sharing</option>
                    <option value="technical">Technical Support</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="learning">Learning Exchange</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Please share your thoughts, questions, or feedback..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 px-4 rounded-md font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Personal Email</h4>
                      <p className="text-gray-600">buddhakamau@gmail.com</p>
                      <p className="text-sm text-gray-500 mt-1">Direct contact for collaboration and wisdom sharing</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Response Approach</h4>
                      <p className="text-gray-600">Thoughtful responses from a fellow seeker</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Open to Learning</h4>
                      <p className="text-gray-600">Always eager to engage with fellow students of life</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Phone & WhatsApp</h4>
                      <p className="text-gray-600">+254797168229</p>
                      <p className="text-sm text-gray-500 mt-1">Available for meaningful conversations</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Connect on Social Media
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://twitter.com/buddhametteya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={() => trackPageInteraction.contact.socialMediaClick('Twitter')}
                  >
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Twitter</p>
                      <p className="text-sm text-gray-600">@buddhametteya</p>
                    </div>
                  </a>

                  <a
                    href="https://www.tiktok.com/@buddhametteya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={() => trackPageInteraction.contact.socialMediaClick('TikTok')}
                  >
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">TikTok</p>
                      <p className="text-sm text-gray-600">@buddhametteya</p>
                    </div>
                  </a>

                  <a
                    href="https://www.threads.net/@buddhametteya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={() => trackPageInteraction.contact.socialMediaClick('Threads')}
                  >
                    <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068c0-3.518.85-6.373 2.495-8.424C5.845 1.205 8.598.024 12.186 0h.007c3.581.024 6.334 1.205 8.184 3.509C21.65 5.56 22.5 8.414 22.5 11.932c0 3.518-.85 6.373-2.495 8.424C18.155 22.795 15.402 23.976 11.814 24h.372zm-.007-21.5c-2.769.019-4.898.895-6.326 2.601C4.395 6.931 3.75 9.314 3.75 12.068c0 2.754.645 5.137 1.913 7.081 1.428 1.706 3.557 2.582 6.326 2.601h.007c2.769-.019 4.898-.895 6.326-2.601 1.268-1.944 1.913-4.327 1.913-7.081 0-2.754-.645-5.137-1.913-7.081-1.428-1.706-3.557-2.582-6.326-2.601h-.007z"/>
                        <path d="M15.333 8.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zM12 5.5c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5 6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5zm0 10.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Threads</p>
                      <p className="text-sm text-gray-600">@buddhametteya</p>
                    </div>
                  </a>

                  <a
                    href="https://www.facebook.com/buddhametteya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={() => trackPageInteraction.contact.socialMediaClick('Facebook')}
                  >
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Facebook</p>
                      <p className="text-sm text-gray-600">@buddhametteya</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-primary-50 rounded-lg p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Collaboration & Learning
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      Open to Collaboration
                    </h4>
                    <p className="text-sm text-gray-600">
                      Interested in working together on wisdom projects, sharing insights, 
                      or exploring truth from different perspectives.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      Learning Exchange
                    </h4>
                    <p className="text-sm text-gray-600">
                      As a perpetual student of life, I value learning from diverse viewpoints 
                      and authentic seekers of truth.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      Wisdom Without Dogma
                    </h4>
                    <p className="text-sm text-gray-600">
                      This platform is about pure insight and clarity, free from rigid 
                      doctrine or ritualistic practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;