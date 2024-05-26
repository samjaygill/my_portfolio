import React from "react";
import "./css/contact.css";
import ContactForm from "./ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faSlack,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import CvEnv from "./CvEnv";

function contact() {
  return (
    <div className="contact-container">
      <div className="form-cv">
      <div className="contact-form">
        <ContactForm />
      </div>
      <div className="cv-container">
        <CvEnv />
      </div>
      </div>
    </div>
  );
}

export default contact;
