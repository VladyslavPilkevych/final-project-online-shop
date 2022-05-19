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

const initialValues = {
  filterByColor: [],
  filterByBrand: [],
  filterCategory: null,
  filterProducts: null,
  priceSliderValues: {
    min: 1,
    max: 100000,
  },
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
    case ADD_FILTER_COLOR:
      return { ...state, filterByColor: [...state.filterByColor, payload] };
    case REMOVE_FILTER_COLOR: {
      const index = state.filterByColor.findIndex((item) => item === payload);
      const newFilterByColor = [...state.filterByColor];
      newFilterByColor.splice(index, 1);
      return { ...state, filterByColor: newFilterByColor };
    }
    case FILTER_BRAND:
      return { ...state, filterByBrand: payload };
    case CLEAR_FILTER:
      return { ...state, filters: {} };
    case SET_MIN_PRICE_SLIDER_VALUE:
      return { ...state, priceSliderValues: { ...state.priceSliderValues, min: payload } };
    case SET_MAX_PRICE_SLIDER_VALUE:
      return { ...state, priceSliderValues: { ...state.priceSliderValues, max: payload } };
    default:
      return state;
  }
};
export default filterReducer;
