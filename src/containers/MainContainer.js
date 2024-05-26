import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "../components/Header";
import "./loading.css";
import logo from "./images/logo.png";
// import Home from "../components/Home";
// import Projects from "../components/Projects";
// import About from "../components/About";
// import CV from "../components/CV";
// import CVInfo from "../components/CVInfo";
import { StoredProjects, Skills } from "../data/Info";
// import ProjectCard from "../components/ProjectCard";
// import { Analytics } from "@vercel/analytics/react";
// import Contact from "../components/Contact";
import Home from "../components2/home.js";
import About from "../components2/about.js";
import Projects from "../components2/projects.js";
import CvEnv from "../components2/CvEnv.js";
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
        return prevProgress + 5; // Increase the increment
      });
    }, 100); // Adjust the interval duration

    return () => clearInterval(interval);
  }, []);

  return (
    // <Router>
    //   {isLoading ? (
    //     <div className="content">
    //       <img src={logo} alt="Rotating" className="round-image" />
    //     </div>
    //   ) : (
    //     <>
    //       <Header />
    //       <Routes>
    //         <Route path="/" element={<Home skills={Skills} />} />
    //         <Route
    //           path="/projects"
    //           element={<Projects projects={StoredProjects} />}
    //         />
    //         <Route
    //           path="/projects/:id"
    //           element={<ProjectCard projects={StoredProjects} />}
    //         />
    //         <Route path="/about" element={<About />} />
    //         <Route path="/cv" element={<CV />} />
    //         <Route path="/cv/info" element={<CVInfo />} />
    //         <Route path="/cv/info" element={<CVInfo />} />
    //         <Route path="/contact" element={<Contact />} />
    //       </Routes>
    //     </>
    //   )}
    //   <Analytics />
    // </Router>
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
