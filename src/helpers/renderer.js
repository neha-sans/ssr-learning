import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { StaticRouter } from "react-router-dom";
import routes from "../Routes";
export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        {/*
     context here is used to handle redirect
      and error handler it is somehow related to react*/}
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  ); //  turn the components to HTML
  return `
   <html>
     <head></head>
    <body>
      <div id="root">${content}</div> 
      <script src="bundle.js"></script>
    </body>
   </html>
  `;
};
