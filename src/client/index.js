import React from "react";
import ReactDOM from "react-dom";
import Routes from "../Routes.js";
import { BrowserRouter } from "react-router-dom";
// start point for client side app

console.log("Client side rendering");
ReactDOM.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById("root")
);
// override the existing html skeleton  render by server and bind the events etc..
// Which is called hydration
// Use `ReactDOM.hydrade`, instead of `render`
