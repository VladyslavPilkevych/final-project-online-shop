import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import AboutProductPage from '../pages/AboutProductPage/AboutProductPage';
import AuthorizationPage from '../pages/AuthorizationPage/AuthorizationPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import CartPage from '../pages/CartPage/CartPage';
import FavouritePage from '../pages/FavouritePage/FavouritePage';
import FilterPage from '../pages/FilterPage/FilterPage';
import CatogoryPage from '../pages/CatogoryPage/CatogoryPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:itemNo" element={<AboutProductPage />} />
      <Route path="/sign-in" element={<AuthorizationPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/favourite" element={<FavouritePage />} />
      <Route path="/filter" element={<FilterPage />} />
      <Route path="/category" element={<CatogoryPage />} />
      <Route path="/category/:categories" element={<CatogoryPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
export default AppRoutes;
