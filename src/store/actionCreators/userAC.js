import { SET_USER_TOKEN, GET_USER_DATA, REMOVE_USER_DATA } from '../actions/userActions';
import * as api from '../../api/api';

export const setUserTokenAC = (token) => ({ type: SET_USER_TOKEN, payload: token });
export const removeUserDataAC = () => ({ type: REMOVE_USER_DATA });

export const getUser = (token) => async (dispatch) => {
  const userData = await api.getUserData(token);
  dispatch({ type: GET_USER_DATA, payload: userData });
};
