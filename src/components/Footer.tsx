import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <p>© {new Date().getFullYear()} Rono Junior. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;