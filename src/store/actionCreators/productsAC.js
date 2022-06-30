import { GET_ALL_PRODUCTS, GET_PRODUCT } from '../actions/productsActions';
import { getAllProductsApi, getProductApi } from '../../api/api';

export const getAllProducts = () => async (dispatch) => {
  await getAllProductsApi()
    .then((rsp) => {
      if (rsp.status === 200) {
        dispatch({ type: GET_ALL_PRODUCTS, payload: rsp.data });
      }
    })
    .catch((err) => {
      console.log(err);
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
      console.log(err);
    });
};
