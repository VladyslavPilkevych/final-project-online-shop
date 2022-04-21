import { combineReducers } from 'redux';
import preloaderReducer from './preloaderReducer';
import productsReducer from './productsReducer';
import menuReducer from './menuReducer';
import userReducer from './userReducer';

const reducer = combineReducers({
  loader: preloaderReducer,
  products: productsReducer,
  menu: menuReducer,
  user: userReducer,
});

export default reducer;
