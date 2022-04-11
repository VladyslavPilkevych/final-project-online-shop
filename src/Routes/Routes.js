import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage';
import AuthorizationPage from "../pages/AuthorizationPage/AuthorizationPage";
import CartPage from "../pages/CartPage/CartPage";
import FavouritePage from "../pages/FavouritePage/FavouritePage";
import OneCardPage from "../pages/OneCardPage/OneCardPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/sign-in' element={<AuthorizationPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/favourite' element={<FavouritePage />} />
            <Route path='/card:id' element={<OneCardPage />} />
            <Route path='*' element={<Navigate to="/" />} />
        </Routes>
    )
}
export default AppRoutes;
