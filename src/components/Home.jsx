// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../home.css'; // Import the CSS file
import '../responsive.css';
import arielleImage from '../pettite.png'; // Ensure the image path is correct


const Home = () => {
  return (
    <div className="home-container">
      <div className="header-container">
        <h1 className="home-title">Arielle's Code</h1>
        <div className="dropdown">
          <button className="dropbtn">Menu</button>
          <div className="dropdown-content">
            <Link to="/about">About Page</Link>
            <Link to="/game">Play Game</Link>
            <Link to="/characters">Characters Page</Link>
          </div>
        </div>
      </div>
      <img src={arielleImage} alt="Arielle" className="home-image" />
    </div>
  );
};

export default Home;

