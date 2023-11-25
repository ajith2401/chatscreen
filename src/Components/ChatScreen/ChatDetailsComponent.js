import React, { useRef } from 'react';
import { Avatar, Box, Button, Divider, Grid, List, ListItem, ListItemText, Paper, TextField, Typography, makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import AttachmentIcon from '@material-ui/icons/Attachment';
import MoodIcon from '@material-ui/icons/Mood';
import UndoIcon from '@material-ui/icons/Undo';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import GroupIcon from '@material-ui/icons/Group'

const useStyles = makeStyles((theme) => ({
  chatDetails: {
    height: '80vh',
    width: "700px",
    position: 'absolute',
    border: '1px solid #ccc',
    borderRadius: '14px',
    top: "149px",
    left: "774px",
    padding:"10px"
  },
  chatTitles: {
    display: "flex",
    flexDirection: "row",
    height: '90px',
    borderRadius: '14px',
  },
  chatInput: {
    height: '92px',
   
  },
  chatActions: {
    width: '288px',
    height: '32px',
    top: '1006px',
    left: '804px',
    borderRadius: '2px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin:"5px",
    gap:"10px",
  },
  rightActions: {
    display: 'flex',
    alignItems: 'center',
    margin:"5px",
    justifyContent: 'flex-end',
    gap:"10px",
  },
  actionIcons: {
    fontSize: '24px',
    height: '24px',
  },
  actionIconsUndo: {
    fontSize: '24px',
    height: '24px',
    transform: 'rotate(-180deg)'
  },
  sendButton: {
    width: '150px',
    height: '40px',
    borderRadius: '14px',
    background: 'linear-gradient(90deg, #6418C3 50%, #AB18C3 100%)',
    
  },
  customInput: {
    width: '1036px',
    height: '92px',
    borderRadius: '14px',
    border: '2px solid #000000',
    position: 'absolute',
    boxSizing: 'border-box', 
  },
  avatar:{
    width:" 58px",
    height:" 58px",
    borderRadius: "14px"
  },
  messageText: {
    width: '764px',
    height: '125px',
    borderRadius: '14px 14px 14px 0px',
    fontFamily: 'Cairo, sans-serif',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '0px',
    textAlign: 'left',
  },
  name: {
    width: '80px',
    height: '20px',
    top: '295px', 
    left: '909px', 
    a: 'Cairo',
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '20px',
    letterSpacing: '0px',
    textAlign: 'left',
  },
  chatBubble: {
    maxWidth: '70%',
    margin: '8px 0',
    padding: '10px',
    borderRadius: '8px',
    wordWrap: 'break-word',
    '&.sent': {
      background: 'linear-gradient(90deg, #6418C3 50%, #AB18C3 100%)',
      color: 'white',
      marginLeft: 'auto',
    },
    '&.received': {
      backgroundColor: 'lightgrey',
      color: 'black',
      marginRight: 'auto',
    },
  },
  title:{
    zIndex:10
  },
  groupIcon: {
    width: '24px',
    height: '24px',
    position: 'absolute',
    top: '175px',
    left: '804px',
  },
  groupText: {
    width: '330px', // Adjust width as needed
    height: 'auto',
    position: 'absolute',
    top: '175px',
    left: '830px', // Adjust as needed
    color: '#000000', // Set your desired text color
  },
  peopleLayout: {
    width: '168px',
    height: '40px',
    position: 'absolute',
    top: '174px',
    display: 'flex',
    alignItems: 'center',
  },
  avatarTitle: {
    width: '40px',
    height: '40px',
    position: 'relative',
    marginLeft: theme.spacing(1), // Adjust as needed for spacing between avatars
    border: '2px solid #FFFFFF',
  },

}));

const ChatDetailsComponent = () => {
  const messagesContainerRef = useRef();
  const classes = useStyles();
  const avatarImages = [
    'avatar1.jpg',
    'avatar2.jpg',
    'avatar3.jpg',
    'avatar4.jpg',
    'avatar5.jpg',
  ];

  const messages = [
    {
      name: 'Kevin Julios',
      messageText:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto b',
      timestamp: new Date('Sunday, October 24, 2020 04:30:00').toISOString(),
    },
    {
      name: 'Alice Smith',
      messageText: 'Hi there! How are you?',
      timestamp: new Date('2023-11-24T10:30:00Z').toISOString(),
    },
    {
      name: 'John Doe',
      messageText: 'Hey, what are you up to?',
      timestamp: new Date('2023-11-23T15:45:00Z').toISOString(),
    },
    {
      name: 'you',
      messageText: 'This chat app looks great!',
      timestamp: new Date('2023-11-22T08:20:00Z').toISOString(),
    },
    {
      name: 'David Brown',
      messageText: 'Is the meeting still on for today?',
      timestamp: new Date('2023-11-21T18:00:00Z').toISOString(),
    },
    {
      name: 'you',
      messageText: 'This chat app looks great!',
      timestamp: new Date('2023-11-22T08:20:00Z').toISOString(),
    },
  ];
  return (
    <Box>

    <Box className={classes.chatDetails}>
    <List style={{ height: '68vh', overflow: 'auto' ,justifyContent:"center"}} variant={Paper} ref={messagesContainerRef} gap="10px"
    padding="0">
  {messages.flat().map((msg, index) => (
    msg.messageText ?   
    <ListItem key={index} >
    {msg.name !=="you" ? (
      <Grid container justifyContent="flex-start" display={'flex'} flexDirection={'row'} gap={"5px"}>
      <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpkNcRBQ5BaqXi-RlKX7jFeA91WvcLlISI3TszrIuS8Q&s' className={classes.avatar}></Avatar>
      <ListItem
      key={index}
      alignItems="flex-start"
      className={
        msg.name === 'you' ? classes.chatBubble + ' sent' : classes.chatBubble + ' received'
      }
    >
      <Box py={1}>
      <Typography variant="subtitle2" sx={{
       fontFamily: 'Cairo, sans-serif',
        fontSize: '16px',
        fontWeight: 1000,
        lineHeight: '20px',
        letterSpacing: '0px',
        textAlign: 'left',
      }}>
        {msg.name}
      </Typography>
        <Typography variant="body1">{msg.messageText}</Typography>
      </Box>
    </ListItem>
    </Grid>
     
        ) : (
          <Grid container justifyContent="flex-end" display={'flex'} flexDirection={'row'}>
            <ListItemText
            primary={msg.messageText}
            className={
              msg.name === 'you' ? classes.chatBubble + ' sent' : classes.chatBubble + ' received'
            }
          />
          <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpkNcRBQ5BaqXi-RlKX7jFeA91WvcLlISI3TszrIuS8Q&s' className={classes.avatar}></Avatar>
          </Grid>
         
        )
        } 
    </ListItem> : null
))}
  </List>
  <Divider/>

      {/* Send Button */}
      <Grid item >
      <TextField
        id="outlined-basic-email"
        fullWidth
        label="Type your message..."
        variant="outlined"
        name="messageText"
        sx={{
          backgroundColor: "#6418C3"
        }}
      />
    </Grid>
    <Grid container direction="row" justifyContent="center">
    <Grid item xs={6}>
      <Box className={classes.chatActions}>
        <UndoIcon className={classes.actionIcons} />
        <UndoIcon className={classes.actionIconsUndo} />
        <TextFormatIcon className={classes.actionIcons} />
        <FormatBoldIcon className={classes.actionIcons} />
        <FormatItalicIcon className={classes.actionIcons} />
        <FormatBoldIcon className={classes.actionIcons} />
      </Box>
    </Grid>
    <Grid item xs={6} >
      <Box className={classes.rightActions}>
        <MoodIcon className={classes.actionIcons} />
        <AttachmentIcon className={classes.actionIcons} />
        <Button  variant="contained" className={classes.sendButton} >
          <SendIcon /> Send
        </Button>
      </Box>
    </Grid>
  </Grid>
      
    </Box>
    </Box>
  );
};

export default ChatDetailsComponent;
