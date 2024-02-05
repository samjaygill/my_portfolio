import selfie from "./images/me.jpg";
import beach from "./images/travel.jpeg";
import "./css/about.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <p className="about-me">About Me</p>
      <div className="main">
        <img src={selfie} alt="me" className="self-image" />
        <div className="about-bio">
          I have successfully completed a 16-week Software Development course
          offered by{" "}
          <Link to={`https://www.thisiscodebase.com/about`} className="link">
            CodeBase
          </Link>
          . Originally, the course began under CodeClan's umbrella but in the
          second week, financial challenges led to CodeClan's liquidation.
          <br />
          <br />
          Throughout the course, I gained proficiency in three programming
          languages: Python, JavaScript, and Java. Each language segment
          concluded with a project, with Python project being an individual
          endeavour, while JavaScript and Java projects were collaborative group
          efforts.
          <br />
          <br />
          Having concluded the course on November 16, 2023, I am now actively
          pursuing opportunities for a junior software developer position. Armed
          with newfound skills and experiences, I'm excited to embark on the
          next phase of my professional journey.
        </div>
      </div>
      <hr className="about-line"/>
      <div className="main">
        <img src={beach} alt="me" className="beach-image" />
        <div className="about-bio">
          In my spare time, I find joy in embarking on adventures to sunny
          destinations, where I can immerse myself in new cultures, flavours,
          and experiences. Whether it's exploring the vibrant nightlife of
          Dubai, lounging on pristine beaches in Greece, or savouring delicious
          street food in Thailand, I relish the opportunity to broaden my
          horizons.
          <br></br>
          <br></br>
          Additionally, I prioritize quality time with loved ones, often using
          these trips as a chance to reconnect with friends and family. Sharing
          meals with them, whether at cosy local eateries or elegant
          restaurants, is a cherished way to create lasting memories. And when
          I'm not globe-trotting, you can often find me strolling through scenic
          parks or along picturesque shorelines, relishing the simple pleasure
          of a leisurely walk in the great outdoors.
        </div>
      </div>
    </div>
  );
};

export default About;
