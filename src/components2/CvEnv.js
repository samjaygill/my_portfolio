import cv from "../components/images/SG.pdf";
import "./css/cvEnv.css";

const CV = () => {
  return (
    <>
      <div className="cv-container from-right">
        <p className="cv-para">
          Click the envelope to download my CV. Alternatively, you can download
          it directly from{" "}
          <a href={cv} download="SamanthaGillies.pdf" className="download-link">
            this link
          </a>
          .
        </p>
        <a
          href={cv}
          download="SamanthaGillies.pdf"
          className="downloadCV"
          name="SamanthaGillies"
        >
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
      </div>
    </>
  );
};

export default CV;
