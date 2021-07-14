import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import Dashboard from "../BodyComponent/Dashboard/Dashboard";
import Blog from "../BodyComponent/Blog";
import Link from "../BodyComponent/Link";
import Form from "../BodyComponent/Form";
import Notification from "../BodyComponent/Notification";
import Logout from "../BodyComponent/Logout";
import { Box } from "@material-ui/core";
import { useStyles } from "./HeaderStyles";

export default function HeaderComponent() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();

  const handleDrawerOpen = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };
  return (
    <div>
      <Navbar handleDrawerOpen={handleDrawerOpen} />
      <SideNav
        mobileOpen={mobileOpen}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      {/* our routes */}
      <Box className={classes.wrapper}>
        <Switch>
          <Route exact path="/" render={() => <Dashboard />} />
          <Route exact path="/blog" render={() => <Blog />} />
          <Route exact path="/link" render={() => <Link />} />
          <Route exact path="/notification" render={() => <Notification />} />
          <Route exact path="/logout" render={() => <Logout />} />
          <Route exact path="/form" render={() => <Form />} />
        </Switch>
      </Box>
    </div>
  );
}
