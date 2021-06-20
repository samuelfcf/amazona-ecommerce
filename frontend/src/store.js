import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import { productDetailsReducer, productListReducer } from './reducers/productReducer';

const initalState = {
  cart: {
    cartItems: localStorage.getItem('cartItems') 
                ? JSON.parse(localStorage.getItem('cartItems')) 
                : []
  }
};

// reducer -> especifica como o estado da aplicação irá mudar de acordo com a action que foi enviada para o store.
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store -> armazena de forma centralizada todos os estados da aplicação.
const store = createStore(
  reducer, 
  initalState, 
  composeEnhancer(applyMiddleware(thunk)) 
  );

export default store;