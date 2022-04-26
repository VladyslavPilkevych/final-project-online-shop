import { GET_ALL_PRODUCTS } from '../actions/productsActions';
import { getAllProductsApi } from '../../api/api';

export const getAllProducts = () => async (dispatch) => {
  await getAllProductsApi()
    .then((rsp) => {
      //   console.log(rsp);
      if (rsp.status === 200) {
        dispatch({ type: GET_ALL_PRODUCTS, payload: rsp.data });
      }
    })
    .catch((err) => {
      console.log(err);
    });
  //   const { data } = await fetch('http://localhost:3001/items', {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then((rsp) => rsp.json());
};
