import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import "./loading.css";
import logo from "./images/logo.png";
import Home from "../components/Home";
import Projects from "../components/Projects";
import About from "../components/About";
import CV from "../components/CV";
import CVInfo from "../components/CVInfo";
import {StoredProjects, Skills} from "../data/Info";
import ProjectCard from "../components/ProjectCard";
import { Analytics } from '@vercel/analytics/react';
import Contact from "../components/Contact";

const MainContainer = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <Router>
      {isLoading ? (
        <div className="content">
          <img src={logo} alt="Rotating" className="round-image" />
        </div>
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home skills={Skills} />} />
            <Route
              path="/projects"
              element={<Projects projects={StoredProjects} />}
            />
            <Route
              path="/projects/:id"
              element={<ProjectCard projects={StoredProjects} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/cv/info" element={<CVInfo />} />
            <Route path="/cv/info" element={<CVInfo />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </>
      )}
      <Analytics />
    </Router>
  );
};

export default MainContainer;
