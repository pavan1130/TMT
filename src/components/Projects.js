import React, { useState } from "react";
import AddProjectPopup from "./AddProjectPopup";
import DetailsPopup from "./DetailsPopup";
import "../Styles/Projects.css";
import NavigationBar from "./NavigationBar";
import Sidebar from "./Sidebar";
import "../Styles/App.css";
const Projects = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null); // Add state for the selected project

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
          <div
            className="project-card"
            key={index}
            onClick={() => openDetailsPopup(project)}
          >
            <h3>{project.name}</h3>
            <p>ID: {project.id}</p>
            <p>Date: {project.date}</p>
          </div>
        ))}
      </div>
      {isPopupOpen && (
        <AddProjectPopup onClose={closePopup} onAddProject={onAddProject} />
      )}

      {/* Render the DetailsPopup when a project is selected */}
      {selectedProject && (
        <DetailsPopup project={selectedProject} onClose={closeDetailsPopup} />
      )}
    </div>
  );
};

export default Projects;
