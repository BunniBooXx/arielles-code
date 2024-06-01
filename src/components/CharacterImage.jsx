// src/components/CharacterImage.js
import React from 'react';

const CharacterImage = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className="character-image" />
  );
};

export default CharacterImage;
