import React from 'react';
import { Link } from 'react-router-dom';
import '../home.css';
import arielleImage from '../arielle-smiling-cherry.webp';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to Arielle's Story</h1>
        <div className="home-description">
          <p>Begin your romantic adventure in Tokyo!</p>
          <div className="sparkle">✧･ﾟ</div>
        </div>
        <img 
          src={arielleImage} 
          alt="Arielle" 
          className="home-image"
          loading="lazy"
          width="600"
          height="auto"
        />
        <div className="button-wrapper">
          <Link to="/game" className="kawaii-button story-button">
            <span className="button-text">Start Story</span>
            <span className="button-icon">♥</span>
          </Link>
          <Link to="/characters" className="kawaii-button character-button">
            <span className="button-text">Meet Characters</span>
            <span className="button-icon">★</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;


