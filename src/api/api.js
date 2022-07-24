import axios from 'axios';

const BASE_URL = 'https://skvonlineshop.herokuapp.com/api';

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `${JSON.parse(localStorage.getItem('token'))}`;
  return config;
});

export function getAllProductsApi() {
  return api.get(`${BASE_URL}/products`);
}
export function getProductApi(itemNo) {
  return api.get(`${BASE_URL}/products/${itemNo}`);
}
export function getFilteredProductsApi(params) {
  return api.get(`${BASE_URL}/products/filter${params}`);
}

export function createNewCustomer(newCustomer) {
  return api.post(`${BASE_URL}/customers`, newCustomer);
}

export function logInCustomer(loginValues) {
  return api.post(`${BASE_URL}/customers/login`, loginValues);
}

export function getUserData() {
  return api.get(`${BASE_URL}/customers/customer`);
}
export function createNewCart(newCart) {
  return api.post(`${BASE_URL}/cart`, newCart);
}

export function addToCart(productId, newCart) {
  return api.put(`${BASE_URL}/cart/${productId}`, newCart);
}

export function deleteCart() {
  return api.delete(`${BASE_URL}/cart`);
}

export function getCart() {
  return api.get(`${BASE_URL}/cart`);
}

export function deleteFromCart(productId) {
  return api.delete(`${BASE_URL}/cart/${productId}`);
}

export function editCart(productId, updatedCart) {
  return api.put(`${BASE_URL}/cart/${productId}`, updatedCart);
}

export function decreaseProductQuantity(productId) {
  return api.delete(`${BASE_URL}/cart/product/${productId}`);
}

export function createWishList(newCart) {
  return api.post(`${BASE_URL}/wishlist`, newCart);
}

export function searchProductsApi(searchPhrases) {
  return api.post(`${BASE_URL}/products/search`, searchPhrases);
}
