import { Link } from 'react-router-dom'
import styled from "styled-components";
import './Projects.css'


const Header = styled.h3`
    text-align: center;
    font-size: 35px;
    letter-spacing: .15em;
    @media (max-width: 768px) {
      margin-bottom : 15px;
    }
    `

const List = styled.li`
list-style-type: none;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; 
`;


const Projects = ({projects}) => {
    console.log(projects);

    const projectList = projects.map((project, index) => (
        <div className='project-box' key={index}>
          <StyledLink to={`/projects/${project.id}`}> 
    <div className='project-info'>
    <p className='project-name'>{project.name}</p>
    <p className='project-language'> {project.language}</p>
    </div>
    <img src={project.image} alt={project.name} className='image'/>
    </StyledLink>

  </div>

    ))
    return ( 
        <div>
        <Header>My Projects</Header>
        <div className='project-list-container'>
            <ul className='ul'><List>
            {projectList}
            </List></ul>
        </div>
        </div>
     );
}
 
export default Projects;