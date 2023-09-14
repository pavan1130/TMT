import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Home.css';
const Home = () => {
  return (
    <div className="content-main">
      <div className="home-header">
        <h2>Home</h2>
        </div>
        
      
      <div className="card-container">
        <Link to="/projects" className="card project-card">
          <p>Projects</p>
        </Link>
        <Link to="/others" className="card other-card">
          <p>Others</p>
        </Link>
        <Link to="/others" className="card other-card1">
          <p>Others</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
