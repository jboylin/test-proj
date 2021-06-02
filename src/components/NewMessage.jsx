import React, { useContext } from 'react';

const NewMessage = (message) => {
  // Message comes from PostMessageForm component (event.target.value)
  //   const [message, setMessage] = useState('');
  const { user } = useContext(UserContext);

  return (
    <div>
      <p>{user}</p>
      <p>{new Date()}</p>
      <p>{message}</p>
    </div>
  );
};

export default NewMessage;
