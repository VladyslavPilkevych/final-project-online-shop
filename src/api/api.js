import axios from 'axios';

const BASE_URL = 'https://skvonlineshop.herokuapp.com/api';
// const BASE_URL = 'http://localhost:5001/api';

const token = localStorage.getItem('token') || null;

const headers = {
  'Content-Type': 'application/json',
  Authorization: token,
};

// axios.create({
//     baseURL: "https://randomuser.me/api/",
//     responseType: "json"
//   });

export function getAllProductsApi() {
  return axios.get(`${BASE_URL}/products`);
}
export function getProductApi(itemNo) {
  return axios.get(`${BASE_URL}/products/${itemNo}`);
}

export function createNewCustomer(newCustomer) {
  return axios.post(`${BASE_URL}/customers`, newCustomer, { headers });
}

export function logInCustomer(loginValues) {
  return axios.post(`${BASE_URL}/customers/login`, loginValues, { headers });
}

export function getUserData(tokenUser) {
  return axios.get(`${BASE_URL}/customers/customer`, {
    headers: {
      'Content-Type': 'application/json',
      // eslint-disable-next-line quote-props
      Authorization: `${tokenUser}`,
    },
  });
}
export function createNewCart(newCart) {
  const tokens = JSON.parse(localStorage.getItem('token')) || null;
  return axios.post(`${BASE_URL}/cart`, newCart, { headers: { 'Content-Type': 'application/json', Authorization: tokens } });
}

export function addToCart(newCart, productId) {
  const tokens = JSON.parse(localStorage.getItem('token')) || null;
  return axios.put(`${BASE_URL}/cart/${productId}`, newCart, { headers: { 'Content-Type': 'application/json', Authentication: tokens } });
}

export function deleteCart() {
  const tokens = JSON.parse(localStorage.getItem('token')) || null;
  return axios.delete(`${BASE_URL}/cart`, { headers: { 'Content-Type': 'application/json', Authentication: tokens } });
}

export function getCart() {
  const tokens = JSON.parse(localStorage.getItem('token')) || null;
  return axios.get(`${BASE_URL}/cart`, { headers: { 'Content-Type': 'application/json', Authorization: tokens } });
}

export function createWishList(newCart) {
  const tokens = JSON.parse(localStorage.getItem('token')) || null;
  // eslint-disable-next-line quote-props
  return axios.post(`${BASE_URL}/wishlist`, newCart, { headers: { 'Content-Type': 'application/json', Authorization: tokens } });
}
