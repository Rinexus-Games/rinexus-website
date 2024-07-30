// App.jsx
import React from 'react';
import IMAGES from './img/index.js';
import Navbar from './Navbar';

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

      <div className="container mx-auto my-10">
        <h2 className="text-4xl font-bold text-center mb-8">Our Games</h2>
        <div className="flex flex-wrap justify-center">
          <div className="card bg-base-100 w-96 shadow-xl m-4">
            <figure className="px-10 pt-10">
              <img
                src={IMAGES.game1}
                alt="Game 1"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Stranded on a Raft</h2>
              <p>Build, gather, and defend against enemies in this 2D survival game set at sea.</p>
              <div className="card-actions">
                <a href="/play/game1" className="btn btn-primary">Play Now</a>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-xl m-4">
            <figure className="px-10 pt-10">
              <img
                src={IMAGES.game2}
                alt="Game 2"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Pisonet Simulator</h2>
              <p>Test your skills and strategy in Game 2.</p>
              <div className="card-actions">
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary">
                    <i className="fab fa-google-play"></i>
                  </button>
                </a>
                <a href="https://itch.io" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary">
                    <i className="fas fa-gamepad"></i>
                  </button>
                </a>
                <a href="https://newgrounds.com" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary">
                    <i className="fas fa-star"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-xl m-4">
            <figure className="px-10 pt-10">
              <img
                src={IMAGES.game3}
                alt="Game 3"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Guess the Pixel</h2>
              <p>Join the battle and conquer in Game 3.</p>
              <div className="card-actions">
                <a href="/play/game3" className="btn btn-primary">Play Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
