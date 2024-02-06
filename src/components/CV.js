import cv from "./images/SG.pdf";
import "./css/cv.css";

const CV = () => {
  return (
    <>
    <p className="cv-para">Please click envelope to download CV.</p>
    <a href={cv} download="Samantha_Gillies.pdf" className="downloadCV">
      <div className="letter-image">
        <div className="animated-mail">
          <div className="back-fold"></div>
          <div className="letter">
            <div className="letter-border"></div>
            <div className="letter-title"></div>
            <div className="letter-context"></div>
            <div className="letter-stamp">
              <div className="letter-stamp-inner"></div>
            </div>
          </div>
          <div className="top-fold"></div>
          <div className="body"></div>
          <div className="left-fold"></div>
        </div>
        <div className="shadow"></div>
      </div>
      </a>
    </>
  );
};

export default CV;
