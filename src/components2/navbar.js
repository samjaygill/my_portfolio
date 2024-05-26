import React, { useEffect, useState } from 'react';
import "./css/navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = () => {
    const sections = ['#home', '#about', '#projects', '#cv', '#contact'];
    const scrollPos = window.scrollY + 100;

    for (let section of sections) {
      const element = document.querySelector(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
          setActiveSection(section);
        }
      }
    }

    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='nav-container'>
      <div className={`nav-card ${scrolled ? 'scrolled' : ''}`}>
        <a href="#home" className={activeSection === '#home' ? 'active' : ''}>Home</a>
        <a href="#about" className={activeSection === '#about' ? 'active' : ''}>About</a>
        <a href="#projects" className={activeSection === '#projects' ? 'active' : ''}>Projects</a>
        <a href="#contact" className={activeSection === '#contact' ? 'active' : ''}>Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
