import React from 'react';
import '../character.css';

const CharacterImage = ({ src, alt }) => {
  return (
    <div className="character-portrait">
      <img src={src} alt={alt} className="character-image" />
    </div>
  );
};

export default CharacterImage;

