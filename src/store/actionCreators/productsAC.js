// import { toast } from 'react-toastify';
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
      dispatch(addNewError(err));
      // .catch(() => {
      // toast.error('Something went wrong');
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
      dispatch(addNewError(err));
      // .catch(() => {
      //   toast.error('Something went wrong');
    });
};
