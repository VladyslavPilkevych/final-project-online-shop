/* eslint-disable consistent-return */
import {
  PUT_IN_CART,
  DELETE_FROM_CART,
  CLEAR_CART, TOGGLE_CART,
} from '../actions/cartActions';

export const toggleCart = (value) => ({ type: TOGGLE_CART, payload: value });

export const addToCart = (id) => async (dispatch) => {
  const data = await fetch('').then((res) => res.json());
  data.forEach((item) => {
    if (item.id === id) {
      return dispatch({ type: PUT_IN_CART, payload: item });
    }
  });
};
export const removeFromCart = (id) => ({ type: DELETE_FROM_CART, payload: id });

export const clearCart = () => ({ type: CLEAR_CART, payload: null });
