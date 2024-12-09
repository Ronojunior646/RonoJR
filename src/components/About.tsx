import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="prose prose-lg">
            <p className="mb-4">
              I'm a passionate Full Stack Developer with expertise in building modern web applications.
              My journey in software development started with a deep curiosity for technology and has
              evolved into a professional career focused on creating impactful digital solutions.
            </p>
            <p className="mb-4">
              I specialize in both frontend and backend development, with a strong foundation in:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-6">
              {['JavaScript', 'React', 'Node.js', 'Python', 'Flask', 'PostgreSQL'].map((skill) => (
                <div
                  key={skill}
                  className="bg-white p-4 rounded-lg shadow-sm text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;