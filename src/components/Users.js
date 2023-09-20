import React from "react";
import NavigationBar from "./NavigationBar";
import Sidebar from "./Sidebar";

const Users = () => {
  return (
    <>
      <NavigationBar />
      <Sidebar />
      <div className="content-main">
        <h2>Users</h2>
        <p>This is the Users page content.</p>
      </div>
    </>
  );
};

export default Users;
