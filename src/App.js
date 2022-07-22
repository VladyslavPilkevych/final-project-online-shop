/* eslint-disable react/prop-types */
import React from 'react';
import './App.scss';
// import { ErrorBoundary } from 'react-error-boundary';
import AppRoutes from './Routes/Routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MiniCart from './components/MiniCart/MiniCart';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
// import { myErrorHandler } from './components/FallbackError/myErrorHandler';

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
// export default withErrorBoundary(App, {
//   fallback: <div>Something went wrong</div>,
// });
export default App;
