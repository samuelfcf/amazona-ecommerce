import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import productListReducer from './reducers/productReducer';

const initalState = {};

// reducer -> especifica como o estado da aplicação irá mudar de acordo com a action que foi enviada para o store.
const reducer = combineReducers({
  productList: productListReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store -> armazena de forma centralizada todos os estados da aplicação.
const store = createStore(
  reducer, 
  initalState, 
  composeEnhancer(applyMiddleware(thunk)) 
  );

export default store;