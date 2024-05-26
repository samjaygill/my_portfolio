import React from "react";
import "./css/contact.css";
import ContactForm from "./ContactForm";
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
