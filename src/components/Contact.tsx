import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="flex justify-center space-x-8">
            <a
              href="mailto:ronojunior@gmail.com"
              className="flex flex-col items-center hover:text-blue-600 transition-colors"
            >
              <Mail size={24} className="mb-2" />
              <span>Email</span>
            </a>
            <a
              href="https://linkedin.com/in/ronojunior"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:text-blue-600 transition-colors"
            >
              <Linkedin size={24} className="mb-2" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/ronojr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:text-blue-600 transition-colors"
            >
              <Github size={24} className="mb-2" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;