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
          I am presently enrolled in a 16-week Software Development course
          offered by{" "}
          <Link to={`https://www.thisiscodebase.com/about`} className="link">
            CodeBase
          </Link>
          . Initially, the course was run by CodeClan however, during the second
          week, CodeClan faced financial difficulties and went into liquidation.
          <br />
          <br />
          The course provides instruction in three programming languages:
          Python, JavaScript, and Java. At the conclusion of each language, we
          undertake a project. Python projects are individual endeavors, while
          JavaScript and Java projects are conducted in groups.
          <br />
          <br />I am scheduled to finish the course on November 16, 2023, and
          afterward, I will actively seek opportunities for a junior software
          developer position.
        </div>
      </div>
      <div className="main">
        <img src={beach} alt="me" className="beach-image" />
        <div className="about-bio">
          In my spare time, I find joy in embarking on adventures to sunny
          destinations, where I can immerse myself in new cultures, flavors, and
          experiences. Whether it's exploring the vibrant nightlife of Dubai,
          lounging on pristine beaches in Greece, or savoring delicious street
          food in Thailand, I relish the opportunity to broaden my horizons.
          <br></br>
          <br></br>
          Additionally, I prioritize quality time with loved ones, often using
          these trips as a chance to reconnect with friends and family. Sharing
          meals with them, whether at cozy local eateries or elegant
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
