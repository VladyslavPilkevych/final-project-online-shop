import { TOGGLE_FILTERS_CATEGORIES } from '../actions/filtersCategoriesActions';

const initialValues = {
  isOpen: false,
};
const filtersCategoriesReducer = (state = initialValues, { type, payload } = {}) => {
  switch (type) {
    case TOGGLE_FILTERS_CATEGORIES: {
      return { ...state, isOpen: payload };
    }
    default:
      return state;
  }
};
export default filtersCategoriesReducer;
