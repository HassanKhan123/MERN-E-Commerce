import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  productsListReducer,
  productDetailsReducer,
} from './reducers/productReducers';

const reducers = combineReducers({
  productList: productsListReducer,
  productDetails: productDetailsReducer,
});
const initialState = {};
const middlewares = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
