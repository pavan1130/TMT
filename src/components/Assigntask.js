import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";
import NavigationBar from "./NavigationBar";
import Sidebar from "./Sidebar";
// import "../Styles/Assigntask.css";
import "../Styles/App.css";
const AssignTask = () => {
  const [projectName, setProjectName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [assignee, setAssignee] = useState("Pavan");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleProjectNameChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleTaskDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleAssigneeChange = (e) => {
    setAssignee(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with the following data:");
    console.log("Project Name:", projectName);
    console.log("Task Description:", taskDescription);
    console.log("Assignee:", assignee);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
  };

  return (
    <div className="form-container">
      <NavigationBar />
      <Sidebar />
      <form onSubmit={handleSubmit} className="form">
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            label="Project Name"
            variant="outlined"
            id="projectName"
            value={projectName}
            onChange={handleProjectNameChange}
            className="text-field"
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            label="Task Description"
            variant="outlined"
            id="taskDescription"
            value={taskDescription}
            onChange={handleTaskDescriptionChange}
            multiline
            rows={3}
            className="text-field"
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="assignee">Assignee</InputLabel>
            <Select
              id="assignee"
              value={assignee}
              onChange={handleAssigneeChange}
              label="Assignee"
            >
              <MenuItem value="Pavan">Pavan</MenuItem>
              <MenuItem value="Harshitha">Harshitha</MenuItem>
              <MenuItem value="Rakesh">Rakesh</MenuItem>
              <MenuItem value="Sunil">Sunil</MenuItem>
              <MenuItem value="Somanath">Somanath</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            type="date"
            label="Start Date"
            variant="outlined"
            id="startDate"
            value={startDate}
            onChange={handleStartDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            type="date"
            label="End Date"
            variant="outlined"
            id="endDate"
            value={endDate}
            onChange={handleEndDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button type="button" variant="outlined" color="error">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AssignTask;
