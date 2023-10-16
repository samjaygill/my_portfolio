import "./css/home.css";
import styled from "styled-components";
import HomeImage from "./HomeImage";
import ChatBubble from "./ChatBubble";
import ProgressBar from "@ramonak/react-progress-bar";

const HomeHeading = styled.h3`
  text-align: center;
  font-size: 35px;

  @media (max-width: 768px) {
    font-size: 20px;
    max-width: 100%;
    white-space: nowrap;
    animation: typing 5s steps(300, end), blink-caret 0.75s step-end infinite;
  }
`;

const Home = () => {
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

      <div className="container-2">
        <div className="progress-1">
          <p>PYTHON</p>
          <hr className="line" />

          <ProgressBar
            completed={75}
            className="wrapper"
            barContainerClassName="container"
            completedClassName="barCompleted1"
            labelClassName="label"
          />
        </div>
        <div className="progress-2">
          <p>JAVASCRIPT</p>
          <hr className="line" />

          <ProgressBar
            completed={80}
            className="wrapper"
            barContainerClassName="container"
            completedClassName="barCompleted2"
            labelClassName="label"
          />
        </div>
        <div className="progress-3">
          <p>JAVA</p>
          <hr className="line" />
          <ProgressBar
            completed={10}
            className="wrapper"
            barContainerClassName="container"
            completedClassName="barCompleted3"
            labelClassName="label"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
