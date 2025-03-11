import React from 'react';
import '../about.css';
import ariellePouty from '../arielle_angry.webp';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="title-section">
          <h1 className="about-title">✧ Arielle's Story ✧</h1>
          <div className="title-decoration">･ﾟ: *✧･ﾟ♡･ﾟ✧*:･ﾟ✧</div>
        </div>

        <div className="content-wrapper">
          <div className="story-section">
            <div className="story-card">
              <h2 className="story-heading">A Tale of Dreams & Code</h2>
              <p className="story-text">
                With a passion for otome games and a childhood dream of living in Japan, 
                sprinkled with a bit of code... ✨
              </p>
              <p className="story-text">
                Sugar, spice, and everything nice... That's how Arielle's Code was created! 🌸
              </p>
              <p className="story-text">
                Join Arielle on her journey as she combines her creative spirit with technical magic 
                to create immersive stories where YOUR choices shape the adventure! ♥
              </p>
            </div>
          </div>

          <div className="image-section">
            <div className="image-frame">
              <img src={ariellePouty} alt="Arielle being pouty" className="arielle-image" />
            </div>
            <div className="image-decoration">★ Coding with Attitude ★</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
