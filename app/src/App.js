import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Test from "./pages/Test";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="navbar">
          <div className="container">
            <h1 className="logo">Test Automation Portfolio</h1>
            <nav>
              <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/test">Test</Link></li>

              </ul>
            </nav>
          </div>
        </header>

        <main>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<Test />} /> 
          </Routes>
        </main>
      </div>

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
    </Router>
  );
}

export default App;