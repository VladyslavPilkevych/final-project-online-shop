import axios from 'axios';

const BASE_URL = 'https://skvonlineshop.herokuapp.com/api';

const token = localStorage.getItem('token') || null;

const headers = {
  'Content-Type': 'application/json',
  // eslint-disable-next-line quote-props
  'Authorization': `${token}`,
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

export function getUserData(userId) {
  return axios.get(`${BASE_URL}/customers/${userId}`, { headers });
}

export function searchProductsApi(searchPhrases) {
  return axios.post(`${BASE_URL}/products/search`, searchPhrases, { headers });
}
