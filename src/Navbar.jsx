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

  return (
    <nav className={`fixed w-full z-10 ${scroll ? 'bg-black' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/">
              <img src={IMAGES.logo} alt="Logo" className='w-48 p-5' />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="/about" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="/games" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                Games
              </a>
              <a href="/contact" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
