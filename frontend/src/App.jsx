import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Certification from './Components/Certification';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Footer from './Components/Footer';
import ParticleBackground from './Components/ParticleBackground';
import './App.css';

function App() {
  return (
    <div className="App bg-white dark:bg-gray-950 text-black dark:text-white transition-colors duration-300 relative">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certification />
      <Contact />
        <Education />
      <Footer />
    </div>
  );
}

export default App;

