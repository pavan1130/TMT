import React from "react";
import "../Styles/messages.css";
import NavigationBar from "./NavigationBar";
import Sidebar from "./Sidebar";

const Messages = () => {
  // Function to handle the click event when the button is clicked
  const startChatSession = () => {
    // Open the link in a new tab or window when the button is clicked
    window.open("https://glistening-faun-2f7fab.netlify.app/", "_blank");
  };

  return (
    <>
      <NavigationBar />
      <Sidebar />
      <div className="messages-container">
        {/* Button to start a chat session */}
        <button onClick={startChatSession} className="start-chat-button">
          Start Chat
        </button>
      </div>
    </>
  );
};

export default Messages;
