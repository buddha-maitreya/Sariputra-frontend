import React from 'react';
import './Critique.css';

const Critique = () => {
  return (
    <div className="critique-container">
      <div className="critique-content">
        <h1>Critique</h1>
        <p className="critique-intro">
          Critical examination of ideas, institutions, and contemporary phenomena through the lens 
          of wisdom and clear insight. A space for thoughtful analysis and discerning observation 
          of the world around us.
        </p>
        
        <div className="critique-grid">
          <div className="critique-category">
            <h2>The Devil's Dictionary</h2>
            <p>Sharp wit and satirical definitions that reveal hidden truths about human nature and society.</p>
          </div>
          
          <div className="critique-category">
            <h2>H.L. Mencken Corner</h2>
            <p>Incisive commentary and observations in the spirit of America's great social critic.</p>
          </div>
          
          <div className="critique-category">
            <h2>Philosopher's Stone</h2>
            <p>Transformative insights that turn conventional thinking into wisdom and understanding.</p>
          </div>
          
          <div className="critique-category">
            <h2>Critique of Contemporary Society</h2>
            <p>Thoughtful analysis of modern culture, institutions, and social phenomena.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Critique;