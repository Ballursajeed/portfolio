import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="flex flex-col items-center space-y-4">
          <a href="tel:+919880580629" className="flex items-center text-gray-700 hover:text-blue-600">
            <FaPhone size={20} className="mr-2" /> +91 9880580629
          </a>
          <a href="mailto:sajeedballuru@gmail.com" className="flex items-center text-gray-700 hover:text-blue-600">
            <FaEnvelope size={20} className="mr-2" /> sajeedballuru@gmail.com
          </a>
          <a href="https://linkedin.com/in/sajeed-balluru" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-blue-600">
            <FaLinkedin size={20} className="mr-2" /> linkedin.com/in/sajeed-balluru
          </a>
          <a href="https://github.com/Ballursajeed" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-blue-600">
            <FaGithub size={20} className="mr-2" /> github.com/Ballursajeed
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

