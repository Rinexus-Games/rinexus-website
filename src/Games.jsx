import React, { forwardRef } from 'react';
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

const OurGames = forwardRef((props, ref) => (
  <section ref={ref} id="games" className="relative">
    <div className="container mx-auto my-10">
      <h2 className="text-4xl font-bold text-center mb-8">Our Games</h2>
      <div style={{ maxWidth: '1200px', margin: '40px auto', position: 'relative' }}>
        <Slider {...settings}>
          {[{ image: IMAGES.game1, title: 'Stranded on a Raft', badges: ['Survival', 'Sandbox'], description: 'Build, gather, and defend against enemies in this 2D survival game set at sea.', link: 'https://rinexusgames.itch.io/stranded-on-a-raft' },
            { image: IMAGES.game2, title: 'Pisonet Simulator', badges: ['Simulator', 'Tycoon'], description: 'A 2D simulator game where you become an owner of a pisonet business!', link: 'https://play.google.com/store/apps/details?id=com.rinexusgames.pisonet' },
            { image: IMAGES.game3, title: 'Guess the Pixel', badges: ['Multiplayer'], description: 'A multiplayer game where you draw using pixels and let players guess what you\'re drawing.', link: 'https://gd.games/mynameisrinax/guess-the-pixel' },
            { image: IMAGES.game4, title: 'Knight n\' Dice', badges: ['Action'], description: 'An endless crawler where the dice will either help you or make it harder for you', link: 'https://rinexusgames.itch.io/knight-n-dice' }].map((game, index) => (
              <div key={index} className="card bg-base-100" style={{ width: '300px', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', margin: '10px' }}>
                <figure className="px-4 pt-4">
                  <img src={game.image} alt={game.title} className="rounded-xl" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                </figure>
                <div className="card-body" style={{ display: 'flex', flexDirection: 'column', flex: '1', padding: '1rem', alignItems: 'center' }}>
                  <h2 className="card-title text-xl font-bold">{game.title}</h2>
                  <div className="flex flex-wrap justify-center mb-2">
                    {game.badges.map((badge, index) => (
                      <span key={index} style={{ backgroundColor: '#f0f0f0', padding: '4px 8px', borderRadius: '10px', marginRight: '5px' }}>{badge}</span>
                    ))}
                  </div>
                  <p className="text-sm mb-4">{game.description}</p>
                  <div className="card-actions">
                    <a href={game.link} className="btn btn-primary">
                      <i className="fas fa-play"></i> Play Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
        <img
          src={IMAGES.sticker1}
          alt="Left Sticker"
          style={{ zIndex: 4, filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2))'}}
          className="absolute left-[-120px] bottom-[-40px] transform w-40"
        />
        <img
          src={IMAGES.sticker2}
          alt="Right Sticker"
          style={{ zIndex: 4, filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2))'}}
          className="absolute right-[-120px] top-[-125px] transform w-40"
        />
      </div>
    </div>
  </section>
));

export default OurGames;
