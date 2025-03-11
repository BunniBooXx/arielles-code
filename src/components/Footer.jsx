import React from 'react';
import '../footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="kawaii-footer">
      <div className="footer-content">
        <div className="footer-hearts">♥ ♡ ♥</div>
        <p className="footer-text">
          © {currentYear} Arielle's Code 
          <span className="footer-sparkle">✧</span> 
          All Rights Reserved
        </p>
        <div className="footer-decoration">
          <span className="star">★</span>
          <span className="heart">♥</span>
          <span className="star">★</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
