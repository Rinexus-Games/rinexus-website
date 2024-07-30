import React from 'react';
import Slider from 'react-slick';
import IMAGES from './img'; // Make sure this path is correct
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0',
};

const cardStyle = {
  width: '300px',
  height: '400px', // Consistent height for all cards
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Increased shadow to ensure visibility
  overflow: 'hidden' // Prevent cropping of shadows
};

const imgStyle = {
  height: '260px', // Fixed height for images
  width: '500px',
  objectFit: 'cover' // Maintain aspect ratio
};

const OurGames = () => (
    <div className="container mx-auto my-10">
      <h2 className="text-4xl font-bold text-center mb-8">Our Games</h2>
      <div className="w-full">
        <Slider {...settings}>
          <div className="card bg-base-100 mx-4" style={cardStyle}>
            <figure className="px-4 pt-4">
              <img
                src={IMAGES.game1}
                alt="Stranded on a Raft"
                className="rounded-xl"
                style={imgStyle}
              />
            </figure>
            <div className="card-body flex flex-col items-center text-center p-4">
              <h2 className="card-title text-xl font-bold mb-2">Stranded on a Raft</h2>
              <p className="text-sm mb-4">Build, gather, and defend against enemies in this 2D survival game set at sea.</p>
              <div className="card-actions">
                <a href="https://rinexusgames.itch.io/stranded-on-a-raft" className="btn btn-primary">
                  <i className="fas fa-play"></i> Play Now
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 mx-4" style={cardStyle}>
            <figure className="px-4 pt-4">
              <img
                src={IMAGES.game2}
                alt="Pisonet Simulator"
                className="rounded-xl"
                style={imgStyle}
              />
            </figure>
            <div className="card-body flex flex-col items-center text-center p-4">
              <h2 className="card-title text-xl font-bold mb-2">Pisonet Simulator</h2>
              <p className="text-sm mb-4">A 2D simulator game where you become an owner of a pisonet business!</p>
              <div className="card-actions">
                <a href="https://play.google.com/store/apps/details?id=com.rinexusgames.pisonet" className="btn btn-primary">
                  <i className="fas fa-play"></i> Play Now
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 mx-4" style={cardStyle}>
            <figure className="px-4 pt-4">
              <img
                src={IMAGES.game3}
                alt="Guess the Pixel"
                className="rounded-xl"
                style={imgStyle}
              />
            </figure>
            <div className="card-body flex flex-col items-center text-center p-4">
              <h2 className="card-title text-xl font-bold mb-2">Guess the Pixel</h2>
              <p className="text-sm mb-4">A multiplayer draw & guess game.</p>
              <div className="card-actions">
                <a href="https://gd.games/mynameisrinax/guess-the-pixel" className="btn btn-primary">
                  <i className="fas fa-play"></i> Play Now
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 mx-4" style={cardStyle}>
            <figure className="px-4 pt-4">
              <img
                src={IMAGES.game4}
                alt="Knight n' Dice"
                className="rounded-xl"
                style={imgStyle}
              />
            </figure>
            <div className="card-body flex flex-col items-center text-center p-4">
              <h2 className="card-title text-xl font-bold mb-2">Knight n' Dice</h2>
              <p className="text-sm mb-4">An endless crawler where the dice will either help you or make it harder for you</p>
              <div className="card-actions">
                <a href="https://rinexusgames.itch.io/knight-n-dice" className="btn btn-primary">
                  <i className="fas fa-play"></i> Play Now
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );

export default OurGames;
