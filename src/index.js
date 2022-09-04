import "babel-polyfill";
import express from "express";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./client/reducers";
import createStore from "./helpers/createStore";
import renderer from "./helpers/renderer";
const app = express();
app.use(express.static("public")); // to pick the client side bundle as freely available dir
app.get("*", (req, res) => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));
  // some logic to init and load data in store
  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
