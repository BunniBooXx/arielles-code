// src/components/NavigationButton.js
import React from 'react';

const NavigationButton = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className="navigation-button">
      {text}
    </button>
  );
};

export default NavigationButton;
