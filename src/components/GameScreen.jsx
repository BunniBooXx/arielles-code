// src/components/GameScreen.js
import React, { useState } from 'react';
import { Link } from'react-router-dom';
import DialogueBox from './DialogueBox';
import NavigationButton from './NavigationButton';
import '../gamescreen.css';
import arielle_bed from '../arielle-bed.webp';
import arielle_smiling from '../arielle-smiling-teeth.webp';
import office from '../office.webp';
import kazuki_office_first from '../kazuki-office-first.webp';
import arielle_cafe from '../arielle-cafe.webp';
import kazuki_cafe from '../kazuki-cafe.webp';
import picnic from '../picnic.webp';
import kazuki_kbbq_smiling from '../kazuki-kbbq-smiling.webp';
import kazuki_cherry_happy from '../kazuki-cherry-happy.webp';
import kazuki_cherry_longhair from '../kazuki-cherry-longhair.webp';
import arielle_kbbq_resturant from '../arielle-kbbq-resturant.webp';
import arielle_shrimp from '../arielle-shrimp.webp';
import kazuki_office_serious from '../kazuki-office-serious.webp';
import kazukiCherry from '../kazuki-cherry.webp';
import ariellePicnic from '../arielle-picnic-smiling.webp';
import kazukiPicnic from '../kazuki-picnic.webp';
import crane from '../crane.webp';
import arielleCrying from '../arielle-crying.webp';




const scenes = [
  { image: arielle_bed, dialogue: "Todays the day!" },
  { image: crane, dialogue: "Todays the day that arielle is moving to Japan, as a software engineer." },
  { image: arielleCrying, dialogue: "After she got dumped by her womanizer of a boyfriend she realized something..." },
  { image: arielle_bed, dialogue: "She was free! Free to do whatever she wanted! She realized she had no more ties to the US and could fullfill her childhood dream. " },
  { image: arielle_bed, dialogue: '"Time for a fresh start!"' },
  { image: arielle_smiling, dialogue: "I can't believe I'm finally in Tokyo! This is going to be an amazing adventure." },
  { image: office, dialogue: "Arielle started her new job as a software engineer at a prestigious company in Tokyo." },
  { image: kazuki_office_first, dialogue: "Oh hey there! You must be the new girl, I'm Kazuki. I work in the AI department here." },
  { image: arielle_smiling, dialogue:"Hi Kazuki! Nice to meet you, I'm Arielle." },
  { image: kazuki_office_first, dialogue: "I heard you're from the US, I spent 2 years living there for temporary assignment.So I know a little english." },
  { image: arielle_smiling, dialogue:"Oh wow! What a coincidence" },
  { image: kazuki_office_first, dialogue: "If you want, I can show you around Tokyo. Since you're new here." },
  { image: arielle_smiling, dialogue:"Sure! I need some help getting familar with the area." },
  { image: kazuki_office_first, dialogue: "Great! I know a great place" },
  { image: kazuki_cafe, dialogue: "This is my favorite cafe. They have the best fizzy strawberry ade drinks." },
  { image: arielle_cafe, dialogue:"Wow this is a great cafe!"},
  { image: kazuki_cafe , dialogue: "I'm glad you're enjoying your time in Tokyo so far. I know a great place for dinner." },
  { image: kazuki_kbbq_smiling , dialogue: "How do you like it?" },
  { image: arielle_kbbq_resturant , dialogue: "Tasty!" },
  { image: arielle_shrimp , dialogue: "Do you want some?" },
  { image: kazuki_kbbq_smiling , dialogue: "Haha,no thanks." },
  { image: kazuki_office_serious , dialogue: "Hey Arielle, I want to show you a cool view of Tokyo" },
  { image:picnic, dialogue: "I thought we could have a picnic in this beautiful park." },
  { image: ariellePicnic, dialogue: "wow its so beautiful here" },
  { image: kazukiPicnic, dialogue: "Yeah I used to go here back when I was litle with my parents, want to take a walk?" },
  {
    image: kazukiCherry,
    dialogue: "Arielle, I have to be honest with you. I've developed feelings for you. Would you like to be my girlfriend?",
    choices: [
      { text: "Yes", nextScene: 26 },
      { text: "No", nextScene: 27 },
    ],
  },
  { image: kazuki_cherry_happy, dialogue: "And so began Arielle's wonderful new life in Tokyo, with Kazuki by her side." },
  { image: kazuki_cherry_longhair, dialogue: "Arielle cherished her new friend and her exciting life in Japan." },
];

const GameScreen = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [history, setHistory] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSceneTransition = (next) => {
    setIsTransitioning(true);
    setHistory([...history, currentScene]);
    
    setTimeout(() => {
      if (next !== undefined) {
        setCurrentScene(next);
      } else if (currentScene < scenes.length - 1) {
        setCurrentScene(currentScene + 1);
      }
      setIsTransitioning(false);
    }, 300);
  };

  const handlePreviousScene = () => {
    if (history.length > 0) {
      setIsTransitioning(true);
      const lastScene = history.pop();
      setHistory([...history]);
      
      setTimeout(() => {
        setCurrentScene(lastScene);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const current = scenes[currentScene];

  return (
    <div className="visual-novel">
      <nav className="game-nav">
        <h1 className="game-title">Arielle's Story</h1>
        <div className="nav-menu">
          <Link to="/" className="menu-button">
            <span className="menu-icon">♥</span> Menu
          </Link>
        </div>
      </nav>

      <div className={`game-screen ${isTransitioning ? 'fade' : ''}`}>
        <div className="scene-container">
          <img 
            src={current.image} 
            alt="Scene" 
            className="scene-image"
            loading="lazy"
          />
        </div>

        <div className="game-interface">
          <DialogueBox text={current.dialogue} />
          
          <div className="button-container">
            <NavigationButton 
              onClick={handlePreviousScene} 
              text="← Back" 
              className="nav-button"
            />
            
            {current.choices ? (
              current.choices.map((choice, index) => (
                <NavigationButton
                  key={index}
                  onClick={() => handleSceneTransition(choice.nextScene)}
                  text={choice.text}
                  className="choice-button"
                />
              ))
            ) : (
              <NavigationButton 
                onClick={() => handleSceneTransition()} 
                text="Next →" 
                className="nav-button"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameScreen;