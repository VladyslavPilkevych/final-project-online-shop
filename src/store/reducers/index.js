import { combineReducers } from 'redux';
import preloaderReducer from './preloaderReducer';
import productsReducer from './productsReducer';

const reducer = combineReducers({
  loader: preloaderReducer,
  products: productsReducer,
});

export default reducer;
