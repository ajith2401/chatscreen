import React from 'react';
import ChatMenusComponent from '../ChatMenu/ChatMenu';
import ChatDetailsComponent from '../ChatScreen/ChatDetailsComponent';

const ChatHeader = () => {
  return (
    <div>
     <ChatMenusComponent/>
     <ChatDetailsComponent/>
    </div>
  );
};

export default ChatHeader;
