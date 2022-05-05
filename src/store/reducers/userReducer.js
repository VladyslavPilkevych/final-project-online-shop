import { SET_USER_TOKEN, GET_USER_DATA, REMOVE_USER_DATA } from '../actions/userActions';

const initialValues = {
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  token: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null,
};

const userReducer = (state = initialValues, { type, payload } = {}) => {
  switch (type) {
    case SET_USER_TOKEN: {
      localStorage.setItem('token', JSON.stringify(payload));
      return { ...state, token: payload };
    }
    case GET_USER_DATA: {
      localStorage.setItem('user', JSON.stringify(payload));
      return { ...state, user: payload };
    }
    case REMOVE_USER_DATA: {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      return { ...state, user: null, token: null };
    }
    default:
      return state;
  }
};

export default userReducer;
