import { TOGGLE_CART } from '../actions/cartActions';

const initialValues = {
  isOpenCart: false,
};
const cartReducer = (state = initialValues, { type, payload } = {}) => {
  switch (type) {
    case TOGGLE_CART: {
      return { ...state, isOpenCart: payload };
    }
    default:
      return state;
  }
};
export default cartReducer;
