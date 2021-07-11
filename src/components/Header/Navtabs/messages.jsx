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
import MessageIcon from "@material-ui/icons/Message";
import { useStyles } from "../HeaderStyles";

export default function Messages() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dropDownData = [
    { label: "Alex", desc: "likes ypur post" },
    { label: "Alex", desc: "likes ypur post" },
    { label: "Alex", desc: "likes ypur post" },
    { label: "Alex", desc: "likes ypur post" },
  ];

  return (
    <Box>
      <IconButton
        aria-controls="Messages"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <Badge badgeContent={3} color="secondary">
          <MessageIcon />
        </Badge>
      </IconButton>
      <Menu
        id="Messages"
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
