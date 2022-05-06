import { ADD_NEW_FILTER, CLEAR_FILTER } from '../actions/filterActions';

const initialValues = {
  filters: [],
};
const filterReducer = (state = initialValues, { type, payload } = {}) => {
  switch (type) {
    case ADD_NEW_FILTER: {
    //   return { ...state, filters: [...state.filters, payload] };
      return { ...state, filters: payload };
    }
    case CLEAR_FILTER: {
      return { ...state, filters: [] };
    }
    default:
      return state;
  }
};
export default filterReducer;
