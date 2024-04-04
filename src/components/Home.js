import "./css/home.css";
import styled from "styled-components";
import HomeImage from "./HomeImage";
import ChatBubble from "./ChatBubble";

const HomeHeading = styled.h3`
  text-align: center;
  font-size: 50px;
  margin: 30px 0;

  @media (max-width: 1026px) {
    font-size: 30px;
    max-width: 100%;
    white-space: nowrap;
    animation: typing 5s steps(300, end), blink-caret 0.75s step-end infinite;
    margin-bottom: 10px;
  }
@media (max-width: 500px) {
  font-size: 20px;
}

`;

const Home = ({skills}) => {

  const sortedSkills = skills.sort((a, b) => a.localeCompare(b));

  return (
    <>
      <div className="typing-header">
        <HomeHeading>Junior Software Developer</HomeHeading>
      </div>

      <div className="home-container">
        <div className="home-image">
          <HomeImage />
        </div>
        <div className="home-bio">
          <ChatBubble />
        </div>
      </div>

      <div className="skills-container">
        {sortedSkills.map((skill, index) => (
          <div key={index} className="skills">{skill.toUpperCase()}</div>
        ))}
      </div>
    </>
  );
};

export default Home;
