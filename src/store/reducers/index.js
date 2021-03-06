import { combineReducers } from 'redux';
import preloaderReducer from './preloaderReducer';
import productsReducer from './productsReducer';
import menuReducer from './menuReducer';
import userReducer from './userReducer';
import searchReducer from './searchReducer';
import cartReducer from './cartReducer';
import miniMenuReducer from './miniMenuReducer';
import filtersCategoriesReducer from './filtersCategoriesReducer';
import filterReducer from './filterReducer';

const reducer = combineReducers({
  loader: preloaderReducer,
  products: productsReducer,
  menu: menuReducer,
  miniMenu: miniMenuReducer,
  filtersCategories: filtersCategoriesReducer,
  filter: filterReducer,
  user: userReducer,
  search: searchReducer,
  cart: cartReducer,
});

export default reducer;
