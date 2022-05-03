import { SET_USER_TOKEN, GET_USER_DATA } from '../actions/userActions';
import * as api from '../../api/api';

export const setUserTokenAC = (token) => ({ type: SET_USER_TOKEN, payload: token });

export const getUser = (customerNo) => async (dispatch) => {
  const userData = api.getUserData(customerNo).then((rsp) => rsp.json());
  console.log('userData', userData);
  dispatch({ type: GET_USER_DATA, payload: userData });
};
