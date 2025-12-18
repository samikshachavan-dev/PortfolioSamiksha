import React from 'react';

const SkillCard = ({ title, skills }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
      <span className="w-2 h-6 bg-blue-600 rounded-full mr-3"></span>
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span 
          key={skill} 
          className="px-3 py-1 bg-slate-50 text-slate-700 text-sm font-medium rounded-md border border-slate-200 hover:border-blue-400 hover:text-blue-600 transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export const Skills = () => {
  const skillData = [
    { title: "Programming", skills: ["Java", "Python", "C"] },
    { title: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "React"] },
    { title: "Backend & Frameworks", skills: ["Node.js", "Express.js", "Spring", "Spring Boot", "Hibernate"] },
    { title: "Database", skills: ["SQL", "MySQL", "MongoDB"] },
    { title: "Concepts", skills: ["OOPs", "DSA", "Multithreading", "JDBC", "Exception Handling"] },
    { title: "Tools & Version Control", skills: ["Git", "GitHub", "VS Code", "Postman", "Eclipse"] },
  ];

  return (
    <section id="Skills" className="py-20 px-6 lg:px-20 bg-white">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
            Technical <span className="text-blue-600">Expertise</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillData.map((category) => (
            <SkillCard 
              key={category.title} 
              title={category.title} 
              skills={category.skills} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};