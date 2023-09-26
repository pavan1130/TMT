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
  const startChatSession = () => {
    // Open the link in a new tab or window when the button is clicked
    window.open("https://glistening-faun-2f7fab.netlify.app/", "_blank");
  };
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
          <a onClick={startChatSession}>
            <ListItem button>
              <CustomListItemIcon>
                <FaEnvelope />
              </CustomListItemIcon>
              <ListItemText primary="Messages" />
            </ListItem>
          </a>
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
