import {
  FILTER_PRODUCTS,
  CLEAR_FILTER,
  CLEAR_FILTER_PRODUCTS,
  FILTER_CATEGORY,
  ADD_FILTER_COLOR,
  REMOVE_FILTER_COLOR,
  FILTER_BRAND,
  SET_MIN_PRICE_SLIDER_VALUE,
  SET_MAX_PRICE_SLIDER_VALUE,
  NEW_FILTER_PRODUCTS,
} from '../actions/filterActions';
import { getFilteredProductsApi } from '../../api/api';

export const filterCategory = (data) => ({ type: FILTER_CATEGORY, payload: data });
export const clearFilter = () => ({ type: CLEAR_FILTER });
export const clearFilterProducts = () => ({ type: CLEAR_FILTER_PRODUCTS });
export const addFilterColor = (data) => ({ type: ADD_FILTER_COLOR, payload: data });
export const removeFilterColor = (data) => ({ type: REMOVE_FILTER_COLOR, payload: data });
export const filterBrand = (data) => ({ type: FILTER_BRAND, payload: data });
export const setMinSliderValue = (data) => ({ type: SET_MIN_PRICE_SLIDER_VALUE, payload: data });
export const setMaxSliderValue = (data) => ({ type: SET_MAX_PRICE_SLIDER_VALUE, payload: data });

export const filterProducts = (data) => async (dispatch) => {
  await getFilteredProductsApi(data)
    .then((rsp) => {
      if (rsp.status === 200) {
        dispatch({ type: FILTER_PRODUCTS, payload: rsp.data.products });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const newFilterProducts = (data) => async (dispatch) => {
  const dataFilters = [`?categories=${data.categories}`];
  if (data.color.length !== 0) {
    const dataColor = `&color=${data.color.join()}`;
    dataFilters.push(dataColor);
  }
  if (data.name && data.name.length !== 0) {
    console.log(data.name);
    const dataBrand = `&name=${data.name.join()}`;
    dataFilters.push(dataBrand);
  }
  if (data.currentPrice && data.currentPrice.min >= 1 && data.currentPrice.max <= 100000) {
    console.log(data.currentPrice);
    // const dataMinPrice = `&currentPrice>${data.currentPrice.min}`;
    // dataFilters.push(dataMinPrice);
    // const dataMaxPrice = `&currentPrice<${data.currentPrice.max}`;
    // dataFilters.push(dataMaxPrice);
  }
  console.log(dataFilters);
  await getFilteredProductsApi(dataFilters.join(''))
    .then((rsp) => {
      if (rsp.status === 200) {
        dispatch({ type: NEW_FILTER_PRODUCTS, payload: rsp.data.products });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
// export const filterProducts = () => (dispatch, getState) => {
//   const state = getState();
//   let products = () => state.products.products;
//   const { filters } = state;
//   const {
//     color, name, brand,
//   } = filters;

//   //   const { min, max } = priceSliderValues;

//   if (color) products = products.filter((product) => product.color === color);
//   if (name) products = products.filter((product) => product.name.includes(name));
//   if (brand) products = products.filter((product) => product.brand === brand);

//   dispatch({ type: FILTER_PRODUCTS, payload: products });
// };
