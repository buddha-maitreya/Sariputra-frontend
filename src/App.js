import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './utils/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Contact from './pages/Contact';
import Articles from './pages/Articles';
import Blog from './pages/Blog';
import References from './pages/References';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Ask from './pages/Ask';
import History from './pages/History';

// Article components
import SocialPracticesBodhisattva from './pages/articles/SocialPracticesBodhisattva';
import ExcellencesBodhisattva from './pages/articles/ExcellencesBodhisattva';
import BodhisattvaFreedomAttachments from './pages/articles/BodhisattvaFreedomAttachments';
import MaitreyaCrownContemplationWisdom from './pages/articles/MaitreyaCrownContemplationWisdom';
import MaitreyaPerfectionsGenerosityMoralityToleranceEffort from './pages/articles/MaitreyaPerfectionsGenerosityMoralityToleranceEffort';
import SpiritualityStillnessModernChaos from './pages/articles/SpiritualityStillnessModernChaos';
import CouncilNicaeaChristianDominance from './pages/articles/CouncilNicaeaChristianDominance';
import EffectiveExecutiveMindfulLeadership from './pages/articles/EffectiveExecutiveMindfulLeadership';
import MeditationKnowledgeWorkerProductivity from './pages/articles/MeditationKnowledgeWorkerProductivity';
import DruckerManagementContemplativeLeadership from './pages/articles/DruckerManagementContemplativeLeadership';
import HermesTrismegistusEnlightenment from './pages/articles/HermesTrismegistusEnlightenment';
import RenaissanceProtestantEnlightenment from './pages/articles/RenaissanceProtestantEnlightenment';
import ModernPhilosophyKeyFigures from './pages/articles/ModernPhilosophyKeyFigures';
import RumiPathLove from './pages/articles/RumiPathLove';
import LaoTzuWuWei from './pages/articles/LaoTzuWuWei';
import MindfulnessModernLife from './pages/articles/MindfulnessModernLife';
import SacredFeminineWisdom from './pages/articles/SacredFeminineWisdom';
import MysticalIslamSufism from './pages/articles/MysticalIslamSufism';
import HinduDharmaVedanta from './pages/articles/HinduDharmaVedanta';
import FiveFoundationsRealization from './pages/articles/FiveFoundationsRealization';
import SixBridgesBeyondShore from './pages/articles/SixBridgesBeyondShore';
import UnshakableTirelessWise from './pages/articles/UnshakableTirelessWise';
import CollapseConscienceFallGrace from './pages/articles/CollapseConscienceFallGrace';
import ConscienceOfBrave from './pages/articles/ConscienceOfBrave';

// Blog components
import AIMirrorSelfDiscoveryEnlightenment from './pages/blog/AIMirrorSelfDiscoveryEnlightenment';
import DigitalDharmaTeacherAIGuidance from './pages/blog/DigitalDharmaTeacherAIGuidance';

import './index.css';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }
  
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const OptionalAuthRoute = ({ children }) => {
  const { loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }
  
  return children;
};

const PublicRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }
  
  return isAuthenticated ? <Navigate to="/dashboard" /> : children;
};

function AppContent() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/references" element={<References />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Article Routes */}
          <Route path="/articles/social-practices-bodhisattva" element={<SocialPracticesBodhisattva />} />
          <Route path="/articles/excellences-bodhisattva" element={<ExcellencesBodhisattva />} />
          <Route path="/articles/bodhisattva-freedom-attachments" element={<BodhisattvaFreedomAttachments />} />
          <Route path="/articles/maitreya-crown-contemplation-wisdom" element={<MaitreyaCrownContemplationWisdom />} />
          <Route path="/articles/maitreya-perfections-generosity-morality-tolerance-effort" element={<MaitreyaPerfectionsGenerosityMoralityToleranceEffort />} />
          <Route path="/articles/spirituality-stillness-modern-chaos" element={<SpiritualityStillnessModernChaos />} />
          <Route path="/articles/council-nicaea-christian-dominance" element={<CouncilNicaeaChristianDominance />} />
          <Route path="/articles/effective-executive-mindful-leadership" element={<EffectiveExecutiveMindfulLeadership />} />
          <Route path="/articles/meditation-knowledge-worker-productivity" element={<MeditationKnowledgeWorkerProductivity />} />
          <Route path="/articles/drucker-management-contemplative-leadership" element={<DruckerManagementContemplativeLeadership />} />
          <Route path="/articles/hermes-trismegistus-enlightenment" element={<HermesTrismegistusEnlightenment />} />
          <Route path="/articles/renaissance-protestant-enlightenment" element={<RenaissanceProtestantEnlightenment />} />
          <Route path="/articles/modern-philosophy-key-figures" element={<ModernPhilosophyKeyFigures />} />
          <Route path="/articles/rumi-path-love" element={<RumiPathLove />} />
          <Route path="/articles/lao-tzu-wu-wei" element={<LaoTzuWuWei />} />
          <Route path="/articles/mindfulness-modern-life" element={<MindfulnessModernLife />} />
          <Route path="/articles/sacred-feminine-wisdom" element={<SacredFeminineWisdom />} />
          <Route path="/articles/mystical-islam-sufism" element={<MysticalIslamSufism />} />
          <Route path="/articles/hindu-dharma-vedanta" element={<HinduDharmaVedanta />} />
          <Route path="/articles/five-foundations-realization" element={<FiveFoundationsRealization />} />
          <Route path="/articles/six-bridges-beyond-shore" element={<SixBridgesBeyondShore />} />
          <Route path="/articles/unshakable-tireless-wise" element={<UnshakableTirelessWise />} />
          <Route path="/articles/collapse-conscience-fall-grace" element={<CollapseConscienceFallGrace />} />
          <Route path="/articles/conscience-of-brave" element={<ConscienceOfBrave />} />
          
          {/* Blog Routes */}
          <Route path="/blog/ai-mirror-self-discovery-enlightenment" element={<AIMirrorSelfDiscoveryEnlightenment />} />
          <Route path="/blog/digital-dharma-teacher-ai-guidance" element={<DigitalDharmaTeacherAIGuidance />} />
          
          <Route
            path="/ask"
            element={
              <OptionalAuthRoute>
                <Ask />
              </OptionalAuthRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/history"
            element={
              <PrivateRoute>
                <History />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
      <Toaster position="top-right" />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;