const express = require('express');

const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/Home').default;

const app = express();

app.get('/', (req, res) => {
  const content = renderToString(<Home/>); //  turn the components to HTML
  res.send(content);
})

app.listen(3000, () => {
  console.log("listening on 3000");
})
