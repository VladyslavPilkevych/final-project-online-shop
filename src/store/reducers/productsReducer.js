import { GET_ALL_PRODUCTS, GET_PRODUCT } from '../actions/productsActions';

const initialValues = {
  products: [],
  activeProduct: '',
};

const productsReducer = (state = initialValues, { type, payload } = {}) => {
  switch (type) {
    case GET_ALL_PRODUCTS: {
      return { ...state, products: payload };
    }
    case GET_PRODUCT: {
      const tempState = { ...state, activeProduct: payload };
      return tempState;
    }

    default:
      return state;
  }
};

export default productsReducer;
