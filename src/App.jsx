// App.jsx
import React from 'react';
import Navbar from './Navbar';
import OurGames from './Games';
import videoSrc from './img/gameplay.mp4';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="relative min-h-screen">
       <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
      </div>
      <OurGames />

    </div>
  );
}

export default App;
