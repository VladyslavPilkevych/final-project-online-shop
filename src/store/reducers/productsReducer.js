import { GET_ALL_PRODUCTS } from '../actions/productsActions';

const initialValues = {
  products: [],
};

const productsReducer = (action, state = initialValues) => {
  switch (action?.type) {
    case GET_ALL_PRODUCTS: {
      const tempState = action.payload;
      return { ...state, products: tempState };
    }

    default: return state;
  }
};

export default productsReducer;
