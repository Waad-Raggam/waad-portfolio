import React from 'react';

const Projects = () => {
  const projects = [
    { name: 'Social Circle App', description: 'A social networking mobile app built with Flutter.' },
    { name: 'FreeSim Website', description: 'A Node.js web app with AWS hosting.' },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
