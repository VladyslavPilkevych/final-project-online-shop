import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import AuthorizationPage from '../pages/AuthorizationPage/AuthorizationPage';
import CartPage from '../pages/CartPage/CartPage';
import FavouritePage from '../pages/FavouritePage/FavouritePage';
import LaptopsPage from '../pages/LaptopsPage/LaptopsPage';
import MonitorsPage from '../pages/MonitorsPage/MonitorsPage';
import PhonesPage from '../pages/PhonesPage/PhonesPage';
import HeadphonesPage from '../pages/HeadphonesPage/HeadphonesPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in" element={<AuthorizationPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/favourite" element={<FavouritePage />} />
      <Route path="/laptops" element={<LaptopsPage />} />
      <Route path="/monitors" element={<MonitorsPage />} />
      <Route path="/phones" element={<PhonesPage />} />
      <Route path="/headphones" element={<HeadphonesPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
export default AppRoutes;
