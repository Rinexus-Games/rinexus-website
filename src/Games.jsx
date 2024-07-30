import React from 'react';
import Slider from 'react-slick';
import IMAGES from './img';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const arrowStyle = {
  position: 'absolute',
  top: '50%',
  zIndex: 2,
  width: '60px',
  height: '265px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transform: 'translateY(-90%)', // Center vertically
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      style={{ ...arrowStyle, right: '0', background: 'linear-gradient(to left, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0))' }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-right"></i>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      style={{ ...arrowStyle, left: '0', background: 'linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0))' }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-left"></i>
    </div>
  );
};

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0',
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const cardStyle = {
  width: '300px',
  height: '400px', // Consistent height for all cards
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Increased shadow to ensure visibility
  margin: '10px', // Ensure margin is present for spacing
};

const imgStyle = {
  height: '260px', // Fixed height for images
  width: '100%', // Full width of the card
  objectFit: 'cover', // Maintain aspect ratio
};

const containerStyle = {
  maxWidth: '100%',
  overflow: 'hidden', // Prevents overflow and cropping
  position: 'relative', // Necessary for positioning arrows
};

const badgeStyle = {
  display: 'inline-block',
  padding: '0.25em 0.5em',
  fontSize: '0.75em',
  fontWeight: 'bold',
  color: '#fff',
  backgroundColor: '#007bff',
  borderRadius: '0.25rem',
  margin: '0.2em',
};

const OurGames = () => (
  <div className="container mx-auto my-10">
    <h2 className="text-4xl font-bold text-center mb-8">Our Games</h2>
    <div style={containerStyle}>
      <Slider {...settings}>
        <div className="card bg-base-100" style={cardStyle}>
          <figure className="px-4 pt-4">
            <img
              src={IMAGES.game1}
              alt="Stranded on a Raft"
              className="rounded-xl"
              style={imgStyle}
            />
          </figure>
          <div className="card-body flex flex-col items-center text-center p-4">
            <h2 className="card-title text-xl font-bold">Stranded on a Raft</h2>
            <div className="flex flex-wrap justify-center mb-2">
              <span style={badgeStyle}>Survival</span>
              <span style={badgeStyle}>Sandbox</span>
            </div>
            <p className="text-sm mb-4">Build, gather, and defend against enemies in this 2D survival game set at sea.</p>
            <div className="card-actions">
              <a href="https://rinexusgames.itch.io/stranded-on-a-raft" className="btn btn-primary">
                <i className="fas fa-play"></i> Play Now
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-100" style={cardStyle}>
          <figure className="px-4 pt-4">
            <img
              src={IMAGES.game2}
              alt="Pisonet Simulator"
              className="rounded-xl"
              style={imgStyle}
            />
          </figure>
          <div className="card-body flex flex-c ol items-center text-center p-4">
            <h2 className="card-title text-xl font-bold">Pisonet Simulator</h2>
            <div className="flex flex-wrap justify-center mb-2">
              <span style={badgeStyle}>Simulator</span>
              <span style={badgeStyle}>Tycoon</span>
            </div>
            <p className="text-sm mb-4">A 2D simulator game where you become an owner of a pisonet business!</p>
            <div className="card-actions">
              <a href="https://play.google.com/store/apps/details?id=com.rinexusgames.pisonet" className="btn btn-primary">
                <i className="fas fa-play"></i> Play Now
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-100" style={cardStyle}>
          <figure className="px-4 pt-4">
            <img
              src={IMAGES.game3}
              alt="Guess the Pixel"
              className="rounded-xl"
              style={imgStyle}
            />
          </figure>
          <div className="card-body flex flex-col items-center text-center p-4">
            <h2 className="card-title text-xl font-bold">Guess the Pixel</h2>
            <div className="flex flex-wrap justify-center mb-2">
              <span style={badgeStyle}>Multiplayer</span>
            </div>
            <p className="text-sm mb-4">A multiplayer game where you draw using pixels and let players guess what you're drawing.</p>
            <div className="card-actions">
              <a href="https://gd.games/mynameisrinax/guess-the-pixel" className="btn btn-primary">
                <i className="fas fa-play"></i> Play Now
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-100" style={cardStyle}>
          <figure className="px-4 pt-4">
            <img
              src={IMAGES.game4}
              alt="Knight n' Dice"
              className="rounded-xl"
              style={imgStyle}
            />
          </figure>
          <div className="card-body flex flex-col items-center text-center p-4">
            <h2 className="card-title text-xl font-bold">Knight n' Dice</h2>
            <div className="flex flex-wrap justify-center mb-2">
              <span style={badgeStyle}>Action</span>
            </div>
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
