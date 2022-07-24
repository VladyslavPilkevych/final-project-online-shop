import React from 'react';
import './App.scss';
import AppRoutes from './Routes/Routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MiniCart from './components/MiniCart/MiniCart';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary />
      <Header />
      <MiniCart />
      <AppRoutes />
      <Footer />
    </div>
  );
}
export default App;
