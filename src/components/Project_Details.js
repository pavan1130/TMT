import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Sidebar from "./Sidebar";
import styles from "../Styles/ProjectDetails.module.css";
import DetailsPopup from "./DetailsPopup";

function Project_Details() {
  const { projectId, projectName, projectDate } = useParams();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState(null); // State to store submitted data

  useEffect(() => {
    // Fetch data or perform other actions
    // Example: fetchData(projectId).then((result) => setData(result));
  }, [projectId]);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSubmittedData = (data) => {
    // Update the state with the submitted data
    setSubmittedData(data);
  };

  return (
    <div>
      <NavigationBar />
      <Sidebar />
      <h2 className={styles["project-details-text"]}>Project Details</h2>
      <button className={styles["project-details-button"]} onClick={openPopup}>
        More Project Details
      </button>
      <div className={styles["project-details-container"]}>
        <div className={styles["project-details-row1"]}>
          <p className={styles["project-details-label"]}>Project ID:</p>
          <p className={styles["project-details-data"]}>{projectId}</p>
        </div>
        <div className={styles["project-details-row2"]}>
          <p className={styles["project-details-label"]}>Project Name:</p>
          <p className={styles["project-details-data"]}>{projectName}</p>
        </div>
        <div className={styles["project-details-row3"]}>
          <p className={styles["project-details-label"]}>Date:</p>
          <p className={styles["project-details-data"]}>{projectDate}</p>
        </div>
      </div>
      {/* Render the DetailsPopup component when isPopupOpen is true */}
      {isPopupOpen && (
        <DetailsPopup
          project={projectId}
          onClose={closePopup}
          onSubmit={handleSubmittedData} // Pass the callback function
        />
      )}
      {submittedData && (
        <div className={`${styles["projectsubmit-details-text"]}`}>
          <p className={`${styles["class-name-2"]}`}>
            <strong>Client Name:</strong> {submittedData.clientName}
          </p>
          <p className={`${styles["class-name-3"]}`}>
            <strong>Assigned To:</strong> {submittedData.assignedTo}
          </p>
          <p className={`${styles["class-name-4"]}`}>
            <strong>Status:</strong> {submittedData.status}
          </p>
          <p className={`${styles["class-name-1"]}`}>
            <strong>Project Design Link:</strong>{" "}
            <a
              href={submittedData.projectDesignLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {submittedData.projectDesignLink}
            </a>
          </p>

          <p className={`${styles["class-name-5"]}`}>
            <strong>Attachments:</strong>
            {submittedData.attachments.map((attachment, index) => (
              <div key={index}>
                <a
                  href={URL.createObjectURL(attachment)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {attachment.name || `Attachment ${index + 1}`}
                </a>
              </div>
            ))}
          </p>
        </div>
      )}
    </div>
  );
}

export default Project_Details;
