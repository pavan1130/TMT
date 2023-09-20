import React from "react";
import messagesData from "./messages.json";
import "../Styles/messages.css";
import NavigationBar from "./NavigationBar";
import Sidebar from "./Sidebar";
const Messages = () => {
  return (
    <>
      <NavigationBar />
      <Sidebar />
      <div className="messages-container">
        <h2>Messages</h2>
        <ul className="message-list">
          {messagesData.map((message, index) => (
            <li key={index} className="message-item">
              <div className="user-profile">
                <img
                  src={message.userProfile}
                  alt={`User ${message.username}`}
                />
              </div>
              <div className="message-content">
                <h3 className="username">{message.username}</h3>
                <p className="message-text">{message.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Messages;
