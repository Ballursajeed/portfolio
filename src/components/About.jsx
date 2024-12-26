import React from 'react';

function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          🚀 Hello! I'm a passionate full-stack developer with a focus on creating interactive and visually stunning web experiences. 
          Specializing in the <strong>JavaScript, TypeScript</strong> and <strong>MERN (MongoDB, Express.js, React.js, Node.js)</strong> stack, 
          I bring a holistic approach to web development. Proficient in both <strong>frontend (React.js)</strong> and <strong>backend (Node.js)</strong> , 
          I craft robust, scalable, and secure applications that deliver seamless user experiences.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Beyond the basics, my skills extend to using CSS frameworks like <strong>Bootstrap</strong> and <strong>Tailwind</strong> for responsive design. Actively contributing to the ever-evolving web landscape through MERN stack projects, I am ready to bring my full-stack expertise to your team.
        </p>
      </div>
    </section>
  );
}

export default About;

