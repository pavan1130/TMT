import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaTasks,
  FaEye,
  FaEnvelope,
  FaUsers,
  FaCog,
  FaSignOutAlt,
  FaMoon,
} from "react-icons/fa";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import "../Styles/Sidebar.css";

const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Add code to toggle dark mode styles
  };

  const CustomListItemIcon = styled(ListItemIcon)({
    minWidth: "40px",
  });

  return (
    <div className={`sidebar ${darkMode ? "dark" : ""}`}>
      <div className="sidebar_header">
        <br />
        <Typography variant="h6" color="black">
          Task Management Collaboration Tool
        </Typography>
        <br />
        <Divider />
        <br />
        <List>
          <ListItem component={Link} to="/home" button>
            <CustomListItemIcon>
              <FaHome />
            </CustomListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem component={Link} to="/assign-task" button>
            <CustomListItemIcon>
              <FaTasks />
            </CustomListItemIcon>
            <ListItemText primary="Assign Task" />
          </ListItem>
          <ListItem component={Link} to="/view-task" button>
            <CustomListItemIcon>
              <FaEye />
            </CustomListItemIcon>
            <ListItemText primary="View Task" />
          </ListItem>
          <ListItem component={Link} to="/messages" button>
            <CustomListItemIcon>
              <FaEnvelope />
            </CustomListItemIcon>
            <ListItemText primary="Messages" />
          </ListItem>
          <ListItem component={Link} to="/users" button>
            <CustomListItemIcon>
              <FaUsers />
            </CustomListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
          <ListItem component={Link} to="/settings" button>
            <CustomListItemIcon>
              <FaCog />
            </CustomListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </div>

      <div className="bottom-buttons">
        <Button
          className="logout-button"
          id="custom-logout-button"
          variant="contained"
          color="secondary"
        >
          <CustomListItemIcon>
            <FaSignOutAlt />
          </CustomListItemIcon>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
