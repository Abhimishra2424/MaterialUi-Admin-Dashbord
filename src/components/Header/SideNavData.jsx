import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import BookIcon from "@material-ui/icons/Book";
import PostAddIcon from "@material-ui/icons/PostAdd";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export default function SideNavData() {
  const listItemData = [
    { label: "Dashborad", icon: <DashboardIcon /> },
    { label: "Blog Post", icon: <BookIcon /> },
    { label: "Post Add", icon: <PostAddIcon /> },
    { label: "Notifications", icon: <NotificationsActiveIcon /> },
    { label: "Logout", icon: <ExitToAppIcon /> },
  ];
  return (
    <List>
      {listItemData.map((item, i) => (
        <ListItem key={i}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText>{item.label}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
}
