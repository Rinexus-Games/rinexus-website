import React, { useState, useEffect } from 'react';
import IMAGES from './img/index.js';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
              </button>
            </div>
            <div className={`hidden md:flex items-baseline space-x-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
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
            <div className={`fixed top-0 right-0 w-64 bg-black text-white h-full transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 md:hidden`}>
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="flex flex-col items-center space-y-4 mt-8">
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
