import { combineReducers } from 'redux';
import preloaderReducer from './preloaderReducer';
import productsReducer from './productsReducer';
import menuReducer from './menuReducer';
import userReducer from './userReducer';
import searchReducer from './searchReducer';
import cartReducer from './cartReducer';

const reducer = combineReducers({
  loader: preloaderReducer,
  products: productsReducer,
  menu: menuReducer,
  user: userReducer,
  search: searchReducer,
  cart: cartReducer,
});

export default reducer;
