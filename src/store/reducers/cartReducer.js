import {
  TOGGLE_CART, PUT_IN_CART, DELETE_FROM_CART, CLEAR_CART, CREATE_CART,
} from '../actions/cartActions';

const initialState = {
  inCart: null,
  isOpenCart: false,
  newCart: [],
};

const cartReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case TOGGLE_CART: {
      return { ...state, isOpenCart: payload };
    }
    case CREATE_CART: {
      return { ...state, newCart: [...state.newCart, payload] };
    }
    case PUT_IN_CART: {
      if (state.inCart !== null) {
        return { ...state, inCart: [...state.inCart, payload] };
      }
      return { ...state, inCart: [payload] };
    }
    case DELETE_FROM_CART: {
      const newFavouriteData = [...state.inCart];
      return { ...state, inCart: newFavouriteData };
    }
    case CLEAR_CART: {
      return { ...state, inCart: null };
    }
    default:
      return state;
  }
};
export default cartReducer;
