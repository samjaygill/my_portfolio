import React from "react";
import { Link } from "react-router-dom";
import './css/header.css'

const Header = () => {
  return (
    <header className="App-header">
      <ul className="link-list">
        <li>
          <Link to="/" className="home-link">
            Home
          </Link>
          <Link to="/projects" className="projects-link">
            Projects
          </Link>
          <Link to="/about" className="about-link">
            About Me
          </Link>
          <Link to="/cv" className="cv-link">
            CV
          </Link>
          <a className="linkedin-link" href="https://linkedin.com/in/sjaygill">
            Linkedin
          </a>
          <a className="github-link" href="https://github.com/samjaygill">
            GitHub
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
