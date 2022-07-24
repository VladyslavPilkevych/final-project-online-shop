import {
  TOGGLE_CART, ADD_TO_CART, DELETE_FROM_CART, CLEAR_CART, CREATE_CART, GET_CART, EDIT_CART,
} from '../actions/cartActions';
import { REMOVE_USER_DATA } from '../actions/userActions';

const initialState = {
  isOpenCart: false,
  dataCart: [],
};

const cartReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case TOGGLE_CART: {
      return { ...state, isOpenCart: payload };
    }
    case CREATE_CART: {
      return { ...state, dataCart: [...state.dataCart, payload] };
    }
    case GET_CART: {
      return { ...state, dataCart: payload };
    }
    case ADD_TO_CART: {
      if (state.dataCart.length === 0) {
        if (state.user) {
          // console.log(state.user);
        }
        return { ...state, dataCart: payload };
      }
      return { ...state, dataCart: payload };
    }
    case DELETE_FROM_CART: {
      return { ...state, dataCart: payload.data.products };
    }
    case CLEAR_CART: {
      return { ...state, dataCart: [] };
    }
    case EDIT_CART: {
      const newState = [...state.dataCart];
      const index = newState.findIndex((item) => item.product._id === payload.product._id);
      console.log('index', index);
      newState[index].cartQuantity = payload.cartQuantity;
      console.log('newState', newState);
      return { ...state, dataCart: newState };
    }
    case REMOVE_USER_DATA: {
      return { ...state, dataCart: [] };
    }
    default:
      return state;
  }
};
export default cartReducer;
