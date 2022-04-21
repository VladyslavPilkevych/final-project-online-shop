import { combineReducers } from 'redux';
import preloaderReducer from './preloaderReducer';
import productsReducer from './productsReducer';
import userReducer from './userReducer';

const reducer = combineReducers({
  loader: preloaderReducer,
  products: productsReducer,
  user: userReducer,
});

export default reducer;
