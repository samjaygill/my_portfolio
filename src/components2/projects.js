import React from "react";
import "./css/projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function Projects({ projects }) {
  return (<>
    <p className="github-para">
        Below are the primary projects I successfully finished during my time
        at CodeClan. If you'd like to see more details or access the source
        code, please visit my GitHub page{" "}
        <a href="https://github.com/samjaygill" className="gh-link">here</a>.
      </p>
    <div className="projects-container">
      
      {projects.map((project, index) => (
        <div className="project-wrapper" key={index}>
          <div className="project-card from-left">
            <div className="project-icons">
              {project.linkClient && (
                <a
                  href={project.linkClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tooltip"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
                  <span className="tooltiptext">GitHub Client</span>
                </a>
              )}
              {project.linkServer && (
                <a
                  href={project.linkServer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tooltip"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
                  <span className="tooltiptext">GitHub Server</span>
                </a>
              )}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tooltip"
                >
                  <FontAwesomeIcon icon={faLink} size="2x" className="icon" />
                  <span className="tooltiptext">Live Project</span>
                </a>
              )}
            </div>
            <div className="project-name">
              <h3 className="project-card-name">{project.name}</h3>
            </div>
            <div className="tech-stack">
              {project.tech && project.tech.length > 0 && (
                <div className="project-tech">
                  <ul>
                    {project.tech.map((item, id) => (
                      <li key={id} log>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Projects;
