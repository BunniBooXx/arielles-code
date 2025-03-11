import React from 'react';
import '../characters.css';
import arielleImage from '../arielle.webp';
import kazukiImage from '../kazuki.webp';

const Characters = () => {
  return (
    <div className="characters-container">
      <div className="characters-header">
        <h1 className="characters-title">✧ Meet The Characters ✧</h1>
        <div className="sparkle-divider">･ﾟ: *✧･ﾟ♡･ﾟ✧*:･ﾟ✧</div>
      </div>
      
      <div className="character-grid">
        <div className="character-card">
          <div className="portrait-container">
            <img src={arielleImage} alt="Arielle" className="portrait-image" />
          </div>
          <h2 className="character-name">Arielle</h2>
          <div className="character-info">
            <p><span className="info-label">✧ Star Sign:</span> Scorpio</p>
            <p><span className="info-label">✧ Personality:</span> Brave & Cheerful</p>
            <p><span className="info-label">✧ Eyes:</span> Chestnut Brown</p>
            <p><span className="info-label">✧ Hair:</span> Copper Red</p>
            <p><span className="info-label">✧ School Life:</span> Drama Club Star ★</p>
            <p><span className="info-label">✧ Secret:</span> Hidden singing talent ♪</p>
          </div>
        </div>

        <div className="character-card">
          <div className="portrait-container">
            <img src={kazukiImage} alt="Kazuki" className="portrait-image" />
          </div>
          <h2 className="character-name">Kazuki</h2>
          <div className="character-info">
            <p><span className="info-label">✧ Star Sign:</span> Taurus</p>
            <p><span className="info-label">✧ Personality:</span> Kind & Analytical</p>
            <p><span className="info-label">✧ Eyes:</span> Onyx</p>
            <p><span className="info-label">✧ Hair:</span> Black</p>
            <p><span className="info-label">✧ School Life:</span> Top Student ★</p>
            <p><span className="info-label">✧ Secret:</span> Piano prodigy ♪</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characters;
