import express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

app.get('/', (req, res) => {
  const content = renderToString(<Home/>); //  turn the components to HTML
  res.send(content);
})

app.listen(3000, () => {
  console.log("listening on 3000");
})

