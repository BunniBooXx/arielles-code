// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameScreen from './components/GameScreen';
import Home from './components/Home';
import Characters from './components/Characters';
import About from './components/About';
import PetGame from './components/Yuki';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import UnderConstruction from './components/UnderConstruction';
import './styles.css';


function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App">
        <Routes>
          <Route path="/game" element={<GameScreen />} />
          <Route path="/" element={<Home/>}/>
          <Route path="/characters" element={<Characters/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/yuki" element={<PetGame/>}/>
          <Route path="/under-construction" element={<UnderConstruction/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

