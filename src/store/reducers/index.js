import { combineReducers } from 'redux';
import preloaderReducer from './preloaderReducer';
import productsReducer from './productsReducer';
import menuReducer from './menuReducer';

const reducer = combineReducers({
  loader: preloaderReducer,
  products: productsReducer,
  menu: menuReducer,
});

export default reducer;
