import React from "react";
import { Link } from "react-router-dom";

import "../Styles/ViewTask.css";
import NavigationBar from "./NavigationBar";
import Sidebar from "./Sidebar";

const ViewTask = () => {
  return (
    <div className="content-main">
      <NavigationBar />
      <Sidebar />
      <h2 className="task-progress">Task Progress</h2>

      <div className="card-container">
        <Link
          to="/empty-page/green"
          className="card task-completed"
          style={{ backgroundColor: "lightgreen" }}
        >
          Task Completed
        </Link>
        <Link
          to="/empty-page/red"
          className="card task-pending"
          style={{ backgroundColor: "lightlavender" }}
        >
          Task Pending
        </Link>
        <Link
          to="/empty-page/blue"
          className="card on-going-task"
          style={{ backgroundColor: "lightblue" }}
        >
          On Going Task
        </Link>
        <Link
          to="/empty-page/orange"
          className="card task-in-review"
          style={{ backgroundColor: "lightyellow" }}
        >
          Task in Review
        </Link>
      </div>
    </div>
  );
};

export default ViewTask;
