import { Link } from "react-router-dom";
import "./css/ChatBubble.css";

const ChatBubble = () => {
  return (
    <div class="container">
      <div class="imessage">
        <p class="from-them">
          Hello World! I'm Samantha, Welcome to my portfolio!
        </p>
        <p class="from-me">Hi Samantha. Where would i find your projects?</p>
        <p class="from-them ">
          You would find my projects <Link to={`/projects/`} className="cb-link">here</Link>!
        </p>
        <p class="from-me">How would I find out more about you?</p>
        <p class="from-them ">
          You can find out more about me <Link to={`/about/`} className="cb-link">here</Link>!
        </p>
        <p class="from-them margin-b_one">
          If you would like to get in touch feel free to{" "}
          <a href="mailto:samantha.gillies@outlook.com?subject=Portfolio" className="cb-link">
            email me
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default ChatBubble;
