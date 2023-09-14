import React from 'react';
import { FaUser } from 'react-icons/fa'; // Import user avatar icon from React Icons

const Comments = () => {
  // Sample comments data (replace with your actual data)
  const commentsData = [
    {
      id: 1,
      user: {
        name: 'Pavan',
        avatar: <FaUser />, // User avatar using React Icons
      },
      message: '!!!! Hi !!!!',
    },
    {
      id: 2,
      user: {
        name: 'Sunil',
        avatar: <FaUser />, // User avatar using React Icons
      },
      message: 'Hello, everyone! This is Sunil.',
    },
    {
      id: 3,
      user: {
        name: 'Somnath',
        avatar: <FaUser />, // User avatar using React Icons
      },
      message: 'Nice to be here. This is Somnath.',
    },
  ];

  return (
    <div className="content-main">
      <h2>Comments</h2>
      <div className="comments-list">
        {commentsData.map((comment) => (
          <div key={comment.id} className="comment">
            <div className="user-avatar">{comment.user.avatar}</div>
            <div className="user-info">
              <p className="user-name">{comment.user.name}</p>
              <p className="user-message">{comment.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
