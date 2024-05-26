import React from "react";
import "./css/about.css";
import { Link } from "react-router-dom";

function About({ skills }) {
  const sortedSkills = skills.sort((a, b) => a.localeCompare(b));
  return (
    <div className="about-container">
      <div className="about-text from-left">
        <p className="para1">
          I have recently successfully completed a 16-week Software Development
          course offered by CodeClan/
          <a href="https://www.thisiscodebase.com/about" className="codeb-link">
            CodeBase
          </a>
          .
        </p>
        <p className="para2">
          During the course, I gained proficiency in Python, JavaScript and
          Java. Each language module culminated in a project: an individual
          project for Python and collaborative group projects for JavaScript and
          the capstone project.
        </p>
        <p className="para3">
          Having concluded the course on November 16, 2023, I am now actively
          seeking opportunities as a junior software developer. With my newly
          acquired skills and experiences, I am excited to embark on the next
          phase of my professional journey.
        </p>
      </div>
      <div className="skills-container from-right">
        {sortedSkills.map((skill, index) => (
          <div key={index} className="skills">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
