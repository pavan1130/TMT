import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import "../Styles/NavigationBar.css";
const NavigationBar = () => {
  return (
    <div className="navbar">
      <div className="search_bar">
        {" "}
        {/* Use Flexbox to center the search bar */}
      </div>
      <div className="user-icons">
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="Remy Sharp"
            src="https://cdn4.iconfinder.com/data/icons/green-shopper/1068/user.png"
          />
        </Stack>
      </div>
    </div>
  );
};

export default NavigationBar;
