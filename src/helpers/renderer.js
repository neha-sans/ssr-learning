import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../Routes";
export default (req) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      {/*
     context here is used to handle redirect
      and error handler it is somehow related to react*/}
      <Routes />
    </StaticRouter>
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