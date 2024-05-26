import React, { useState, useEffect } from "react";
import "./loading.css";
import { StoredProjects, Skills } from "../data/Info";
import Home from "../components2/home.js";
import About from "../components2/about.js";
import Projects from "../components2/projects.js";
import Contact from "../components2/contact.js";
import Header from "../components2/navbar.js";
import Footer from "../components2/Footer.js";

const MainContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          return 100;
        }
        return prevProgress + 5; 
      });
    }, 100); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loading-container">
          <div className="loading-bar">
            <div
              className="loading-progress"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      ) : (
        <div className="main-page">
          <Header />
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About skills={Skills} />
          </section>
          <section id="projects">
            <Projects projects={StoredProjects} />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default MainContainer;
