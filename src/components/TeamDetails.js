import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Sidebar from "./Sidebar";
import styles from "../Styles/TeamDetails.module.css";
import TeamDetailsPopup from "./TeamDetailsPopup";

function TeamDetails() {
  const { projectId, projectName } = useParams();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSubmittedData = (data) => {
    // Add the submitted data to the teamMembers array
    setTeamMembers([...teamMembers, data]);
    closePopup(); // Close the popup after submission
  };

  return (
    <div>
      <Sidebar />
      <h2 className={styles["project-details-text"]}>Team Members</h2>
      <button className={styles["project-details-button"]} onClick={openPopup}>
        Add Team Member
      </button>
      <div className={styles["project-details-container"]}>
        <div className={styles["project-details-row1"]}>
          <p className={styles["project-details-label"]}>Team ID:</p>
          <p className={styles["project-details-data"]}>{projectId}</p>
        </div>
        <div className={styles["project-details-row2"]}>
          <p className={styles["project-details-label"]}>Team Name:</p>
          <p className={styles["project-details-data"]}>{projectName}</p>
        </div>
      </div>
      {/* Render the TeamDetailsPopup component when isPopupOpen is true */}
      {isPopupOpen && (
        <TeamDetailsPopup
          project={projectId}
          onClose={closePopup}
          onSubmit={handleSubmittedData}
        />
      )}
      {/* Display team members' data as cards */}
      <div
        className={`${styles["projectsubmit-details-container"]} ${styles["team-member-container"]}`}
      >
        {teamMembers.map((submittedData, index) => (
          <div key={index} className={styles["team-member-card"]}>
            <div className={styles["team-member-image"]}>
              {submittedData.image && (
                <img
                  src={URL.createObjectURL(submittedData.image)}
                  alt="Team Member"
                  className={styles["team-member-image"]}
                />
              )}
            </div>
            <div className={styles["team-member-details"]}>
              <p className={styles["team-member-name"]}>
                <strong>Name:</strong> {submittedData.name}
              </p>
              <p className={styles["team-member-uin"]}>
                <strong>UIN No:</strong> {submittedData.uinNumber}
              </p>
              <p className={styles["team-member-job-role"]}>
                <strong>Job Role:</strong> {submittedData.jobRole}
              </p>
              <p className={styles["team-member-responsibilities"]}>
                <strong>Roles and Responsibilities:</strong>{" "}
                {submittedData.responsibilities}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamDetails;
