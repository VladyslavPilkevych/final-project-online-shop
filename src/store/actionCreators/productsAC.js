import { GET_ALL_PRODUCTS, GET_PRODUCT, NEW_ERROR } from '../actions/productsActions';
import { getAllProductsApi, getProductApi } from '../../api/api';

export const addNewError = (data) => ({ type: NEW_ERROR, payload: data });
export const getAllProducts = () => async (dispatch) => {
  await getAllProductsApi()
    .then((rsp) => {
      if (rsp.status === 200) {
        dispatch({ type: GET_ALL_PRODUCTS, payload: rsp.data });
      }
    })
    .catch((err) => {
      // console.log(err);
      // throw new Error(err.name);
      dispatch(addNewError(err));
    });
};
export const getProduct = (itemNo) => async (dispatch) => {
  await getProductApi(itemNo)
    .then((rsp) => {
      if (rsp.status === 200) {
        dispatch({ type: GET_PRODUCT, payload: rsp.data });
      }
    })
    .catch((err) => {
      // console.log(err);
      // throw err;
      dispatch(addNewError(err));
    });
};
