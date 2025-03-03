import React from "react";

function Projects() {
  const projects = [
    { title: "E2E UI Testing with Playwright", description: "Automated UI testing for web applications." },
    { title: "API Testing with RestAssured", description: "Validating REST APIs using Java." },
    { title: "Performance Testing with JMeter", description: "Testing load and stress with JMeter." },
  ];

  return (
    <div>
      <h1 className="page-header">My Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;