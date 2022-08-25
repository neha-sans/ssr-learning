import express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();
app.use(express.static('public'));  // to pick the client side bundle as freely available dir
app.get('/', (req, res) => {
  const content = renderToString(<Home />); //  turn the components to HTML
  const html = `
   <html>
     <head></head>
    <body>
      <div id="root">${content}</div> 
      <script src="bundle.js"></script>
    </body>
   </html>
  `
  res.send(html);
})

app.listen(3000, () => {
  console.log("listening on 3000");
})

