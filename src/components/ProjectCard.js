import React from "react";
import { useParams } from "react-router-dom";
import "./ProjectCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectCard = ({ projects }) => {
  const { id } = useParams();
  const projectId = parseInt(id, 10);

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="card-container">
      <div className="card-card">
        <div className="card-details">
          <p className="project-card-name">{project.name}</p>

          <p className="project-github">
            <a href={project.link} className="github-card-link">
              <p className="card-link"><FontAwesomeIcon icon={faGithub} className="github-logo"/></p>
            </a>
          </p>
          <br />
          <p className="project-bio">{project.bio}</p>
          <br />
        </div>
        {project.video ? (
          <iframe
            className="project-video"
            id={project.id}
            title={project.name}
            width="60%"
            height="350"
            src={project.video}
            allowFullScreen
          ></iframe>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;
