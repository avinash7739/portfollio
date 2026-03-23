import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white relative overflow-hidden transition-colors duration-300 pt-20">
      
      {/* Profile Picture - Left Corner */}
      <div className="absolute left-4 md:left-10 top-24 md:top-32 animate-bounce">
        <div className="relative">
          {/* Outer glow ring */}
          <div className="absolute inset-0 bg-gradient-to-r from-lime-400 via-blue-400 to-purple-400 rounded-full blur-lg opacity-75 animate-pulse"></div>
          
          {/* Profile image */}
          <img 
            src="/mypic.jpg" 
            alt="Avinash Profile" 
            className="w-24 h-24 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-gray-800 object-cover shadow-2xl relative z-10 hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
      
      <div className="text-center px-4 z-10">
        {/* Greeting */}
        <div className="inline-block mb-8 px-6 py-2 rounded-full border border-gray-400 dark:border-gray-500 bg-gray-100 dark:bg-gray-900/50 backdrop-blur transition-colors duration-300">
          <span className="text-lg">Hello, I'm Avinash 👋</span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-7xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="text-black dark:text-white">Full-stack developer</span>
          <br />
          <span className="text-gray-500 dark:text-gray-400">Building clean & scalable web applications.</span>
        </h1>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <a 
            href="mailto:avinashpatel773911@gmail.com" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-lime-400 dark:bg-lime-500 text-black dark:text-black font-bold rounded-full text-lg hover:bg-lime-300 dark:hover:bg-lime-400 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Email me 📧
          </a>
          
          <a 
            href="/avinashcv.pdf" 
            download="Avinash_CV.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-500 dark:bg-purple-600 text-white dark:text-white font-bold rounded-full text-lg hover:bg-purple-600 dark:hover:bg-purple-700 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Download CV 📄
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;