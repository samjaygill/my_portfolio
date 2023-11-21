import React from "react";
import { useParams } from "react-router-dom";
import "./ProjectCard.css";

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
          {/* <p className="project-type">{project.type} Project</p>
          <p className="project-language">Language: {project.language}</p> */}
          {/* <br/> */}
          <p className="project-github"><a href={project.link} className="github-card-link">
            <p className="card-link">{project.link}</p>
          </a></p>
          <br/>
          <p className="project-bio">{project.bio}</p>
          <br/>
        </div>
        <iframe
          className="project-video"
          id={project.id}
          title={project.name}
          width="60%"
          height="350"
          src={project.video}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ProjectCard;
