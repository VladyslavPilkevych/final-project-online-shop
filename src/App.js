/* eslint-disable react/prop-types */
import React from 'react';
import './App.scss';
import { ErrorBoundary } from 'react-error-boundary';
import AppRoutes from './Routes/Routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MiniCart from './components/MiniCart/MiniCart';
import { FallbackError } from './components/FallbackError/FallbackError';

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={FallbackError}>
        <Header />
        <MiniCart />
        <AppRoutes />
        <Footer />
      </ErrorBoundary>
    </div>
  );
}
export default App;
