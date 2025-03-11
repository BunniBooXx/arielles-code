import React from 'react';
import '../underconstruction.css';
import constructionImage from '../kawaii_construction.webp';

const UnderConstruction = () => {
  return (
    <div className="construction-container">
      <div className="construction-content">
        <h1 className="construction-title">✧ Coming Soon ✧</h1>
        <div className="sparkle-divider">･ﾟ: *✧･ﾟ♡･ﾟ✧*:･ﾟ✧</div>
        <img 
          src={constructionImage} 
          alt="Cute Construction" 
          className="construction-image"
        />
        <h2 className="construction-subtitle">This kawaii feature is under construction!</h2>
        <p className="construction-text">Our magical developers are working hard to bring you something special ♥</p>
      </div>
    </div>
  );
};

export default UnderConstruction;
