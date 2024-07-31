import React from 'react';
import Navbar from './Navbar';
import OurGames from './Games';
import IMAGES from './img';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div
        id="hero"
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${IMAGES.raft})` }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
      </div>

      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
          <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-black rounded-lg flex justify-center items-center p-6">
              <img
                src={IMAGES.logo}
                alt="Rinexus Games Logo"
                className="w-full h-auto max-w-xs"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <p className="text-lg mb-4">
                <b>Rinexus Games</b> is a one-man indie game development studio based in the Philippines.
              </p>
              <p className="text-lg mb-4">
                Known for games like <b>Stranded on a Raft</b> and <b>Pisonet Simulator</b>, our goal is to create unique and engaging experiences for players worldwide.
              </p>
              <div className="text-center mt-8">
                <a
                  href="https://ko-fi.com/rinexusgames"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#F76040] text-white rounded-lg px-4 py-2 shadow-lg hover:bg-[#D75F39] transition"
                >
                  <i className="fas fa-coffee text-2xl mr-2"></i>
                  Support us!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurGames />

      <footer id="contact" className="relative py-8 bg-black text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={IMAGES.rinexus}
            alt="Background"
            className="h-full object-left"
            style={{ height: '100%', objectPosition: 'left' }}
          />
        </div>
        <div className="relative container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex-1"></div> {/* Empty left div */}
            <div className="text-center flex-1">
              <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
              <div className="flex justify-center space-x-6 mb-8">
                <a href="https://www.facebook.com/rinexusgames" className="text-white text-3xl">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://x.com/rinexusgames" className="text-white text-3xl">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.youtube.com/@rinexusgames" className="text-white text-3xl">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://discord.rinexusgames.com" className="text-white text-3xl">
                  <i className="fab fa-discord"></i>
                </a>
              </div>
              <div className="mb-8">
                <p className="text-lg">For inquiries, email us at:</p>
                <a href="mailto:business@rinexusgames.com" className="text-lg text-blue-500">
                  business@rinexusgames.com
                </a>
              </div>
              <p>&copy; {new Date().getFullYear()} Rinexus Games. All rights reserved.</p>
            </div>
            <div className="flex-1 flex justify-end mt-8 md:mt-0">
              <iframe
                title="Rinexus Games Discord"
                src="https://discordapp.com/widget?id=724829070025556030&theme=dark"
                width="350"
                height="400"
                allowTransparency="true"
                frameBorder="0"
                className="self-end"
              ></iframe>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
