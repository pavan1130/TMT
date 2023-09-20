import React from "react";
import NavigationBar from "./NavigationBar";
import Sidebar from "./Sidebar";

const Settings = () => {
  return (
    <>
      <NavigationBar />
      <Sidebar />
      <div className="content-main">
        <h2>Settings</h2>
        <p>This is the Settings page content.</p>
      </div>
    </>
  );
};

export default Settings;
