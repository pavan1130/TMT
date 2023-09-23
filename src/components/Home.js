import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Home.module.css";
import NavigationBar from "./NavigationBar";
import Sidebar from "./Sidebar";
import "../Styles/App.css";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <Sidebar />
      <div className={styles["content-main"]}>
        <div className={styles["home-header"]}>
          <h2 className={styles["home-text"]}>Home</h2>
        </div>

        <div className={styles["card-container"]}>
          <Link
            to="/projects"
            className={`${styles["card"]} ${styles["project-card"]}`}
          >
            <p className={styles["inside-text"]}>Projects</p>
          </Link>
          <Link
            to="/teams"
            className={`${styles["card"]} ${styles["other-card"]}`}
          >
            <p className={styles["inside-text"]}>Teams</p>
          </Link>
          <Link
            to="/others2"
            className={`${styles["card"]} ${styles["other-card1"]}`}
          >
            <p className={styles["inside-text"]}>Others</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
