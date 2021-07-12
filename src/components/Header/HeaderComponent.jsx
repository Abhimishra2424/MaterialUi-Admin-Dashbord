import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import SideNav from "./SideNav";

export default function HeaderComponent() {
  return (
    <div>
      <Navbar />
      <SideNav />
      {/* our routes */}
      <Switch>
        {/* <Route path="/" exact component={<Dashboard />} /> */}
        {/* <Route path="/" exact component={<Dashboard />} /> */}
        {/* <Route path="/blog" render={()=><Blog/>} /> */}
      </Switch>
    </div>
  );
}
