import { Link } from 'react-router-dom'
import styled from "styled-components";
import './Projects.css'


const Header = styled.h3`
    text-align: center;
    font-size: 35px;
    letter-spacing: .15em;
    `

const List = styled.li`
display: inline-block;
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
    <div>
    <p className='project-name'>{project.name}</p>
    <p className='project-type'> {project.type}</p>
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
            <ul><List>
            {projectList}
            </List></ul>
        </div>
        </div>
     );
}
 
export default Projects;