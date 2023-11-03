import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_spmks3a",
        "template_r94zfci",
        form.current,
        "wlts4k1c6j0mFCBKh"
      )
      .then(
        () => {
          toast.success("Message successfully sent!");
          form.current.reset();
          window.setTimeout(() => {
            window.location.reload();
          }, 5000);
        },
        () => {
          toast.error("Failed to send the message, please try again");
        }
      );
  };
  return (
    <form id="form" ref={form} onSubmit={sendEmail}>
      <div class="field">
        <label for="from_name">Name: </label>
        <input type="text" name="from_name" id="from_name"></input>
      </div>
      <div class="field">
        <label for="from_email">Email: </label>
        <input type="text" name="from_email" id="from_email"></input>
      </div>
      <div class="field">
        <label for="message">Message: </label>
        <textarea name="message" id="message"></textarea>
      </div>
      <input type="submit" id="button" value="Send"></input>
    </form>
  );
};

export default Contact;
