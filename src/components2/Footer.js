import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons';
import './css/footer.css';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className='sm-links'>
        <div className="footer-section social-media">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/sjaygill/">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/samjaygill">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://twitter.com/your-username">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="mailto:samantha.gillies@outlook.com">
              <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" />
            </a>
          </div>
        </div>
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        </div>
        <div className="footer-section copyright">
          <p>&copy; {new Date().getFullYear()} Samantha Gillies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;