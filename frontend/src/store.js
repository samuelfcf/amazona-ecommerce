import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import data from './data';

const initalState = {};

// reducer -> especifica como o estado da aplicação irá mudar de acordo com a action que foi enviada para o store.
const reducer = (state, action) => {
  
  return {products: data.products} ;
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store -> armazena de forma centralizada todos os estados da aplicação.
const store = createStore(
  reducer, 
  initalState, 
  composeEnhancer(applyMiddleware(thunk)) 
  );

export default store;