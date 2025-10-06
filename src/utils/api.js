import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
});

// Add auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API calls
export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  getMe: () => api.get('/auth/me'),
  refresh: () => api.post('/auth/refresh'),
};

// AI API calls
export const aiAPI = {
  ask: (questionData) => api.post('/ai/ask', questionData),
  chat: (message) => api.post('/chat', { message }),
  generateArticle: (topicData) => api.post('/ai/generate-article', topicData),
  getMeditation: (preferences) => api.post('/ai/meditation', { preferences }),
  getHealth: () => api.get('/ai/health'),
};

// Query API calls
export const queryAPI = {
  ask: (questionData) => api.post('/queries/ask', questionData),
  getHistory: (params) => api.get('/queries/history', { params }),
  getQuery: (id) => api.get(`/queries/${id}`),
  rateQuery: (id, rating) => api.put(`/queries/${id}/rate`, { rating }),
  getPublic: (params) => api.get('/queries/public/recent', { params }),
};

// Music/Tracks API calls
export const musicAPI = {
  // Get all tracks
  getTracks: (params) => api.get('/tracks', { params }),
  
  // Get single track
  getTrack: (id) => api.get(`/tracks/${id}`),
  
  // Upload new track (admin only)
  uploadTrack: (formData) => api.post('/tracks/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  
  // Update track metadata
  updateTrack: (id, data) => api.put(`/tracks/${id}`, data),
  
  // Delete track
  deleteTrack: (id) => api.delete(`/tracks/${id}`),
  
  // Download track (increments download counter)
  downloadTrack: (id) => api.get(`/tracks/${id}/download`, {
    responseType: 'blob'
  }),
  
  // Get track download URL
  getDownloadUrl: (id) => api.get(`/tracks/${id}/download-url`),
  
  // Search tracks
  searchTracks: (query, filters) => api.get('/tracks/search', { 
    params: { q: query, ...filters } 
  }),
  
  // Get tracks by category/tag
  getTracksByCategory: (category) => api.get(`/tracks/category/${category}`),
  
  // Get featured tracks
  getFeaturedTracks: () => api.get('/tracks/featured'),
  
  // Track analytics
  getTrackStats: (id) => api.get(`/tracks/${id}/stats`),
};

export default api;