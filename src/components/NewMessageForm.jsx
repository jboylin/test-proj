import React, { useContext, useState } from "react";

const NewMessageForm = () => {
  const { user } = useContext(UserContext);
  const [newMessage, setNewMessage] = useState({
    user: user.username,
    messageText: "",
  });
  return (
    <div className="NewMessageForm">
      <form className="NewMessageForm__Form" onSubmit={handleMessageSubmit}>
        <input></input>
      </form>
    </div>
  );
};

export default NewMessageForm;
