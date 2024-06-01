// src/components/Characters.jsx
import React from 'react';
import { Link } from'react-router-dom';
import '../characters.css'; // Import the CSS file
import arielleImage from '../arielle.png';
import kazukiImage from '../kazuki.png';
import '../responsive.css';

// Sample character data
const characters = [
  {
    name: 'Arielle',
    image: arielleImage,
    horoscope: 'Scorpio',
    personality: 'Brave, cheerful, and a bit stubborn',
    eyeColor: 'Chestnut Brown',
    hairColor: 'Copper Red',
    highschoolDescription: 'Arielle was the star of the drama club, always in the spotlight.',
    facts: 'Loves cats, dreams of traveling the world, and has a secret talent for singing.'
  },
  {
    name: 'Kazuki',
    image: kazukiImage,
    horoscope: 'Virgo',
    personality: 'Analytical, kind, and a perfectionist',
    eyeColor: 'Onyx',
    hairColor: 'Black',
    highschoolDescription: 'Kazuki was the top student, known for his intellect and quiet nature.',
    facts: 'Enjoys reading mystery novels, has a collection of vintage watches, and can play the piano.'
  }
  // Add more characters as needed
];

const Characters = () => {
  return (
    <div className="characters-container">
      <h1 className="characters-title">Characters</h1>
      <div className="dropdown">
          <button className="dropbtn">Menu</button>
          <div className="dropdown-content">
            <Link to="/about">About Page</Link>
            <Link to="/game">Play Game</Link>
            <Link to="/characters">Characters Page</Link>
          </div>
        </div>
      <div className="characters-list">
        {characters.map((character, index) => (
          <div key={index} className="character-card">
            <img src={character.image} alt={character.name} className="character-image" />
            <h2 className="character-name">{character.name}</h2>
            <p className="character-detail"><strong>Horoscope:</strong> {character.horoscope}</p>
            <p className="character-detail"><strong>Personality:</strong> {character.personality}</p>
            <p className="character-detail"><strong>Eye Color:</strong> {character.eyeColor}</p>
            <p className="character-detail"><strong>Hair Color:</strong> {character.hairColor}</p>
            <p className="character-detail"><strong>High School:</strong> {character.highschoolDescription}</p>
            <p className="character-detail"><strong>Random Facts:</strong> {character.facts}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
