import React from "react";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import BookIcon from "@material-ui/icons/Book";
import PostAddIcon from "@material-ui/icons/PostAdd";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { NavLink } from "react-router-dom";
import { useStyles } from "./HeaderStyles";
import ContactMailIcon from '@material-ui/icons/ContactMail';

export default function SideNavData({ handleDrawerClose }) {
  const classes = useStyles();
  const listItemData = [
    { label: "Dashborad", link: "/", icon: <DashboardIcon /> },
    { label: "Blog Post", link: "/blog", icon: <BookIcon /> },
    { label: "Add Link", link: "/link", icon: <PostAddIcon /> },
    {
      label: "Notifications",
      link: "/notification",
      icon: <NotificationsActiveIcon />,
    },
    { label: "Logout", link: "/logout", icon: <ExitToAppIcon /> },
    { label: "Forms", link: "/form", icon: <ContactMailIcon /> },
  ];
  return (
    <List>
      {listItemData.map((item, i) => (
        <Button
          size="small"
          className={classes.navButton}
          onClick={() => handleDrawerClose()}
          key={i}
        >
          <ListItem
            exact
            component={NavLink}
            to={item.link}
            className={classes.navlinks}
            activeClassName={classes.activeNavlinks}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </ListItem>
        </Button>
      ))}
    </List>
  );
}
