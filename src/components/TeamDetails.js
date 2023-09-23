// TeamDetails.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "./NavigationBar";
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
      {/* <NavigationBar />
      <Sidebar /> */}
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
      {/* Render the DetailsPopup component when isPopupOpen is true */}
      {isPopupOpen && (
        <TeamDetailsPopup
          project={projectId}
          onClose={closePopup}
          onSubmit={handleSubmittedData}
        />
      )}
      {/* Display team members' data as cards */}
      <div className={styles["projectsubmit-details-container"]}>
        {teamMembers.map((submittedData, index) => (
          <div key={index} className={styles["team-member-card"]}>
            <div className={styles["team-member-image"]}>
              {submittedData.image && (
                <img
                  src={URL.createObjectURL(submittedData.image)}
                  alt="Team Member"
                />
              )}
            </div>
            <div className={styles["team-member-details"]}>
              <p className={styles["class-name-2"]}>
                <strong>Name:</strong> {submittedData.name}
              </p>
              <p className={styles["class-name-3"]}>
                <strong>UIN Number:</strong> {submittedData.uinNumber}
              </p>
              <p className={styles["class-name-4"]}>
                <strong>Job Role:</strong> {submittedData.jobRole}
              </p>
            </div>
            {/* Hide roles and responsibilities */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamDetails;