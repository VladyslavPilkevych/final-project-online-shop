import { TOGGLE_SEARCH, PRODUCTS_SEARCH } from '../actions/searchActions';
import { searchProductsApi } from '../../api/api';

export const toggleSearch = (value) => ({ type: TOGGLE_SEARCH, payload: value });

export const searchProducts = (searchPhrases) => async (dispatch) => {
  await searchProductsApi(searchPhrases)
    .then((rsp) => {
      if (rsp.status === 200) {
        dispatch({ type: PRODUCTS_SEARCH, payload: rsp.data });
      }
    })
    .catch((err) => {
      console.log(err);
      // console.log(searchPhrases);
    });
};
