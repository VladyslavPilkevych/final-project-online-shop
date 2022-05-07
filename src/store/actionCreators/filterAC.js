import {
  FILTER_PRODUCTS,
  CLEAR_FILTER,
  CLEAR_FILTER_PRODUCTS,
  FILTER_CATEGORY,
  FILTER_COLOR,
  FILTER_NAME,
  FILTER_BRAND,
  FILTER_BY_CATEGORY,
  SET_MIN_PRICE_SLIDER_VALUE,
  SET_MAX_PRICE_SLIDER_VALUE,
} from '../actions/filterActions';

// export const addNewFilters = (filtersArray) => {
//     return async (dispatch) => {
//     }
// };

export const clearFilter = () => ({ type: CLEAR_FILTER });
export const clearFilterProducts = () => ({ type: CLEAR_FILTER_PRODUCTS });
export const filterCategory = (data) => ({ type: FILTER_CATEGORY, payload: data });
export const filterColor = (data) => ({ type: FILTER_COLOR, payload: data });
export const filterName = (data) => ({ type: FILTER_NAME, payload: data });
export const filterBrand = (data) => ({ type: FILTER_BRAND, payload: data });
export const filterByCategory = (data) => ({ type: FILTER_BY_CATEGORY, payload: data });
export const setMinSliderValue = (data) => ({ type: SET_MIN_PRICE_SLIDER_VALUE, payload: data });
export const setMaxSliderValue = (data) => ({ type: SET_MAX_PRICE_SLIDER_VALUE, payload: data });

export const filterProducts = () => (dispatch, getState) => {
  const state = getState();
  let products = () => state.products.products;
  const { filters } = state;
  const {
    categories, color, name, brand,
  } = filters;

  //   const { min, max } = priceSliderValues;

  if (categories) products = products.filter((product) => product.categories === categories);
  if (color) products = products.filter((product) => product.color === color);
  if (name) products = products.filter((product) => product.name.includes(name));
  if (brand) products = products.filter((product) => product.brand === brand);

  dispatch({ type: FILTER_PRODUCTS, payload: products });
};
