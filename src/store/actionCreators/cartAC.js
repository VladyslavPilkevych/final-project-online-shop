/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  CLEAR_CART,
  TOGGLE_CART,
  CREATE_CART,
  GET_CART,
  ON_HANDLE_CART,
  EDIT_CART,
} from '../actions/cartActions';
import * as api from '../../api/api';

export const toggleCart = (value) => ({ type: TOGGLE_CART, payload: value });

export const onHandleCart = (productId) => async (dispatch, getState) => {
  const state = getState();
  if (state.user.user !== null) {
    if (state.cart.dataCart !== null) {
      const data = await api.addToCart(productId);
      dispatch({ type: ADD_TO_CART, payload: data.data.products });
    } else {
      await api.createNewCart(productId);
      const newCart = {
        products: [
          {
            product: productId,
            cartQuantity: 1,
          },
        ],
      };
      dispatch({ type: CREATE_CART, payload: newCart });
    }
  } else {
    localStorage.setItem('cart', JSON.stringify(productId));
  }
};

export const createCart = (productId) => async (dispatch) => {
  const cartData = await api.createNewCart(productId);
  dispatch({ type: CREATE_CART, payload: cartData });
};
export const getCart = (dataCart) => async (dispatch) => {
  const cartData = await api.getCart(dataCart);
  dispatch({ type: GET_CART, payload: cartData.data.products });
};
export const addToCart = (productId) => async (dispatch) => {
  const data = await api.addToCart(productId);
  dispatch({ type: ADD_TO_CART, payload: data });
};
export const editCart = (productId, quantity) => async (dispatch, getState) => {
  const state = getState();
  const tempState = state.cart.dataCart.find((item) => item.product._id === productId).cartQuantity;
  if (quantity > tempState) {
    const cartData = await api.editCart(productId);
    const updatedCart = {
      products: [
        {
          product: productId,
          cartQuantity: quantity,
        },
      ],
    };
    dispatch({ type: EDIT_CART, payload: cartData.data.products });
  } else {
    const cartData = await api.decreaseProductQuantity(productId);
    dispatch({ type: EDIT_CART, payload: cartData.data.products });
  }
};

export const deleteFromCart = (productId) => async (dispatch) => {
  console.log(productId);
  const data = await api.deleteFromCart(productId);
  dispatch({ type: DELETE_FROM_CART, payload: data });
};

export const deleteAllCart = () => async (dispatch) => {
  const data = await api.deleteCart();
  const responseDelete = await data.status;
  if (responseDelete === 200) {
    dispatch({ type: CLEAR_CART, payload: data });
  }
};
