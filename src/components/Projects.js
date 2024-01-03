import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Projects.css";

const Header = styled.h3`
  text-align: center;
  margin: 30px 0px;
  font-size: 30px;
  letter-spacing: 0.15em;
  @media (max-width: 768px) {
    margin-bottom: 10px;
    font-size: 20px;
    margin: 15px;
  }
`;

const List = styled.li`
  list-style-type: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Projects = ({ projects }) => {
  console.log(projects);

  const projectList = projects.map((project, index) => (
    <div className="project-box" key={index}>
      <StyledLink to={`/projects/${project.id}`}>
        <div className="project-info">
        </div>
        {/* {project.image && project.image.length > 0 && (
                    <ImageGallery items={project.image.map((image) => ({
                      original: image
                    }))} showPlayButton={false} showFullscreenButton={false} exitFullScreen={true}/>
                  )} */}
        <img src={project.image} alt={project.name} className="image" />
      </StyledLink>
    </div>
  ));
  return (
    <div>
      <Header>My Projects</Header>
      <p className="github">
        Here are the primary projects I've successfully finished during my time
        at CodeClan. If you'd like to see more details or access the source
        code, please visit my GitHub page{" "}
        <a href="https://github.com/samjaygill">here</a>.
      </p>
      <div className="project-list-container">
        <ul className="ul">
          <List>{projectList}</List>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
