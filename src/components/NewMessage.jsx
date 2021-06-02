import { Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import 

const NewMessage = (message) => {
  // Message comes from PostMessageForm component (event.target.value)
  // const [message, setMessage] = useState('');
  const { user } = useContext(UserContext);

  return (
    <div>
      <Typography variant="caption">{user}</Typography>
      <Typography variant="caption">{new Date()}</Typography>
      <Typography>{message}</Typography>
    </div>
  );
};

export default NewMessage;
