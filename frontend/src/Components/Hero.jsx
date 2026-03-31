import React, { useState, useEffect } from 'react';

const photos = ['/mypic.jpg', '/mypic2.jpg'];

const Hero = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade-out
      setFading(true);
      setTimeout(() => {
        setCurrentPhoto((prev) => (prev + 1) % photos.length);
        setFading(false);
      }, 500); // 0.5s crossfade
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white relative overflow-hidden transition-colors duration-300 pt-16 sm:pt-20 px-4 sm:px-6">

      <div className="text-center z-10 flex flex-col items-center max-w-4xl">

        {/* === REVOLVING PROFILE WITH SLIDESHOW === */}
        <div className="mb-8 sm:mb-12 relative flex items-center justify-center">

          {/* Outer orbit ring (slow – 8s) */}
          <div className="absolute w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border border-dashed border-purple-400/50 dark:border-purple-500/40 animate-orbit-slow">
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-purple-500 shadow-[0_0_10px_4px_rgba(168,85,247,0.6)] orbit-dot-slow"></span>
          </div>

          {/* Inner orbit ring (fast – 4s) */}
          <div className="absolute w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-full border border-dashed border-blue-400/60 dark:border-blue-400/50 animate-orbit">
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-lime-400 shadow-[0_0_10px_4px_rgba(163,230,53,0.7)] orbit-dot"></span>
          </div>

          {/* Glow behind image */}
          <div className="absolute w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full bg-gradient-to-r from-lime-400 via-blue-400 to-purple-500 blur-2xl opacity-30 animate-pulse"></div>

          {/* Profile image with crossfade slideshow */}
          <img
            key={currentPhoto}
            src={photos[currentPhoto]}
            alt="Avinash Profile"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full border-4 border-white dark:border-gray-800 object-cover shadow-2xl relative z-10 hover:scale-105 transition-all duration-500"
            style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.5s ease-in-out, transform 0.5s ease' }}
          />
        </div>

        {/* Greeting */}
        <div className="inline-block mb-6 sm:mb-10 px-6 sm:px-8 py-2 sm:py-3 rounded-full border border-gray-400 dark:border-gray-500 bg-gray-100 dark:bg-gray-900/50 backdrop-blur transition-colors duration-300 shadow-md">
          <span className="text-lg sm:text-2xl md:text-3xl font-semibold">Hello, I'm Avinash 👋</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight">
          <span className="text-black dark:text-white">Full-stack developer</span>
          <br />
          <span className="text-gray-500 dark:text-gray-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Building clean &amp; scalable web applications.</span>
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-8 sm:mt-12 w-full">
          <a
            href="mailto:avinashpatel773911@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-lime-400 dark:bg-lime-500 text-black font-bold rounded-full text-base sm:text-lg hover:bg-lime-300 dark:hover:bg-lime-400 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
          >
            Email me 📧
          </a>

          <a
            href="/avinashcv.pdf"
            download="Avinash_CV.pdf"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-purple-500 dark:bg-purple-600 text-white font-bold rounded-full text-base sm:text-lg hover:bg-purple-600 dark:hover:bg-purple-700 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
          >
            Download CV 📄
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;