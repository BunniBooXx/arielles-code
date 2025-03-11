import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        Arielle's Code ♥
      </Link>
      <div className="nav-dropdown">
        <button 
          className="nav-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu ↓
        </button>
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/game" onClick={() => setIsOpen(false)}>Play Story</Link>
          <Link to="/characters" onClick={() => setIsOpen(false)}>Characters</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/yuki" onClick={() => setIsOpen(false)}>Pet Game</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
