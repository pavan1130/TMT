import React, {useState} from 'react';
import AddProjectPopup from './AddProjectPopup';
import DetailsPopup from './DetailsPopup';
import './Projects.css'; // Import the CSS file

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
      <div className="projects_header">
        <h2>Projects</h2>
        <button className="add_project_button" onClick={openPopup}>ADD PROJECT</button>
      </div>
      <div className="project_card_container">
      {projects.map((project, index) => (
        <div className="project_card"  key={index} onClick={() => openDetailsPopup(project)}>
         
          <h3>{project.name}</h3>
            <p>ID: {project.id}</p>
            <p>Date: {project.date}</p>
        </div>
      ))}
        
        {isPopupOpen && <AddProjectPopup onClose={closePopup} onAddProject={onAddProject} />}

      {/* Render the DetailsPopup when a project is selected */}
      {selectedProject && <DetailsPopup project={selectedProject} onClose={closeDetailsPopup} />}
      </div>
    </div>
  );
};

export default Projects;
