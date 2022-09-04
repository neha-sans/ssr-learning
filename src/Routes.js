import React from "react";
import { Route, Switch, NavLink, Link } from "react-router-dom";
import Home from "./client/components/Home.js";
import UserList from "./client/components/UserList.js";

export default () => (
  <div>
    <Route exact path={"/"} component={Home} />
    <Route path="/users" component={UserList} />
  </div>
);
