import React, { useState } from "react";
import "../Styles/AddProjectPopup.css";
const AddProjectPopup = ({ onClose, onAddProject }) => {
  const [projectName, setProjectName] = useState("");
  const [projectId, setProjectId] = useState("");
  const [projectDate, setProjectDate] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Create a new project object with the form values
    const newProject = {
      name: projectName,
      id: projectId,
      date: projectDate,
    };

    // Call the onAddProject function to add the new project
    onAddProject(newProject);

    // Clear the form fields
    setProjectName("");
    setProjectId("");
    setProjectDate("");

    // Close the popup
    onClose();
  };

  return (
    <div className="popup-add">
      <div className="popup-content-add1">
        <div className="popup-header-add">
          <button className="popup-close-add" onClick={onClose}>
            X
          </button>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group-add">
            <label htmlFor="projectName">Project Name</label>
            <input
              type="text"
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
            />
          </div>
          <div className="form-group-add">
            <label htmlFor="projectId">Project ID/No</label>
            <input
              type="text"
              id="projectId"
              value={projectId}
              onChange={(e) => setProjectId(e.target.value)}
              required
            />
          </div>
          <div className="form-group-add">
            <label htmlFor="projectDate">Date</label>
            <input
              type="date"
              id="projectDate"
              value={projectDate}
              onChange={(e) => setProjectDate(e.target.value)}
              required
            />
          </div>
          <button className="add-button-add">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddProjectPopup;
