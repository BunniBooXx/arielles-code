// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameScreen from './components/GameScreen';
import Home from './components/Home';
import Characters from './components/Characters';
import About from './components/About';
import './styles.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/game" element={<GameScreen />} />
          <Route path="/" element={<Home/>}/>
          <Route path="/characters" element={<Characters/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

