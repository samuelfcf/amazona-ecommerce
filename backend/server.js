import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import userRouter from './routers/userRouter.js';

const app = express();

//connect to mongoose database/
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

app.get('/api/products/:id', (request, response) => {
  const product = data.products.find( x => x._id === request.params.id);
  if(product) {
    response.send(product)
  } else {
    response.status(404).send({message: 'Product not found'})
  }
});

app.get('/api/products', (request, response) => {
  response.send(data.products)
});

app.use('/api/users', userRouter);

app.get('/', (request, response) => {
  response.send("Server is ready!")
});

app.use((err, request, response, next) => {
  response.status(500).send({message: err.message});
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.clear();
  console.log("server on port 5000");
  
})