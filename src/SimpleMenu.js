import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import { actionTypes } from './reducer';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [,dispatch] = useStateValue();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout= ()=> {
    auth.signOut().then(() => {
            dispatch({type:actionTypes.Logout,user:null})     
      })
  }

  return (
    <div>
      <Button onClick={handleClick}>
            <MoreVertIcon />
      </Button>
      <Menu
         id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem disabled onClick={handleClose}>Profile</MenuItem>
        <MenuItem disabled onClick={handleClose}>Archieved</MenuItem>
        <MenuItem disabled onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  )
}
