import { TOGGLE_PRELOADER } from '../actions/preloaderActions';

const initialValues = {
  isLoading: false,
};

const preloaderReducer = (state = initialValues, { type, payload } = {}) => {
  switch (type) {
    case TOGGLE_PRELOADER: {
      return { isLoading: payload };
    }
    default: return state;
  }
};

export default preloaderReducer;
