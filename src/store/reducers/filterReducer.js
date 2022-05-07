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

const initialValues = {
  filters: {},
  filterProducts: null,
  priceSliderValues: {
    min: 100,
    max: 1500,
  },
};
const filterReducer = (state = initialValues, { type, payload } = {}) => {
  switch (type) {
    case FILTER_PRODUCTS:
      return { ...state, filterProducts: payload };
    case CLEAR_FILTER_PRODUCTS:
      return { ...state, filterProducts: null };
    case FILTER_CATEGORY:
      return { ...state, filters: { ...state.filters, category: payload } };
    case FILTER_COLOR:
      return { ...state, filters: { ...state.filters, color: payload } };
    case FILTER_NAME:
      return { ...state, filters: { ...state.filters, name: payload } };
    case FILTER_BRAND:
      return { ...state, filters: { ...state.filters, brand: payload } };
    case FILTER_BY_CATEGORY:
      return { ...state, filters: { ...state.filters, categories: payload } };
    case CLEAR_FILTER:
      return { ...state, filters: {} };
    case SET_MIN_PRICE_SLIDER_VALUE:
      return { ...state, sliderValues: { ...state.priceSliderValues, min: payload } };
    case SET_MAX_PRICE_SLIDER_VALUE:
      return { ...state, sliderValues: { ...state.priceSliderValues, max: payload } };
    default:
      return state;
  }
};
export default filterReducer;
