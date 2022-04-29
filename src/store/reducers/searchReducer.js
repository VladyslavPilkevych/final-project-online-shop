import { TOGGLE_SEARCH } from '../actions/searchActions';

const initialValues = {
  isOpenSearch: false,
};
const searchReducer = (state = initialValues, { type, payload } = {}) => {
  switch (type) {
    case TOGGLE_SEARCH: {
      // const tempState = { ...state, isOpenSearch: payload };

      return { ...state, isOpenSearch: payload };
    }
    default:
      return state;
  }
};
export default searchReducer;
