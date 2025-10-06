// Google Analytics utility functions
// This module provides functions to track user interactions and page views for the Sariputra app

// Configuration
const GA_TRACKING_ID = 'G-VZ6B8YECM4';

// Check if gtag is available
const isGtagAvailable = () => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// Track page views
export const trackPageView = (path) => {
  if (isGtagAvailable()) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: path,
    });
  }
};

// Track custom events
export const trackEvent = (action, category = 'engagement', label = '', value = 0) => {
  if (isGtagAvailable()) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track specific user interactions for available pages
export const trackUserInteraction = {
  // Track navigation clicks for main pages
  navigation: (destination) => {
    trackEvent('navigate', 'navigation', destination);
  },

  // Track article category clicks
  articleCategoryView: (categoryName) => {
    trackEvent('view_article_category', 'content', categoryName);
  },

  // Track specific article reads
  articleRead: (articleTitle, category = 'articles') => {
    trackEvent('read_article', 'content', articleTitle);
  },

  // Track critique section interactions
  critiqueView: (sectionName) => {
    trackEvent('view_critique_section', 'content', sectionName);
  },

  // Track music player interactions
  musicPlay: (trackName) => {
    trackEvent('play_music', 'media', trackName);
  },

  musicPause: (trackName) => {
    trackEvent('pause_music', 'media', trackName);
  },

  // Track contact form submission
  contactSubmit: () => {
    trackEvent('contact_submit', 'user_engagement');
  },

  // Track external link clicks (for social media, etc.)
  externalLink: (url, linkName) => {
    trackEvent('click_external_link', 'engagement', `${linkName}: ${url}`);
  },

  // Track search interactions (if any search functionality exists)
  search: (searchTerm) => {
    trackEvent('search', 'engagement', searchTerm);
  },

  // Track time spent on page (call this when user leaves page)
  timeOnPage: (pageName, timeInSeconds) => {
    trackEvent('time_on_page', 'engagement', pageName, timeInSeconds);
  },

  // Track scroll depth
  scrollDepth: (percentage) => {
    trackEvent('scroll_depth', 'engagement', `${percentage}%`, percentage);
  },

  // Track home page quick question submission
  homeQuickQuestion: (questionLength) => {
    trackEvent('home_quick_question', 'engagement', 'question_submitted', questionLength);
  },

  // Track article subcategory navigation
  articleSubcategoryView: (mainCategory, subCategory) => {
    trackEvent('view_article_subcategory', 'content', `${mainCategory} > ${subCategory}`);
  },

  // Track critique subcategory navigation  
  critiqueSubcategoryView: (subCategory) => {
    trackEvent('view_critique_subcategory', 'content', subCategory);
  },

  // Track general events (fallback function)
  trackEvent: (action, category, label = '', value = 0) => {
    trackEvent(action, category, label, value);
  }
};

// Track user demographics (if available)
export const setUserProperties = (properties) => {
  if (isGtagAvailable()) {
    window.gtag('config', GA_TRACKING_ID, {
      custom_map: properties
    });
  }
};

// Enhanced conversion tracking for goals
export const trackConversion = (conversionName, value = 0, currency = 'USD') => {
  if (isGtagAvailable()) {
    window.gtag('event', 'conversion', {
      send_to: GA_TRACKING_ID,
      value: value,
      currency: currency,
      transaction_id: Date.now().toString()
    });
  }
};

// Track specific page interactions for available pages
export const trackPageInteraction = {
  // Home page interactions
  home: {
    quickQuestionSubmit: (questionText) => {
      trackEvent('home_quick_question_submit', 'engagement', 'quick_question', questionText.length);
    },
    exploreArticlesClick: () => {
      trackEvent('home_explore_articles_click', 'navigation', 'explore_articles');
    },
    exploreMusicClick: () => {
      trackEvent('home_explore_music_click', 'navigation', 'explore_music');
    }
  },

  // Articles page interactions
  articles: {
    categoryClick: (categoryName) => {
      trackEvent('articles_category_click', 'content', categoryName);
    },
    articleOpen: (articleTitle) => {
      trackEvent('article_open', 'content', articleTitle);
    }
  },

  // Critique page interactions
  critique: {
    sectionClick: (sectionName) => {
      trackEvent('critique_section_click', 'content', sectionName);
    }
  },

  // Contact page interactions
  contact: {
    formSubmit: (subject) => {
      trackEvent('contact_form_submit', 'user_engagement', subject);
    },
    socialMediaClick: (platform) => {
      trackEvent('contact_social_media_click', 'engagement', platform);
    }
  },

  // Music page interactions
  music: {
    trackPlay: (trackName) => {
      trackEvent('music_track_play', 'media', trackName);
    },
    trackPause: (trackName) => {
      trackEvent('music_track_pause', 'media', trackName);
    },
    trackSkip: (trackName) => {
      trackEvent('music_track_skip', 'media', trackName);
    }
  }
};

export default {
  trackPageView,
  trackEvent,
  trackUserInteraction,
  trackPageInteraction,
  setUserProperties,
  trackConversion
};