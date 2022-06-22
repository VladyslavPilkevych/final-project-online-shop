import {
  FILTER_PRODUCTS,
  CLEAR_FILTER,
  CLEAR_FILTER_PRODUCTS,
  FILTER_CATEGORY,
  FILTER_CATEGORY_PRODUCTS,
  ADD_FILTER_COLOR,
  REMOVE_FILTER_COLOR,
  FILTER_BRAND,
  SET_MIN_PRICE_SLIDER_VALUE,
  SET_MAX_PRICE_SLIDER_VALUE,
  NEW_FILTER_PRODUCTS,
  CLEAR_COLOR_FILTER,
  SET_PAGINATION_PAGE,
} from '../actions/filterActions';
import { getFilteredProductsApi } from '../../api/api';

export const filterCategory = (data) => ({ type: FILTER_CATEGORY, payload: data });
export const clearFilter = () => ({ type: CLEAR_FILTER });
export const clearFilterProducts = () => ({ type: CLEAR_FILTER_PRODUCTS });
export const addFilterColor = (data) => ({ type: ADD_FILTER_COLOR, payload: data });
export const removeFilterColor = (data) => ({ type: REMOVE_FILTER_COLOR, payload: data });
export const clearFilterColor = (data) => ({ type: CLEAR_COLOR_FILTER, payload: data });
export const filterBrand = (data) => ({ type: FILTER_BRAND, payload: data });
export const setMinSliderValue = (data) => ({ type: SET_MIN_PRICE_SLIDER_VALUE, payload: data });
export const setMaxSliderValue = (data) => ({ type: SET_MAX_PRICE_SLIDER_VALUE, payload: data });
export const setFilterPaginationPage = (data) => ({ type: SET_PAGINATION_PAGE, payload: data });

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

export const getCategorieProducts = (url) => async (dispatch) => {
  await getFilteredProductsApi(url)
    .then((rsp) => {
      if (rsp.status === 200) {
        dispatch({ type: FILTER_CATEGORY_PRODUCTS, payload: rsp.data.products });
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

export const newFilterProducts = (data) => async (dispatch) => {
  const dataFilters = [`?categories=${data.categories}`];
  if (data.color.length !== 0) {
    const dataColor = `&color=${data.color.join()}`;
    dataFilters.push(dataColor);
  }
  if (data.name && data.name.length !== 0) {
    const dataBrand = `&name=${data.name.join()}`;
    dataFilters.push(dataBrand);
  }
  if (data.currentPrice && data.currentPrice.min >= 1 && data.currentPrice.max <= 100000) {
    const dataMinPrice = `&minPrice=${data.currentPrice.min}`;
    dataFilters.push(dataMinPrice);
    const dataMaxPrice = `&maxPrice=${data.currentPrice.max}`;
    dataFilters.push(dataMaxPrice);
  }
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