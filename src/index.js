import "babel-polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./client/reducers";
import createStore from "./helpers/createStore";
import renderer from "./helpers/renderer";
import routes from "./Routes";
const app = express();
app.use(express.static("public")); // to pick the client side bundle as freely available dir
app.get("*", (req, res) => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));
  const promoises = matchRoutes(routes, req.path).map(({ route }) =>
    route.loadData ? route.loadData(store) : null
  );
  Promise.all(promoises).then(() => {
    res.send(renderer(req, store));
  });
  // some logic to init and load data in store
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
