import React from "react";
import "./css/home.css";
import ChatBubble from "./ChatBubble.js";

function home() {
  return (
    <div className="home-container">
      <div className="home-text from-left">
        <h3 className="heading1">Hello. I'm Samantha.</h3>
        <h4 className="heading2">A Junior Software Developer.</h4>
        <p className="heading3">
          I'm passionate about creating experiences that are user friendly,
          accessible and that meets users needs.
        </p>
      </div>
      <div className="home-chat from-right">
        <ChatBubble />
      </div>
    </div>
  );
}

export default home;
