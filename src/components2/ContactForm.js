import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./css/contactForm.css"; // Ensure your styles are imported correctly

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zhwgps4",
        "template_r94zfci",
        e.target,
        "wlts4k1c6j0mFCBKh"
      )
      .then(
        (result) => {
          alert("Message Sent Successfully");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          alert("An error occurred, please try again");
        }
      );
  };

  return (
    <div className="contact-form-container from-left">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
