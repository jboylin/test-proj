import React from 'react';

const ChatRoom = (props) => {
  return (
    <div className="chat-room-container">
      <h1 className="room-name">Room: The Lads</h1>
      <div className="messages-container">
        <p>All messages would be displayed here</p>
      </div>
    </div>
  );
};

export default ChatRoom;
