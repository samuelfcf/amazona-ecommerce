import express from 'express';

import data from './data.js';

const app = express();

app.get('/api/products', (request, response) => {
  response.send(data.products)
})

app.get('/', (request, response) => {
  response.send("Server is ready!")
});

app.listen(5000, () => {
  console.clear();
  console.log("server on port 5000");
  
})