import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Sajeed Balluru. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

