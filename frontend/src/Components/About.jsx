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
    <section id="about" className="py-12 sm:py-16 bg-gradient-to-br from-white via-blue-50 to-white dark:from-black dark:via-gray-950 dark:to-black text-black dark:text-white">

      <div className="container mx-auto px-4 sm:px-6">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
          Solving real problems with{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            user-first thinking
          </span>
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-4 sm:p-6 text-center bg-white dark:bg-gray-900 rounded-lg shadow hover:scale-105 transition">
              <div className="text-2xl sm:text-3xl">{stat.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold mt-1">{stat.number}</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              onClick={() => setActiveIndex(activeIndex === idx ? -1 : idx)}
              className={`p-4 sm:p-6 rounded-lg cursor-pointer transition ${
                activeIndex === idx
                  ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className="text-3xl sm:text-4xl">{service.icon}</div>
              <h4 className="text-base sm:text-lg font-bold mt-2">{service.title}</h4>
              <p className="text-xs sm:text-sm mt-2 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-10 sm:mt-14 overflow-hidden">
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 30s linear infinite;
            }
          `}</style>
          <div className="flex animate-marquee">
            {[...technologies, ...technologies].map((tech, idx) => (
              <div
                key={idx}
                className={`px-3 sm:px-4 py-2 mx-1 sm:mx-2 bg-gradient-to-br ${tech.color} rounded-lg text-white font-semibold text-xs sm:text-sm whitespace-nowrap`}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;