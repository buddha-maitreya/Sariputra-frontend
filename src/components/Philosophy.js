import React from 'react';
import './ArticleSubpage.css';

const Philosophy = () => {
  return (
    <div className="subpage-container">
      <div className="subpage-content">
        <h1>Philosophy</h1>
        <p className="subpage-intro">
          Deep philosophical inquiries into fundamental questions of existence, consciousness, 
          and reality. Drawing from both Eastern and Western philosophical traditions to 
          explore the nature of truth and understanding.
        </p>
        
        <div className="content-placeholder">
          <h2>Coming Soon</h2>
          <p>This section will explore:</p>
          <ul>
            <li>Metaphysical investigations</li>
            <li>Epistemological studies</li>
            <li>Ethics and moral philosophy</li>
            <li>Philosophy of mind and consciousness</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;