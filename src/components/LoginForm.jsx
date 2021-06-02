// context file & dir created
// react router dom created
// user context instantiated in context
// context wrapping all elements in app.jsx as all will need access to the user and their details
// user context is set in app.jsx with usestate and provided to LoginForm
// user details are displayed here
// the user details are hard coded for now

import React from "react";
import { UserContext } from "../contexts/User";
import { useContext } from "react";

const LoginForm = () => {
  const user = useContext(UserContext);
  return (
    // in here will be a form where user context can be set

    <div>
      <h1>Hello {user.username}</h1>
      <img src={user.avatar_url} alt={user.username} />
      <p>Continue to the chatroom</p>
    </div>
  );
};

export default LoginForm;
