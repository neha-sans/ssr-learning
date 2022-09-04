import React from "react";
import { Route, Switch, NavLink, Link } from "react-router-dom";
import Home from "./client/components/Home.js";

export default () => (
  <div>
    <Route exact path={"/"} component={Home} />
  </div>
);
