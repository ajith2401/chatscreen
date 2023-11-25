import { makeStyles, InputBase, Typography, Avatar, Menu, MenuItem, IconButton, Badge, colors, Box } from '@material-ui/core';
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import CheckIcon from '@material-ui/icons/Check';
import FolderIcon from '@material-ui/icons/Folder';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import LanguageIcon from '@material-ui/icons/Language';

import { withStyles } from '@material-ui/core/styles';

const CustomBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#5ecfff',
    color: 'white', // Adjust text color if needed
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
    appBar: {
        width: "100%",
        height: '120px',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      },
      navbar: {
        width: '1575px',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      header: {
        width: '345px',
      },
      menuIcon: {
        width: '46px',
        height: '46px',
        borderRadius: '8px',
        color:"#343437"
      },
      logo:{
        width: "149.73px",
        height: "54px",
        borderRadius: "14px"
      },
      companyLogo: {
        width: '149.73px',
        height: '54px',
        borderRadius: '14px',
      },
      companyName: {
        width: '80.14px',
        height: '22.26px',
        color:"#343437"
      },
      searchBox: {
        width: '491px',
        height: '68px',
        borderRadius: '46px',
        background: '#FAFAFA',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      },
      searchIcon: {
        width: '28px',
        height: '27.99px',
        position: 'absolute',
        padding:"10px",
        color: '#6418C3',
      },
      searchText: {
        width: '81px',
        height: '30px',
        fontFamily: 'Cairo',
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '30px',
        letterSpacing: '0em',
        textAlign: 'left',
        color: '#AAAAAA',
        marginLeft: '60px',
      },
      otherMenu: {
        width: '105px',
        height: '30px',
        fontFamily: 'Cairo',
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '30px',
        letterSpacing: '0em',
        textAlign: 'left',
        color: '#6418C3',
      },
  iconsContainer: {
    width: '231px',
    height: '44px',
    borderRadius: '14px',
  },
  icon: {
    width: '39px',
    height: '43px',
    borderRadius: '14px',
  },
  profileBox: {
    width: '223px',
    height: '57px',
    borderRadius: '14px',
    margin:"0 20px",
    display:"flex"
  },
  avatar:{
    width: "57px",
    height: "57px",
    borderRadius: "14px",
  },
  profile:{
    width: "142px",
    height: "55px",
  }

}));

const NavBar = () => {
  const classes = useStyles();
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);

  const handleProfileMenuOpen = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileAnchorEl(null);
  };

  const renderProfileMenu = (
    <Menu
      anchorEl={profileAnchorEl}
      open={Boolean(profileAnchorEl)}
      onClose={handleProfileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleProfileMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleProfileMenuClose}>Logout</MenuItem>
    </Menu>
  );

  return ( 
    <Box sx={{ flexGrow: 1 }} className={classes.appBar}>
    <AppBar position="static" color='white'>
    <Toolbar >
    <div className={classes.header}>
    <div className={classes.logo}>
       <IconButton>
      
       </IconButton>
       <Typography variant='h3' className={classes.companyName}>Kleon</Typography>
       </div>
       <div className={classes.menuIcon}>
       <IconButton> <Menu/> </IconButton>
       </div>
</div>
<Box className={classes.navbar}>
        <div className={classes.searchBox}>
          <SearchIcon className={classes.searchIcon} />
          <InputBase className={classes.searchText} placeholder="Search…"/>
        </div>
        <Typography component="a" href="#" variant="body1" className={classes.otherMenu}>
        Other Menus
      </Typography>

      
        <div className={classes.iconsContainer}>
          <IconButton className={classes.icon}>
          <CustomBadge badgeContent={3}>
              <NotificationsIcon />
            </CustomBadge>
          </IconButton>
          <IconButton className={classes.icon}>
            <CardGiftcardIcon />
          </IconButton>
          <IconButton className={classes.icon}>
            <CheckIcon />
          </IconButton>
          <IconButton className={classes.icon}>
            <FolderIcon />
          </IconButton>
        </div>

        {/* Language Selector */}
        <IconButton>
          <LanguageIcon />
        </IconButton>

        {/* Profile */}
        <div className={classes.profileBox}>
          <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpkNcRBQ5BaqXi-RlKX7jFeA91WvcLlISI3TszrIuS8Q&s' className={classes.avatar}></Avatar>
          <IconButton onClick={handleProfileMenuOpen} className={classes.profile}>
          <Typography>Franklin Jr</Typography>
            <ArrowDropDownIcon />
          </IconButton>
          {renderProfileMenu}
        </div>
        </Box>
      </Toolbar>
    </AppBar>
    </Box>
  );
};

export default NavBar;
