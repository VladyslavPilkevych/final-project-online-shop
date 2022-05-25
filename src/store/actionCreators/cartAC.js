/* eslint-disable consistent-return */
import {
  PUT_IN_CART,
  DELETE_FROM_CART,
  CLEAR_CART,
  TOGGLE_CART,
  CREATE_CART,
  GET_CART,
} from '../actions/cartActions';
import * as api from '../../api/api';

export const toggleCart = (value) => ({ type: TOGGLE_CART, payload: value });

export const createCart = (dataCart) => async (dispatch, getState) => {
  const cartData = await api.createNewCart(dataCart);
  dispatch({ type: CREATE_CART, payload: cartData });
};
export const getCart = (dataCart) => async (dispatch) => {
  const cartData = await api.getCart(dataCart);
  dispatch({ type: GET_CART, payload: cartData });
};
export const addToCart = (dataCart) => async (dispatch) => {
  const data = await api.createNewCart(dataCart);
  dispatch({ type: PUT_IN_CART, payload: data });
};

// export const addToWishList = (newCart) => async (dispatch) => {
//   const data = await api.createWishList(newCart);
//   // dispatch({ type: PUT_IN_CART, payload: data });
// };

// export const addToCart = (id) => async (dispatch) => {
//   const data = await fetch('').then((res) => res.json());
//   data.forEach((item) => {
//     if (item.id === id) {
//       return dispatch({ type: PUT_IN_CART, payload: item });
//     }
//   });
// };
export const removeFromCart = (id) => ({ type: DELETE_FROM_CART, payload: id });

export const clearCart = () => async (dispatch) => {
  const result = await api.deleteCart();
  dispatch({ type: CLEAR_CART, payload: null });
};
