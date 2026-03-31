import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeToggle = () => {
    console.log('Button clicked! Current isDark:', isDark);
    toggleTheme();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 
      bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600
      dark:bg-gradient-to-r dark:from-purple-900 dark:via-blue-900 dark:to-purple-900
      backdrop-blur-xl 
      border-b border-purple-400 dark:border-blue-400
      shadow-xl dark:shadow-purple-500/20 transition-all duration-300
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:via-white/5 before:to-white/10 before:pointer-events-none">

      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 relative z-10">

        {/* Logo */}
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest 
          text-white 
          hover:text-yellow-200 transition duration-300 cursor-pointer
          hover:scale-110 transform transition-all">
          Avinash
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <ul className="flex space-x-6 lg:space-x-8 font-bold text-sm lg:text-lg text-white">
            <li>
              <a href="#hero"
                className="relative group text-white hover:text-yellow-200 transition duration-300">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-200 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="#about"
                className="relative group text-white hover:text-yellow-200 transition duration-300">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-200 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="#projects"
                className="relative group text-white hover:text-yellow-200 transition duration-300">
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-200 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="#skills"
                className="relative group text-white hover:text-yellow-200 transition duration-300">
                Skills
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-200 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="#contact"
                className="relative group text-white hover:text-yellow-200 transition duration-300">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-200 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
             <li>
              <a href="#certification"
                className="relative group text-white hover:text-yellow-200 transition duration-300">
                Certification
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-200 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          </ul>

          {/* Theme Toggle Button */}
          <button
            onClick={handleThemeToggle}
            className="
            p-2 px-3
            rounded-lg
            bg-yellow-300 dark:bg-yellow-400
            hover:bg-white hover:text-purple-600
            dark:hover:bg-white dark:hover:text-blue-900
            transition duration-300
            shadow-md
            cursor-pointer
            transform hover:scale-110
            font-bold"
            aria-label="Toggle theme"
            type="button"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={handleThemeToggle}
            className="
            p-2 px-3
            rounded-lg
            bg-yellow-300 dark:bg-yellow-400
            hover:bg-white hover:text-purple-600
            dark:hover:bg-white dark:hover:text-blue-900
            transition duration-300
            shadow-md
            cursor-pointer"
            aria-label="Toggle theme"
            type="button"
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          <button
            onClick={toggleMenu}
            className="p-2 text-white hover:text-yellow-200 transition duration-300 font-bold text-lg"
            aria-label="Toggle menu"
            type="button"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-purple-600 to-blue-600 dark:from-purple-900 dark:to-blue-900 border-b border-purple-400 dark:border-blue-400 shadow-lg animate-in slide-in-from-top backdrop-blur-lg">
          <ul className="flex flex-col space-y-1 font-bold text-lg p-4 text-white">
            <li>
              <a href="#hero" onClick={handleNavClick}
                className="block px-4 py-3 rounded-lg hover:bg-yellow-300 hover:text-black transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={handleNavClick}
                className="block px-4 py-3 rounded-lg hover:bg-yellow-300 hover:text-black transition duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={handleNavClick}
                className="block px-4 py-3 rounded-lg hover:bg-yellow-300 hover:text-black transition duration-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" onClick={handleNavClick}
                className="block px-4 py-3 rounded-lg hover:bg-yellow-300 hover:text-black transition duration-300">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleNavClick}
                className="block px-4 py-3 rounded-lg hover:bg-yellow-300 hover:text-black transition duration-300">
                Contact
              </a>
            </li>
             <li>
              <a href="#certification" onClick={handleNavClick}
                className="block px-4 py-3 rounded-lg hover:bg-yellow-300 hover:text-black transition duration-300">
                Certification
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

