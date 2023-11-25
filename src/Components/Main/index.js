import React from 'react';
import NavBar from '../NavBar';
import Menu from '../Menu';
import ChatHeader from '../ChatHead';
import { Box } from '@material-ui/core';


const ChatScreen = () => {
  return (
    <Box> 
      <NavBar />
      <Menu />
      <ChatHeader/>
    </Box>
  );
};

export default ChatScreen;
