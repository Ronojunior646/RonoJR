import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Full Stack Developer
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            I build exceptional digital experiences that make life easier and more enjoyable.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/ronojr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-blue-600 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/ronojunior"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ronojunior@gmail.com"
              className="p-2 hover:text-blue-600 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;