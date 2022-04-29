import { TOGGLE_MINI_MENU } from '../actions/miniMenuActions';

const initialValues = {
  isOpenMiniMenu: false,
};
const miniMenuReducer = (state = initialValues, { type, payload } = {}) => {
  switch (type) {
    case TOGGLE_MINI_MENU: {
      return { ...state, isOpenMiniMenu: payload };
    }
    default:
      return state;
  }
};
export default miniMenuReducer;
