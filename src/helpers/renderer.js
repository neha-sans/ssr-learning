import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import Routes from "../Routes";
export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        {/*
     context here is used to handle redirect
      and error handler it is somehow related to react*/}
        <Routes />
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
