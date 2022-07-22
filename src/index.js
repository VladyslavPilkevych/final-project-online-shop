import React from 'react';
import ReactDOM from 'react-dom/client';
// import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
// import FallbackError from './components/FallbackError/FallbackError';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <ErrorBoundary FallbackComponent={FallbackError}>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  // </ErrorBoundary>,
);
