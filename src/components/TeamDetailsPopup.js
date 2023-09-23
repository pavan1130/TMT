import React, { useState } from "react";

const TeamDetailsPopup = ({ onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [uinNumber, setUINNumber] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [responsibilities, setResponsibilities] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUINNumberChange = (e) => {
    setUINNumber(e.target.value);
  };

  const handleJobRoleChange = (e) => {
    setJobRole(e.target.value);
  };

  const handleResponsibilitiesChange = (e) => {
    setResponsibilities(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      image,
      uinNumber,
      jobRole,
      responsibilities,
    };
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="details-popup">
      <div className="popup-content">
        <button className="cancel-button" onClick={onClose}>
          X
        </button>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />

          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            accept="image/*" // Restrict to image files
            required
          />

          <label htmlFor="uinNumber">UIN Number:</label>
          <input
            type="text"
            id="uinNumber"
            value={uinNumber}
            onChange={handleUINNumberChange}
            required
          />

          <label htmlFor="jobRole">Job Role:</label>
          <input
            type="text"
            id="jobRole"
            value={jobRole}
            onChange={handleJobRoleChange}
            required
          />

          <label htmlFor="responsibilities">Roles and Responsibilities:</label>
          <textarea
            id="responsibilities"
            value={responsibilities}
            onChange={handleResponsibilitiesChange}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default TeamDetailsPopup;
