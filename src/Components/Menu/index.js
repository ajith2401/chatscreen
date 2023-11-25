import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MailIcon from '@material-ui/icons/Mail';
import ChatIcon from '@material-ui/icons/Chat';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import EventIcon from '@material-ui/icons/Event';
import ReceiptIcon from '@material-ui/icons/Receipt';
import SettingsIcon from '@material-ui/icons/Settings';

const menuItems = [
  { name: 'Dashboard', icon: <DashboardIcon /> },
  { name: 'Mail', icon: <MailIcon /> },
  { name: 'Chat', icon: <ChatIcon /> },
  { name: 'Kanban', icon: <AssignmentIcon /> },
  { name: 'Contact', icon: <ContactMailIcon /> },
  { name: 'Calendar', icon: <EventIcon /> },
  { name: 'Invoices', icon: <ReceiptIcon /> },
  { name: 'Settings', icon: <SettingsIcon /> },
];
const useStyles = makeStyles((theme) => ({
  footer: {
    width: '345px',
    height: '82vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  menuItemContainer: {
    height: '545px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 0 0 10px',
  },
  menuItem: {
    width: '345px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '15px',
    color:"#A5A5A5",
    fontFamily: 'Cairo, sans-serif',
  },
  menuItemIcon: {
    width: '28px',
    marginRight: '10px',
  },
  banner: {
    width: '245px',
    height: '203px',
    borderRadius: '32px',
    backgroundImage: 'linear-gradient(180deg, rgba(160, 249, 255, 0.6) 0%, rgba(160, 249, 255, 0) 100%)',
    display: 'flex',
    flexDirection:"column",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
  },
  bannerText: {
    fontFamily: 'Cairo, sans-serif',
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '30px',
    letterSpacing: '0em',
    textAlign: 'left',
    marginTop: '10px',
    alignItems: 'center',
  },
}));

const Footer = () => {
  const classes = useStyles();


  return (
    <div className={classes.footer}>
      <div className={classes.menuItemContainer}>
      {menuItems.map((item, index) => (
        <div key={index} className={classes.menuItem}>
          <div className={classes.menuItemIcon}>{item.icon}</div>
          <Typography variant="h6">{item.name}</Typography>
        </div>
      ))}
    </div>
      <div className={classes.banner}>
        <Typography className={classes.bannerText}>
        Increase your
        </Typography>
        <Typography className={classes.bannerText}>
         work with kanban
        </Typography>
      </div>
      <Typography className={classes.bannerText}>
        Example Text Under Banner
      </Typography>
    </div>
  );
};

export default Footer;
