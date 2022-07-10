import {
  FILTER_PRODUCTS,
  CLEAR_FILTER,
  CLEAR_FILTER_PRODUCTS,
  FILTER_CATEGORY,
  FILTER_CATEGORY_PRODUCTS,
  ADD_FILTER_COLOR,
  REMOVE_FILTER_COLOR,
  CLEAR_COLOR_FILTER,
  FILTER_BRAND,
  SET_MIN_PRICE_SLIDER_VALUE,
  SET_MAX_PRICE_SLIDER_VALUE,
  NEW_FILTER_PRODUCTS,
  SET_PAGINATION_PAGE,
} from '../actions/filterActions';

const initialValues = {
  filterByColor: [],
  filterByBrand: [],
  filterCategory: null,
  filterCategoryProducts: [],
  filterProducts: null,
  priceSliderValues: {
    min: null,
    max: null,
  },
  filterPaginationPage: null,
};
const filterReducer = (state = initialValues, { type, payload } = {}) => {
  switch (type) {
    case FILTER_PRODUCTS:
      return { ...state, filterProducts: payload };
    case NEW_FILTER_PRODUCTS:
      return { ...state, filterProducts: payload };
    case CLEAR_FILTER_PRODUCTS:
      return { ...state, filterProducts: null };
    case FILTER_CATEGORY:
      return { ...state, filterCategory: payload };
    case FILTER_CATEGORY_PRODUCTS:
      return { ...state, filterCategoryProducts: payload };
    case ADD_FILTER_COLOR:
      return { ...state, filterByColor: [...state.filterByColor, payload] };
    case REMOVE_FILTER_COLOR: {
      const index = state.filterByColor.findIndex((item) => item === payload);
      const newFilterByColor = [...state.filterByColor];
      newFilterByColor.splice(index, 1);
      return { ...state, filterByColor: newFilterByColor };
    }
    case CLEAR_COLOR_FILTER:
      return { ...state, filterByColor: [] };
    case FILTER_BRAND:
      return { ...state, filterByBrand: payload };
    case CLEAR_FILTER:
      return { ...state, filters: {} };
    case SET_MIN_PRICE_SLIDER_VALUE:
      return { ...state, priceSliderValues: { ...state.priceSliderValues, min: payload } };
    case SET_MAX_PRICE_SLIDER_VALUE:
      return { ...state, priceSliderValues: { ...state.priceSliderValues, max: payload } };
    case SET_PAGINATION_PAGE:
      return { ...state, filterPaginationPage: payload };
    default:
      return state;
  }
};
export default filterReducer;
