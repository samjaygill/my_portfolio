import "./css/home.css";
import styled from "styled-components";
import HomeImage from "./HomeImage";
import ChatBubble from "./ChatBubble";
import ProgressBar from "@ramonak/react-progress-bar";

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
{/* 
      <div className="container-2">
        <div className="progress-1">
          <p>PYTHON</p>
          <hr className="line" />
          <p>Skill level:</p>

          <ProgressBar
            completed={85}
            className="wrapper"
            barContainerClassName="barContainer"
            completedClassName="barCompleted1"
            labelClassName="label"
          />
        </div>
        <div className="progress-2">
          <p>JAVASCRIPT</p>
          <hr className="line" />
          <p>Skill level:</p>

          <ProgressBar
            completed={90}
            className="wrapper"
            barContainerClassName="barContainer"
            completedClassName="barCompleted2"
            labelClassName="label"
          />
        </div>
        <div className="progress-3">
          <p>JAVA</p>
          <hr className="line" />
          <p>Skill level:</p>

          <ProgressBar
            completed={85}
            className="wrapper"
            barContainerClassName="barContainer"
            completedClassName="barCompleted3"
            labelClassName="label"
          />
        </div>
        <div className="progress-4">
          <p>TYPESCRIPT (Learning)</p>
          <hr className="line" />
          <p>Skill level:</p>

          <ProgressBar
            completed={5}
            className="wrapper"
            barContainerClassName="barContainer"
            completedClassName="barCompleted4"
            labelClassName="label"
          />
        </div> */}
      {/* </div> */}
    </>
  );
};

export default Home;
