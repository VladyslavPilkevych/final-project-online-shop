import axios from 'axios';

const BASE_URL = 'https://skvonlineshop.herokuapp.com/api';

// axios.create({
//     baseURL: "https://randomuser.me/api/",
//     responseType: "json"
//   });

export async function getAllProducts() {
//   const allProducts = [];
  const response = await axios
    .get(`${BASE_URL}/products`)
    .then((res) => res)
    .catch((err) => {
      /* Do something with error, e.g. show error to user */
      console.log(err.message);
    });
  //   console.log('data', data);
  //   console.log('status', status);
  //   console.log('response', response);
  if (response.status !== 200) {
    console.log('Server is not response', response.status);
  }
  return response.data;
}
