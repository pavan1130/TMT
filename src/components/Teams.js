import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import TeamPopup from "./TeamPopup";

import "../Styles/Teams.css";
import NavigationBar from "./NavigationBar";
import Sidebar from "./Sidebar";

const Teams = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [Teams, setTeams] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const onAddProject = (newProject) => {
    setTeams([...Teams, newProject]);
  };

  return (
    <div className="content-main">
      <NavigationBar />
      <Sidebar />
      <div className="teams-header">
        <h2 className="project-text">Teams</h2>
        <button className="add-project-button" onClick={openPopup}>
          Create Team
        </button>
      </div>
      <div className="team-card-container">
        {Teams.map((project, index) => (
          <Link
            to={`/teams/${project.id}/${encodeURIComponent(project.name)}`}
            className="project-card"
            key={index}
          >
            <h3 className="team-name">{project.name}</h3>
            <p className="team-id">ID: {project.id}</p>
            <h4 className="team-membes"></h4>
          </Link>
        ))}
      </div>
      {isPopupOpen && (
        <TeamPopup onClose={closePopup} onAddProject={onAddProject} />
      )}
    </div>
  );
};

export default Teams;
