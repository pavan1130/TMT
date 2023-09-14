import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import AssignTask from './components/Assigntask';
import ViewTask from './components/ViewTask';
import Messages from './components/Messages';
import Users from './components/Users';
import Settings from './components/Settings';
import Projects from './components/Projects';
import Others from './components/Others';
import Comments from './components/Comments'; 

function App() {
  return (
    <Router>
    <div className="App">
      <NavigationBar />
      <div className="content">
        <Sidebar />
      <Routes>
       
         
          <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/others" element={<Others />} />
            <Route path="/assign-task" element={<AssignTask />} />
            <Route path="/view-task" element={<ViewTask />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/comments" element={<Comments />} /> 
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
       
      </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;
