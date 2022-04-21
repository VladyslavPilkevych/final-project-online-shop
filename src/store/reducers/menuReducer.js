import { TOGGLE_MENU } from '../actions/menuActions';

const initialValues = {
  isOpen: true,
};
const menuReducer = (state = initialValues, { type, payload } = {}) => {
  switch (type) {
    case TOGGLE_MENU: {
      const tempState = { ...state, isOpen: payload };
      return tempState;
    }
    default:
      return state;
  }
};
export default menuReducer;
