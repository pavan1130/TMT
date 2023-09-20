import React, { useState } from "react";
import { Link, useParams } from "react-router-dom"; // Import Link and useParams
import AddProjectPopup from "./AddProjectPopup";

import "../Styles/Projects.css";
import NavigationBar from "./NavigationBar";
import Sidebar from "./Sidebar";
import "../Styles/App.css";

const Projects = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const onAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const openDetailsPopup = (project) => {
    setSelectedProject(project);
  };

  const closeDetailsPopup = () => {
    setSelectedProject(null);
  };

  return (
    <div className="content-main">
      <NavigationBar />
      <Sidebar />
      <div className="projects-header">
        <h2 className="project-text">Projects</h2>
        <button className="add-project-button" onClick={openPopup}>
          ADD PROJECT
        </button>
      </div>
      <div className="project-card-container">
        {projects.map((project, index) => (
          <Link
            to={`/projects/${project.id}/${encodeURIComponent(
              project.name
            )}/${encodeURIComponent(project.date)}`}
            className="project-card"
            key={index}
          >
            <h3 className="project-name">{project.name}</h3>
            <p className="project-id">ID: {project.id}</p>
            <p className="project-date">Date: {project.date}</p>
          </Link>
        ))}
      </div>
      {isPopupOpen && (
        <AddProjectPopup onClose={closePopup} onAddProject={onAddProject} />
      )}
    </div>
  );
};

export default Projects;
