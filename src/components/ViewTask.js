import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Styles/ViewTask.css";
import NavigationBar from "./NavigationBar";

import Sidebar from "./Sidebar";

const ViewTask = () => {
  const [tasks, setTasks] = useState([
    {
      slNo: 1,
      projectName: "Project 1",
      status: "Task Completed",
      startDate: new Date("2023-09-11"),
      endDate: new Date("2023-09-18"),
    },
    {
      slNo: 2,
      projectName: "Project 2",
      status: "Task Pending",
      startDate: new Date("2023-09-12"),
      endDate: new Date("2023-09-20"),
    },
  ]);

  const [newTask, setNewTask] = useState({
    slNo: "",
    projectName: "",
    status: "",
    startDate: null,
    endDate: null,
  });

  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState({
    slNo: "",
    projectName: "",
    status: "",
    startDate: null,
    endDate: null,
  });

  const handleEdit = (index) => {
    setEditMode(true);
    setEditedTask(tasks[index]);
  };

  const handleSave = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editedTask.slNo - 1] = editedTask;
    setTasks(updatedTasks);
    setEditMode(false);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
  };

  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleAdd = () => {
    if (
      newTask.slNo &&
      newTask.projectName &&
      newTask.status &&
      newTask.startDate &&
      newTask.endDate
    ) {
      setTasks([...tasks, { ...newTask }]);
      setNewTask({
        slNo: "",
        projectName: "",
        status: "",
        startDate: null,
        endDate: null,
      });
    } else {
      alert("Please fill in all fields to add a new task.");
    }
  };

  const handleInputChange = (e, field) => {
    setEditedTask({ ...editedTask, [field]: e.target.value });
  };

  const handleDateChange = (date, field) => {
    setEditedTask({ ...editedTask, [field]: date });
  };

  return (
    <div className="content-main">
      <NavigationBar />
      <Sidebar />
      <h2>Task Progress</h2>

      <div className="card-container">
        <div className="card" style={{ backgroundColor: "green" }}>
          Task Completed
        </div>
        <div className="card" style={{ backgroundColor: "red" }}>
          Task Pending
        </div>
        <div className="card" style={{ backgroundColor: "blue" }}>
          On Going Task
        </div>
        <div className="card" style={{ backgroundColor: "orange" }}>
          Task in Review
        </div>
      </div>

      <div className="add-task">
        {/* Add your form and input elements here */}
      </div>

      <table className="task-table">
        <thead>
          <tr>
            <th>Uid</th>
            <th>Name</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.slNo}</td>
              <td>{task.projectName}</td>
              <td>{task.status}</td>
              <td>
                {task.startDate ? task.startDate.toLocaleDateString() : ""}
              </td>
              <td>{task.endDate ? task.endDate.toLocaleDateString() : ""}</td>
              <td>
                {editMode ? (
                  <button onClick={() => handleEdit(index)}>Edit</button>
                ) : (
                  <button onClick={() => handleEdit(index)}>Edit</button>
                )}
              </td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewTask;
