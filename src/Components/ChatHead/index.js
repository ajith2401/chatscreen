import React from 'react';
import { makeStyles } from '@material-ui/core';
import ChatMenusComponent from '../ChatMenu/ChatMenu';
import ChatDetailsComponent from '../ChatScreen/ChatDetailsComponent';

const useStyles = makeStyles((theme) => ({
  header: {
    width: "1475px",
    top: "149px",
    left:" 395px",
    paddingBottom:"50px",
  },
}));

const ChatHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
     <ChatMenusComponent/>
     <ChatDetailsComponent/>
    </div>
  );
};

export default ChatHeader;
