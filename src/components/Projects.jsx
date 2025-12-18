import React from 'react';

export const Projects = () => {
  const myProjects = [
    {
      title: "Music Player Application",
      description: "A console-based music player featuring playlist management with add, delete, and search. Implemented play/pause/next controls and utilized the Collections Framework to manage 20+ songs efficiently while maintaining OOP principles.",
      technologies: ["Core Java", "Collections Framework", "OOPs"],
      link: "https://github.com/samikshachavan-dev/MusicPlayerApp"
    },
    {
      title: "Project Management System",
      description: "A backend application using Hibernate ORM to handle CRUD operations for Company, Employee, and Project entities. Automated data handling and reduced manual SQL queries by 80% through efficient entity mapping.",
      technologies: ["Hibernate", "MySQL", "Java", "ORM"],
      link: "https://github.com/samikshachavan-dev/EmployeeCrud"
    }
  ];

  return (
    <section id="Projects" className="py-24 px-6 lg:px-20 bg-white">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <div className="h-1.5 w-16 bg-blue-600 mt-2 rounded-full"></div>
        </div>

        {/* Simplified Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {myProjects.map((project, index) => (
            <div key={index} className="flex flex-col p-8 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-400 hover:shadow-xl transition-all duration-300">
              
              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map(tech => (
                  <span key={tech} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-blue-100 text-blue-700 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Name */}
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Link */}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                View on GitHub
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};