import React from "react";
import { BrowserRouter } from 'react-router-dom';
import data from "./data";

import Product from "./components/Product";

const App = () => {
  return (
    <BrowserRouter >
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            amazona
          </a>
        </div>

        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>

      <Route path='/product/:id' component={ProductScree} />
      <Route path='/' exact component={HomeScreen} />
      <main>
        <div className="row center">
          {data.products.map((product) => (
            <Product key={product._id} product={product}/>
          ))}
        </div>
      </main>

      <footer className="row center">All rigth reserved.</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
