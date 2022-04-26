// import { TOGGLE_CART } from '../actions/cartActions';

// const initialValues = {
//   isOpenCart: false,
// };
// const cartReducer = (state = initialValues, { type, payload } = {}) => {
//   switch (type) {
//     case TOGGLE_CART: {
//       return { ...state, isOpenCart: payload };
//     }
//     default:
//       return state;
//   }
// };
// export default cartReducer;
import {
  TOGGLE_CART,
  PUT_IN_CART,
  DELETE_FROM_CART,
  CLEAR_CART,
} from '../actions/cartActions';

const initialState = {
  inCart: null,
  isOpenCart: false,
};

const cartReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case TOGGLE_CART: {
      return { ...state, isOpenCart: payload };
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
