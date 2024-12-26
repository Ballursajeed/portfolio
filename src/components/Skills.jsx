import React from 'react';

function Skills() {
  const skills = [
    "JavaScript", "TypeScript", "Python", "C/C++",
    "React.js", "Node.js", "Express.js", "MongoDB",
    "RESTful APIs", "Responsive Design",
    "Docker", "Git/GitHub"
  ];

  return (
    <section id="skills" className="bg-gray-200 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="bg-white rounded-full px-4 py-2 text-blue-600 font-semibold">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

