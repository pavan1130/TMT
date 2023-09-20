import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Sidebar from "./Sidebar";
import styles from "../Styles/ProjectDetails.module.css";
import DetailsPopup from "./DetailsPopup";
function ProjectDetails() {
  const { projectId, projectName, projectDate } = useParams();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
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
  return (
    <div>
      <NavigationBar />
      <Sidebar />
      <h2 className={styles["project-details-text"]}>Project Details</h2>
      <button className={styles["project-details-button"]} onClick={openPopup}>
        More Project Details
      </button>
      <div className={styles["project-details-container"]}>
        <div className={styles["project-details-row"]}>
          <p className={styles["project-details-label"]}>Project ID:</p>
          <p className={styles["project-details-data"]}>{projectId}</p>
        </div>
        <div className={styles["project-details-row"]}>
          <p className={styles["project-details-label"]}>Project Name:</p>
          <p className={styles["project-details-data"]}>{projectName}</p>
        </div>
        <div className={styles["project-details-row"]}>
          <p className={styles["project-details-label"]}>Date:</p>
          <p className={styles["project-details-data"]}>{projectDate}</p>
        </div>
      </div>
      {/* Render the DetailsPopup component when isPopupOpen is true */}
      {isPopupOpen && <DetailsPopup project={projectId} onClose={closePopup} />}
    </div>
  );
}

export default ProjectDetails;
