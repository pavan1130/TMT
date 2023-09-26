import React, { useState } from "react";
import "../Styles/TeamPopup.css";
const TeamPopup = ({ onClose, onAddProject }) => {
  const [projectName, setProjectName] = useState("");
  const [projectId, setProjectId] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Create a new project object with the form values
    const newProject = {
      name: projectName,
      id: projectId,
    };

    // Call the onAddProject function to add the new project
    onAddProject(newProject);

    // Clear the form fields
    setProjectName("");
    setProjectId("");

    // Close the popup
    onClose();
  };

  return (
    <div className="popup-add">
      <div className="popup-content-add">
        <div className="popup-header-add">
          <button className="popup-close-add" onClick={onClose}>
            X
          </button>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group-add">
            <label htmlFor="projectName">Team_Name</label>
            <input
              type="text"
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
            />
          </div>
          <div className="form-group-add">
            <label htmlFor="projectId">Team_ID</label>
            <input
              type="text"
              id="projectId"
              value={projectId}
              onChange={(e) => setProjectId(e.target.value)}
              required
            />
          </div>

          <button className="add-button-add">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default TeamPopup;
