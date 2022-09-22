import "babel-polyfill";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import routes from "../Routes.js";
import reducers from "./reducers/index.js";
import React from "react";
import { renderRoutes } from "react-router-config";
// start point for client side app
const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
// override the existing html skeleton  render by server and bind the events etc..
// Which is called hydration
// Use `ReactDOM.hydrade`, instead of `render`
