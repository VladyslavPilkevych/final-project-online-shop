import { PRODUCTS_SEARCH, TOGGLE_SEARCH } from '../actions/searchActions';

const initialValues = {
  isOpenSearch: false,
  searchedProducts: [],
};
const searchReducer = (state = initialValues, { type, payload } = {}) => {
  switch (type) {
    case TOGGLE_SEARCH: {
      return { ...state, isOpenSearch: payload };
    }
    case PRODUCTS_SEARCH: {
      return { ...state, searchedProducts: payload };
    }
    default:
      return state;
  }
};
export default searchReducer;
