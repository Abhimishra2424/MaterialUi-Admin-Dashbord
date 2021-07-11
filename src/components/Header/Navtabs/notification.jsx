import React, { useState } from "react";
import {
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  IconButton,
  Badge,
  Avatar,
  List,
} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useStyles } from "../HeaderStyles";

export default function Notification() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dropDownData = [
    { label: "Alex", desc: "likes your post" },
    { label: "sac", desc: "likes your post" },
    { label: "vik", desc: "likes your  post" },
    { label: "fiza", desc: "likes your post" },
  ];

  return (
    <Box>
      <IconButton
        aria-controls="Notification"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <Badge badgeContent={4} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Menu
        id="Notification"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <List className={classes.navlist}>
          {dropDownData.map((item, i) => (
            <ListItem key={i} onClick={handleClose}>
              <ListItemIcon>
                <Avatar className={classes.ulAvater}>
                  {item.label[0].toUpperCase()}
                </Avatar>
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                secondary={item.desc}
              ></ListItemText>
            </ListItem>
          ))}
        </List>
      </Menu>
    </Box>
  );
}
