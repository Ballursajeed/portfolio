import React from 'react';

function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          I’m a full-stack developer focused on building real-world, production-ready applications — not just projects.
          My core stack is <strong>JavaScript / TypeScript</strong> with <strong>React</strong> on the frontend and <strong>Node.js</strong> on the backend.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Recently, I’ve been diving deeper into <strong>real-time systems</strong> and <strong>event-driven architectures</strong>.
          One of my key projects is a collaborative code editor that supports multi-user editing using WebSockets, where I worked on synchronization, handling concurrent updates, and backend architecture.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          I enjoy understanding how things work under the hood — from APIs and async flows to system design decisions.
          I focus on writing clean, scalable code and building features that are actually useful for users.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Currently, I’m leveling up my skills in real-time applications, system design, and modern backend technologies — with the goal of building impactful products and growing into a strong software engineer.
        </p>
      </div>
    </section>
  );
}

export default About;