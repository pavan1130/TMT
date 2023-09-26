import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import "../Styles/NavigationBar.css";
import { useUser } from "../components/UserContext";
const NavigationBar = () => {
  const { userData } = useUser();
  const [taskCounts, setTaskCounts] = useState({
    total: 0,
    inProgress: 0,
    incomplete: 0,
    issues: 0,
  });
  const userId = userData.user._id;
  const userName = userData.user.username;
  console.log(userId);
  console.log(userName);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/users/${userId}`
        );
        const data = await response.json();

        // Calculate counts for different statuses
        const total = data.user.tasks.length;
        const inProgress = data.user.tasks.filter(
          (task) => task.completionStatus === "progress"
        ).length;
        const incomplete = data.user.tasks.filter(
          (task) => !task.completionStatus
        ).length;
        const completed = data.user.tasks.filter(
          (task) => task.completionStatus === "completed"
        ).length;
        const issues = data.user.tasks.filter(
          (task) => task.completionStatus === "issue"
        ).length;

        setTaskCounts({ total, inProgress, incomplete, completed, issues });

        console.log("Total Tasks:", total);
        console.log("Total In Progress:", inProgress);
        console.log("Total Incomplete:", incomplete);
        console.log("Total Completed:", completed); // Added line
        console.log("Total Issues:", issues);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div className="navbar">
      <div className="search_bar">
        {" "}
        {/* Use Flexbox to center the search bar */}
      </div>
      <div className="user-icons">
        <h2 className="h2-navbar">{`Hello ${userName}`}</h2>
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
