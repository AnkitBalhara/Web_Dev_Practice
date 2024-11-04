import React from 'react';
import "../styles/Projects.css"


const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Project 1</h3>
          <p>Description of the project.</p>
          <a href="https://github.com/AnkitBalhara" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        {/* Add more projects as needed */}
      </div>
    </section>
  );
};

export default Projects;
