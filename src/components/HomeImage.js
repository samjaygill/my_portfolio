import memoji from "./images/Subject.png";
import "./css/HomeImage.css";

const HomeImage = () => {
  return (
    <div className="main-wrapper">
      <img src={memoji} alt="self" className="memoji-image" />
    </div>
  );
};

export default HomeImage;
