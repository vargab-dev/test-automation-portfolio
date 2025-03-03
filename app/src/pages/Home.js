import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1 className="page-header">Welcome to My Test Automation Portfolio</h1>
      <p className="page-content">
        I specialize in Selenium, Playwright, API Testing, and Performance Testing.
        Explore my projects below!
      </p>
      <Link to="/projects" className="button">
        View My Projects
      </Link>
    </div>
  );
}

export default Home;