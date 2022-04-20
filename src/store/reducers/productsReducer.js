import { GET_ALL_PRODUCTS } from '../actions/productsActions';

const initialValues = {
  products: [],
};

const productsReducer = (action, state = initialValues) => {
  switch (action?.type) {
    case GET_ALL_PRODUCTS:
      return { ...state, products: action.payload };

    default: return state;
  }
};

export default productsReducer;
