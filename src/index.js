import express from 'express';
import renderHome from './helpers/renderer';

const app = express();
app.use(express.static('public'));  // to pick the client side bundle as freely available dir
app.get('/', (req,res) => {
  res.send(renderHome())
})

app.listen(3000, () => {
  console.log("listening on 3000");
})

