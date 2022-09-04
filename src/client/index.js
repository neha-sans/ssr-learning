import "babel-polyfill";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import Routes from "../Routes.js";
import reducers from "./reducers/index.js";
import React from "react";

// start point for client side app
const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
// override the existing html skeleton  render by server and bind the events etc..
// Which is called hydration
// Use `ReactDOM.hydrade`, instead of `render`
