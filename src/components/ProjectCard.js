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
        <div className="video">
          {project.video ? (
            <iframe
              className="project-video"
              id={project.id}
              title={project.name}
              width="100%"
              height="300"
              src={project.video}
              allowFullScreen
            ></iframe>
          ) : 
          <img src={project.image} className="pc-image"/>}
        </div>
        <div className="card-details">
          <p className="project-card-name">{project.name}</p>
          {project.url ? (
            <p className="project-url">
              <a href={project.url} className="url-link">
                {project.url}
              </a>
            </p>
          ) : null}
          <p className="project-github">
            {project.linkClient && project.linkServer ? (
              <p>
                View the code:{" "}
                <a href={project.linkClient} className="github-card-link">
                  Client
                </a>{" "}
                |{" "}
                <a href={project.linkServer} className="github-card-link">
                  Server
                </a>
              </p>
            ) : (
              <p>
                View the code:{" "}
                <a href={project.linkClient} className="github-card-link">
                  Client
                </a>
              </p>
            )}
          </p>
          <p className="project-bio">{project.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
