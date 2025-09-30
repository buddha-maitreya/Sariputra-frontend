import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [articlesDropdown, setArticlesDropdown] = useState(false);
  const [critiqueDropdown, setCritiqueDropdown] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <Link to="/" className="nav-logo">Sariputra App</Link>
        </div>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          
          <li 
            className="nav-item dropdown"
            onMouseEnter={() => setArticlesDropdown(true)}
            onMouseLeave={() => setArticlesDropdown(false)}
          >
            <Link to="/articles" className="nav-link">Articles</Link>
            {articlesDropdown && (
              <ul className="dropdown-menu">
                <li><Link to="/articles/masters-mystics" className="dropdown-link">Masters & Mystics</Link></li>
                <li><Link to="/articles/management" className="dropdown-link">Management</Link></li>
                <li><Link to="/articles/philosophy" className="dropdown-link">Philosophy</Link></li>
                <li><Link to="/articles/religion" className="dropdown-link">Religion</Link></li>
                <li><Link to="/articles/bodhisattva-path" className="dropdown-link">Bodhisattva Path</Link></li>
                <li><Link to="/articles/spirituality" className="dropdown-link">Spirituality</Link></li>
              </ul>
            )}
          </li>
          
          <li 
            className="nav-item dropdown"
            onMouseEnter={() => setCritiqueDropdown(true)}
            onMouseLeave={() => setCritiqueDropdown(false)}
          >
            <Link to="/critique" className="nav-link">Critique</Link>
            {critiqueDropdown && (
              <ul className="dropdown-menu">
                <li><Link to="/critique/devils-dictionary" className="dropdown-link">The Devil's Dictionary</Link></li>
                <li><Link to="/critique/mencken-corner" className="dropdown-link">H.L. Mencken Corner</Link></li>
                <li><Link to="/critique/philosophers-stone" className="dropdown-link">Philosopher's Stone</Link></li>
                <li><Link to="/critique/contemporary-society" className="dropdown-link">Critique of Contemporary Society</Link></li>
              </ul>
            )}
          </li>
          
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;