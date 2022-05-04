import { GET_ALL_PRODUCTS, GET_PRODUCT } from '../actions/productsActions';

const initialValues = {
  products: [],
  activeProduct: '',
};

const productsReducer = (state = initialValues, { type, payload } = {}) => {
  switch (type) {
    case GET_ALL_PRODUCTS: {
      // console.log(payload);
      const tempState = { ...state, products: payload };
      return tempState;
    }
    case GET_PRODUCT: {
      // console.log(payload);
      const tempState = { ...state, activeProduct: payload };
      return tempState;
    }

    default:
      return state;
  }
};

export default productsReducer;
