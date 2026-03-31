import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'MovieMania Cinema Booking',
      image: '/movie.png',
      link: 'https://booking-cinema-tan.vercel.app',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900'
    },
    {
      title: 'Project 2',
      description: 'patient booking hospital ms',
      image: '/hospital.png',
      link: 'https://hospital-ms-six.vercel.app',
      color: 'from-red-400 to-red-600',
      bgColor: 'bg-red-50 dark:bg-red-900'
    },
    {
      title: 'Project 3',
      description: 'E-commerce platform with modern UI',
      image: '/food.png',
      link: 'https://online-foodshoping.vercel.app',
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900'
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 bg-white dark:bg-gray-950 text-black dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-10">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <a key={index} href={project.link} className="block group">
              <div className={`${project.bgColor} rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-full transform hover:scale-105 hover:-translate-y-2`}>
                {/* Color Badge */}
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                
                <img src={project.image} alt={project.title} className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                
                <div className="p-6">
                  <div className={`inline-block bg-gradient-to-r ${project.color} text-white px-3 py-1 rounded-full text-sm font-semibold mb-3`}>
                    {project.title}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className={`bg-gradient-to-r ${project.color} bg-clip-text text-transparent font-medium mb-4`}>{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Projects;
