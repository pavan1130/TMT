import React, { useState } from "react";
import "../Styles/DetailsPopup.css";

const DetailsPopup = ({ project, onClose }) => {
  const [projectDesignLink, setProjectDesignLink] = useState("");
  const [clientName, setClientName] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [status, setStatus] = useState("Not Started");
  const [attachments, setAttachments] = useState([]);

  const handleProjectDesignLinkChange = (e) => {
    setProjectDesignLink(e.target.value);
  };

  const handleClientNameChange = (e) => {
    setClientName(e.target.value);
  };

  const handleAssignedToChange = (e) => {
    setAssignedTo(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleAttachmentChange = (e) => {
    const files = e.target.files; // Get selected files
    const fileArray = Array.from(files); // Convert files to an array
    setAttachments([...attachments, ...fileArray]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send the data to a server

    // Close the popup
    onClose();
  };

  return (
    <div className="details-popup">
      <div className="popup-content">
        <button className="cancel-button" onClick={onClose}>
          X
        </button>
        <h2>Details</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="projectDesignLink">Project Design Link:</label>
          <input
            type="text"
            id="projectDesignLink"
            value={projectDesignLink}
            onChange={handleProjectDesignLinkChange}
            required
          />
          <label htmlFor="clientName">Client Name:</label>
          <input
            type="text"
            id="clientName"
            value={clientName}
            onChange={handleClientNameChange}
            required
          />
          <label htmlFor="assignedTo">Assigned To:</label>
          <input
            type="text"
            id="assignedTo"
            value={assignedTo}
            onChange={handleAssignedToChange}
            required
          />
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            value={status}
            onChange={handleStatusChange}
            required
          >
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <label htmlFor="attachment">Attachment:</label>
          <input
            type="file" // Change input type to file
            id="attachment"
            onChange={handleAttachmentChange}
            multiple // Allow multiple file selection
          />
          {attachments.map((attachment, index) => (
            <div key={index}>
              <a
                href={URL.createObjectURL(attachment)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Attachment {index + 1}
              </a>
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default DetailsPopup;
