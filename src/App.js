import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import AssignTask from "./components/Assigntask";
import ViewTask from "./components/ViewTask";
import Messages from "./components/Messages";
import Projects from "./components/Projects";
import Comments from "./components/Comments";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Project_Details from "./components/Project_Details";
import Teams from "./components/Teams";
import TeamDetails from "./components/TeamDetails";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/assign-task" element={<AssignTask />} />
        <Route path="/view-task" element={<ViewTask />} />
        {/* <Route path="/messages" element={<Messages />} /> */}
        <Route path="/comments" element={<Comments />} />

        <Route
          path="/projects/:projectId/:projectName/:projectDate"
          element={<Project_Details />}
        />
        <Route
          path="/teams/:projectId/:projectName"
          element={<TeamDetails />}
        />
      </Routes>
    </Router>
  );
}

export default App;
