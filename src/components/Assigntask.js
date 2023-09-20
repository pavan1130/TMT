import React, { useState } from "react";
import Button from "@mui/material/Button";
import NavigationBar from "./NavigationBar";
import Sidebar from "./Sidebar";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "../Styles/Assigntask.css";
const AssignTask = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectId, setProjectId] = useState("");
  const [projectName, setProjectName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [tasks, setTasks] = useState([]); // Array to store submitted tasks

  const handleAddTask = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    // Create a new task object with the submitted data
    const newTask = {
      projectId,
      projectName,
      taskDescription,
      assignee,
      startDate,
      endDate,
    };

    // Add the new task to the tasks array
    setTasks([...tasks, newTask]);

    // Reset the form fields and close the modal
    setProjectId("");
    setProjectName("");
    setTaskDescription("");
    setAssignee("");
    setStartDate("");
    setEndDate("");
    handleCloseModal();
  };

  return (
    <div className="form-container">
      <NavigationBar />
      <Sidebar />
      <div className="assign-task-container">
        <h1 className="assign-task-text">Assign Task</h1>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddTask}
          className="add-task-button"
        >
          Add Task
        </Button>
      </div>
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <TextField
            fullWidth
            label="Project ID"
            variant="outlined"
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Project Name"
            variant="outlined"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Task Description"
            variant="outlined"
            multiline
            rows={3}
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <FormControl fullWidth variant="outlined" sx={{ marginBottom: 2 }}>
            <InputLabel htmlFor="assignee">Assignee</InputLabel>
            <Select
              id="assignee"
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
              label="Assignee"
            >
              <MenuItem value="Sunil">Sunil</MenuItem>
              <MenuItem value="Pavan">Pavan</MenuItem>
              <MenuItem value="Rakesh">Rakesh</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            type="date"
            label="Start Date"
            variant="outlined"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            type="date"
            label="End Date"
            variant="outlined"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ marginBottom: 2 }}
          />
          <Button
            variant="outlined"
            onClick={handleCloseModal}
            sx={{ marginRight: 2 }}
          >
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Modal>
      <div className="task-details-container">
        <h2 className="task-heading">Task Details</h2>
        <TableContainer>
          <Table className="task-table">
            <TableHead>
              <TableRow>
                <TableCell>Project ID</TableCell>
                <TableCell>Project Name</TableCell>
                <TableCell>Task Description</TableCell>
                <TableCell>Assignee</TableCell>
                <TableCell>Start Date</TableCell>
                <TableCell>End Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map((task, index) => (
                <TableRow key={index}>
                  <TableCell>{task.projectId}</TableCell>
                  <TableCell>{task.projectName}</TableCell>
                  <TableCell>{task.taskDescription}</TableCell>
                  <TableCell>{task.assignee}</TableCell>
                  <TableCell>{task.startDate}</TableCell>
                  <TableCell>{task.endDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default AssignTask;
