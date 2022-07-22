import { TOGGLE_SEARCH, PRODUCTS_SEARCH } from '../actions/searchActions';
import { searchProductsApi } from '../../api/api';
import { addNewError } from './productsAC';

export const toggleSearch = (value) => ({ type: TOGGLE_SEARCH, payload: value });

export const searchProducts = (searchPhrases) => async (dispatch) => {
  await searchProductsApi(searchPhrases)
    .then((rsp) => {
      if (rsp.status === 200) {
        dispatch({ type: PRODUCTS_SEARCH, payload: rsp.data });
      }
    })
    .catch((err) => {
      dispatch(addNewError(err));
      // console.log(err);
      // console.log(searchPhrases);
    });
};
