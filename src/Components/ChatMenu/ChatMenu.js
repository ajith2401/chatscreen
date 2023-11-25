import React from 'react';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Typography, makeStyles } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';

const useStyles = makeStyles((theme) => ({
  chatMenus: {
    width: '340px',
    height: '80vh',
    top: '150px',
    left: '395px',
    position: 'absolute',
    border: '1px solid #ccc',
    borderRadius: '14px',  
    padding:"10px"
  },
  group: {
    width: "340px",
    height: "35vh",
    left: "395px" ,
    justifyContent: 'center',
    alignItems: 'center',
  },
  groupItem: {
    width: "340px",
    left: "395px" 
  },
  recentMessages: {
    width: '340px',
    height: '45vh',
    overflowY: 'auto', 
  },
  recentMessageItem: {
    width: '340px', 
    display:"flex",
    flexDirection:"row",
    gap:"10px",
    padding:"0"
  },
  newBatch: {
    width: '46px',
    borderRadius: "14px",
    height: "24px",
    background: '#6418C3',
    color: '#fff', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: "absolute",
    top: "0",
    right: "10px",
  },
  name: {
    fontFamily: 'Cairo, sans-serif',
    fontSize: '18px',
    fontWeight: '700',
    lineHeight: '34px',
    letterSpacing: '0em',
    textAlign: 'left',
  },
  body: {
    width: '201px',
    fontFamily: 'Cairo, sans-serif',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '19px',
    letterSpacing: '0em',
    textAlign: 'left',
  },
  avatar:{
    width: "59px",
    height: "50px",
    borderRadius:" 14px",
    marginLeft:"20px"
  }
}));

const ChatMenusComponent = () => {
  const classes = useStyles();
  const grpArray = ["Kleon Team","UI/UX Community","Weekly Meet","We Are Designer","Future Boss Group"
]

const recentMessages = [
    {
      name: 'Benny Kenn',
      message: 'Hei, dont forget to clear server cache!',
      isNew: true
    },
    {
      name: 'Margaretha',
      message: 'I remember that project due is tomorrow.'
    },
    {
      name: 'Samsudin',
      message: 'Ok sir. I will fix it as soon as possible'
    },
    {
      name: 'Bella Poarch',
      message: 'I dont’t know where that files saved dude.',
      isNew: true
    },
    {
      name: 'Peter John',
      message: 'Maybe we should schedule that meeting',
      isNew: true
    }
  ];
  

  return (
    <Box className={classes.chatMenus}>
      <Box className={classes.group}>
      <Typography>Group</Typography> 
        <Box className={classes.groupItem}> 
         <List>
          {grpArray.map((group, index) => (
            <Box key={index} className={classes.groupItem}>
              <ListItem>
                <ListItemIcon>
                  <GroupIcon /> 
                </ListItemIcon>
                <ListItemText primary={group} />
              </ListItem>
            </Box>
          ))}
        </List> 
        </Box>
      </Box>
      <Box className={classes.recentMessages}>
      <Typography>RECENT MESSAGE</Typography>
       <List>
       {recentMessages.map((message, index) => (
         <ListItem key={index} className={classes.recentMessageItem}>
           <ListItemAvatar>
             <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpkNcRBQ5BaqXi-RlKX7jFeA91WvcLlISI3TszrIuS8Q&s' className={classes.avatar} />
           </ListItemAvatar>
           <ListItemText>
             <Box>
               <Typography className={classes.name} variant="h6">
                 {message.name}
               </Typography>
               {message.isNew && (
                 <Box className={classes.newBatch}>NEW</Box>
               )}
             </Box>
             <Typography className={classes.body} variant="body1">
               {message.message}
             </Typography>
           </ListItemText>
         </ListItem>
       ))}
     </List>
      
      </Box>
    </Box>
  );
};

export default ChatMenusComponent;
