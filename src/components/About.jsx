// src/components/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../about.css';
import arielleBioImage from '../arielle_angry.png';

const About = () => {
  return (
    <div className="about-container">
      <div className="header-container">
        <h1 className="about-title">About Arielle's Code</h1>
        <div className="dropdown">
          <button className="dropbtn">Menu</button>
          <div className="dropdown-content">
            <Link to="/">Home</Link>
            <Link to="/game">Play Game</Link>
            <Link to="/characters">Characters</Link>
          </div>
        </div>
      </div>
      <div className="content-container">
        <div className="story-container">
          <h2 className="story-title">Arielle's Story</h2>
          <p className="story-text">
            With a passion for otome games and a childhood dream of living in Japan , sprinkled with a bit of code. Sugar, spice and everything nice.
          </p>
          <p className="story-text">
            That is how arielle's code was created! 
          </p>
          <p className="story-text">
            With her unique blend of creativity and technical prowess, Arielle's Code was born – a revolutionary platform that allowed users to immerse themselves in richly detailed narratives, where their choices and actions shaped the course of the story.
          </p>
        </div>
        <div className="image-container">
          <img src={arielleBioImage} alt="Arielle Bio" className="arielle-bio-image" />
        </div>
      </div>
    </div>
  );
};

export default About;