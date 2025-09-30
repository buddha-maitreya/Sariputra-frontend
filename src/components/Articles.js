import React from 'react';
import './Articles.css';

const Articles = () => {
  return (
    <div className="articles-container">
      <div className="articles-content">
        <h1>Articles</h1>
        <p className="articles-intro">
          Explore our comprehensive collection of articles spanning various domains of wisdom and knowledge.
          Each section offers deep insights from masters of wisdom since the beginningless past.
        </p>
        
        <div className="articles-grid">
          <div className="article-category">
            <h2>Masters & Mystics</h2>
            <p>Profound teachings and life stories of awakened beings throughout history.</p>
          </div>
          
          <div className="article-category">
            <h2>Management</h2>
            <p>Wisdom-based approaches to leadership, organization, and conscious business practices.</p>
          </div>
          
          <div className="article-category">
            <h2>Philosophy</h2>
            <p>Timeless philosophical inquiries into the nature of reality, consciousness, and existence.</p>
          </div>
          
          <div className="article-category">
            <h2>Religion</h2>
            <p>Comparative studies of world religions and their contributions to human understanding.</p>
          </div>
          
          <div className="article-category">
            <h2>Bodhisattva Path</h2>
            <p>The compassionate way of awakening for the benefit of all sentient beings.</p>
          </div>
          
          <div className="article-category">
            <h2>Spirituality</h2>
            <p>Meditation, yoga, and contemplative practices for inner transformation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;