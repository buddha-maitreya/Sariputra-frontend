import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Articles from './components/Articles';
import Critique from './components/Critique';

// Articles subpages
import MastersMystics from './components/MastersMystics';
import Management from './components/Management';
import Philosophy from './components/Philosophy';
import Religion from './components/Religion';
import BodhisattvaPath from './components/BodhisattvaPath';
import Spirituality from './components/Spirituality';

// Critique subpages
import DevilsDictionary from './components/DevilsDictionary';
import MenckenCorner from './components/MenckenCorner';
import PhilosophersStone from './components/PhilosophersStone';
import ContemporarySociety from './components/ContemporarySociety';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            {/* Articles routes */}
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/masters-mystics" element={<MastersMystics />} />
            <Route path="/articles/management" element={<Management />} />
            <Route path="/articles/philosophy" element={<Philosophy />} />
            <Route path="/articles/religion" element={<Religion />} />
            <Route path="/articles/bodhisattva-path" element={<BodhisattvaPath />} />
            <Route path="/articles/spirituality" element={<Spirituality />} />
            
            {/* Critique routes */}
            <Route path="/critique" element={<Critique />} />
            <Route path="/critique/devils-dictionary" element={<DevilsDictionary />} />
            <Route path="/critique/mencken-corner" element={<MenckenCorner />} />
            <Route path="/critique/philosophers-stone" element={<PhilosophersStone />} />
            <Route path="/critique/contemporary-society" element={<ContemporarySociety />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;