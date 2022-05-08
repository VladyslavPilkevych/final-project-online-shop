/* eslint-disable consistent-return */
import {
  PUT_IN_CART,
  DELETE_FROM_CART,
  CLEAR_CART,
  TOGGLE_CART,
  CREATE_CART,
} from '../actions/cartActions';
import * as api from '../../api/api';

export const toggleCart = (value) => ({ type: TOGGLE_CART, payload: value });

export const createCart = (newCart) => async (dispatch) => {
  const cartData = await api.createNewCart(newCart);
  dispatch({ type: CREATE_CART, payload: cartData });
};
export const addToCart = (newCart) => async (dispatch) => {
  const data = await api.createNewCart(newCart);
  dispatch({ type: PUT_IN_CART, payload: data });
};

// export const addToCart = (id) => async (dispatch) => {
//   const data = await fetch('').then((res) => res.json());
//   data.forEach((item) => {
//     if (item.id === id) {
//       return dispatch({ type: PUT_IN_CART, payload: item });
//     }
//   });
// };
export const removeFromCart = (id) => ({ type: DELETE_FROM_CART, payload: id });

export const clearCart = () => ({ type: CLEAR_CART, payload: null });
