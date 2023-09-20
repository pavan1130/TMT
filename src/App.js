import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import AssignTask from "./components/Assigntask";
import ViewTask from "./components/ViewTask";
import Messages from "./components/Messages";
import Users from "./components/Users";
import Settings from "./components/Settings";
import Projects from "./components/Projects";
import Others from "./components/Others";
import Comments from "./components/Comments";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Project_Details from "./components/Project_Details";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/others" element={<Others />} />
        <Route path="/assign-task" element={<AssignTask />} />
        <Route path="/view-task" element={<ViewTask />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
        <Route
          path="/projects/:projectId/:projectName/:projectDate"
          element={<Project_Details />}
        />
      </Routes>
    </Router>
  );
}

export default App;
