import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-yellow-600', barColor: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },
    { name: 'React', level: 85, color: 'from-blue-400 to-blue-600', barColor: 'bg-gradient-to-r from-blue-400 to-blue-600' },
    { name: 'Node.js', level: 80, color: 'from-green-400 to-green-600', barColor: 'bg-gradient-to-r from-green-400 to-green-600' },
    { name: 'Python', level: 75, color: 'from-purple-400 to-purple-600', barColor: 'bg-gradient-to-r from-purple-400 to-purple-600' },
    { name: 'HTML/CSS', level: 95, color: 'from-orange-400 to-orange-600', barColor: 'bg-gradient-to-r from-orange-400 to-orange-600' },
    { name: 'Git', level: 85, color: 'from-red-400 to-red-600', barColor: 'bg-gradient-to-r from-red-400 to-red-600' }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-950 text-black dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">Skills</h2>
        <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-yellow-400 via-blue-400 to-purple-400 mx-auto mb-8 sm:mb-10 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className={`bg-gradient-to-br ${skill.color} p-0.5 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg h-full">
                  {/* Header with Skill Name and Level */}
                  <div className="flex justify-between items-center mb-3">
                    <span className={`font-bold text-lg bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                      {skill.name}
                    </span>
                    <span className={`text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${skill.color} text-white`}>
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden transition-all duration-300">
                    <div
                      className={`${skill.barColor} h-3 rounded-full transition-all duration-500 shadow-lg group-hover:shadow-glow`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  
                  {/* Animated Bottom Border */}
                  <div className={`mt-4 h-0.5 bg-gradient-to-r ${skill.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;