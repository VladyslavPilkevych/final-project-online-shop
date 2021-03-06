import {
  GET_ALL_PRODUCTS, GET_PRODUCT, NEW_ERROR, GET_PRODUCT_FAILED,
} from '../actions/productsActions';

const initialValues = {
  products: [],
  activeProduct: '',
  errorBoundaryString: null,
  error: '',
};

const productsReducer = (state = initialValues, { type, payload } = {}) => {
  switch (type) {
    case GET_ALL_PRODUCTS: {
      const tempState = { ...state, products: payload };
      return tempState;
    }
    case GET_PRODUCT: {
      const tempState = { ...state, activeProduct: payload };
      return tempState;
    }
    case NEW_ERROR: {
      const tempState = { ...state, errorBoundaryString: payload };
      return tempState;
    }
    case GET_PRODUCT_FAILED: {
      const tempState = { ...state, error: payload };
      return tempState;
    }

    default:
      return state;
  }
};

export default productsReducer;
