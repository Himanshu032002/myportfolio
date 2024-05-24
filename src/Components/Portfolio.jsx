import React from 'react';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="project">
        <img src="project-image.jpg" alt="Project 1" />
        <h2>Project 1</h2>
        <p>Description of Project 1</p>
        <a href="project-demo-link">Demo</a>
        <a href="project-repo-link">GitHub</a>
      </div>
      <div className="project">
        <img src="project-image.jpg" alt="Project 2" />
        <h2>Project 2</h2>
        <p>Description of Project 2</p>
        <a href="project-demo-link">Demo</a>
        <a href="project-repo-link">GitHub</a>
      </div>
      {/* Add more project cards as needed */}
    </div>
  );
}

export default Portfolio;
