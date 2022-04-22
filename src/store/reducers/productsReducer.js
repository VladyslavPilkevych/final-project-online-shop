import { GET_ALL_PRODUCTS } from '../actions/productsActions';

const initialValues = {
  products: [],
};

const productsReducer = (state = initialValues, { type, payload } = {}) => {
  switch (type) {
    case GET_ALL_PRODUCTS: {
      // console.log(payload);
      const tempState = { ...state, products: payload };
      return tempState;
    }

    default:
      return state;
  }
};

export default productsReducer;
