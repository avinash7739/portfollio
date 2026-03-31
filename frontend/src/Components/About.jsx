import React, { useState } from 'react';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const technologies = [
    { name: 'React', color: 'from-blue-400 to-cyan-500' },
    { name: 'Node.js', color: 'from-green-400 to-emerald-500' },
    { name: 'Express', color: 'from-gray-400 to-slate-500' },
    { name: 'MongoDB', color: 'from-green-500 to-teal-400' },
    { name: 'SQL', color: 'from-orange-400 to-yellow-500' },
    { name: 'PHP', color: 'from-purple-400 to-violet-500' },
    { name: 'Java', color: 'from-red-400 to-orange-500' },
    { name: 'Python', color: 'from-yellow-400 to-blue-500' },
    { name: 'HTML', color: 'from-orange-500 to-red-500' },
    { name: 'CSS', color: 'from-blue-500 to-cyan-400' }
  ];

  const services = [
    {
      icon: '🎨',
      title: 'Frontend Development',
      description: 'Building responsive and modern web interfaces using React, Tailwind CSS, and JavaScript.'
    },
    {
      icon: '⚙️',
      title: 'Backend Development',
      description: 'Designing scalable backend APIs using Node.js, Express.js, and MongoDB.'
    },
    {
      icon: '🔐',
      title: 'Security & Database',
      description: 'Implementing secure authentication systems using JWT and best practices.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: '📦' },
    { number: '100%', label: 'Client Satisfaction', icon: '⭐' },
    { number: '5+', label: 'Years Experience', icon: '📅' }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-gradient-to-br from-white via-blue-50 to-white dark:from-black dark:via-gray-950 dark:to-black text-black dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        {/* About Badge */}
        <div className="inline-block mb-8 sm:mb-12 px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border-2 border-blue-400 dark:border-purple-400 transition-colors duration-300">
          <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">✨ About Me</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 leading-tight">
          Solving real problems with purposeful,{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">user-first thinking</span>
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4 sm:px-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-6 sm:p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border-2 border-blue-200 dark:border-purple-800 hover:shadow-lg hover:scale-105 transition-all duration-300 text-center cursor-pointer">
              <div className="text-4xl sm:text-5xl mb-2 sm:mb-3">{stat.icon}</div>
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">{stat.number}</h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="mb-12 sm:mb-16 px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-2">
            <span>What I Do</span>
            <span className="text-xl sm:text-2xl">💼</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl">
            {services.map((service, idx) => (
              <div
                key={idx}
                onClick={() => setActiveIndex(activeIndex === idx ? -1 : idx)}
                className={`p-6 sm:p-8 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  activeIndex === idx
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-2xl scale-105'
                    : 'bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-purple-400 text-black dark:text-white hover:shadow-lg'
                }`}
              >
                <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">{service.icon}</div>
                <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{service.title}</h4>
                <p className={`text-xs sm:text-sm leading-relaxed ${
                  activeIndex === idx 
                    ? 'text-blue-50' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}>
                  {service.description}
                </p>
                <div className={`mt-4 sm:mt-6 text-2xl sm:text-3xl transition-transform duration-300 ${activeIndex === idx ? 'rotate-180' : ''}`}>
                  ✨
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t-2 border-gray-300 dark:border-gray-800 transition-colors duration-300 px-4 sm:px-6">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-2">
            <span>Tech Stack</span>
            <span className="text-lg sm:text-2xl">🚀</span>
          </h3>
          <div className="overflow-hidden">
            <style>{`
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .marquee {
                display: flex;
                animation: scroll 25s linear infinite;
              }
              .marquee:hover {
                animation-play-state: paused;
              }
              .tech-badge {
                transition: all 0.3s ease;
              }
              .tech-badge:hover {
                transform: translateY(-12px) scale(1.15);
                filter: drop-shadow(0 20px 25px rgba(0, 0, 0, 0.3));
              }
            `}</style>
            
            <div className="marquee">
              {technologies.map((tech, idx) => (
                <div key={idx} className={`tech-badge px-6 sm:px-8 py-3 sm:py-4 mx-2 sm:mx-3 bg-gradient-to-br ${tech.color} rounded-xl border-2 border-white dark:border-gray-700 whitespace-nowrap font-bold text-sm sm:text-base text-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer`}>
                  {tech.name}
                </div>
              ))}
              {technologies.map((tech, idx) => (
                <div key={`duplicate-${idx}`} className={`tech-badge px-6 sm:px-8 py-3 sm:py-4 mx-2 sm:mx-3 bg-gradient-to-br ${tech.color} rounded-xl border-2 border-white dark:border-gray-700 whitespace-nowrap font-bold text-sm sm:text-base text-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer`}>
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;