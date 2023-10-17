import React from "react";
import { useParams } from "react-router-dom";
import './ProjectCard.css'

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
      <p className="project-name">{project.name}</p>
      <p className="project-type">{project.type} Project</p>
      <p className="project-language">Language: {project.language}</p>
      <a href={project.link} className="project-language">{project.link}</a>
      <br/>


      </div>
      <iframe
      className="project-video"
      id={project.id}
      title={project.name}
        width="150%"
        height="315"
        src={project.video} 
        allowFullScreen
      ></iframe>
      </div>
    </div>
  );
};

export default ProjectCard;