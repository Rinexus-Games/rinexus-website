import React, { useState, useEffect } from 'react';
import IMAGES from './img/index.js';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed w-full z-10 ${scroll ? 'bg-black' : 'bg-transparent'} transition-opacity duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/">
                <img src={IMAGES.logo} alt="Logo" className='w-48 p-5' />
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <i className="fas fa-home px-1"></i> Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <i className="fas fa-info-circle"></i> About
                </button>
                <button
                  onClick={() => scrollToSection('games')}
                  className="text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <i className="fas fa-gamepad px-1"></i> Games
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <i className="fas fa-envelope px-1"></i> Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
