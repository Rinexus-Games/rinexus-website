// App.jsx
import React from 'react';
import IMAGES from './img';
import Navbar from './Navbar';
import OurGames from './Games';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${IMAGES.raft})` }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
      </div>
      <OurGames />

    </div>
  );
}

export default App;
