import { render } from '@testing-library/react';
import SearchedProductsPage from './SearchedProductsPage';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store';

function Component() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <SearchedProductsPage />
      </Provider>
    </BrowserRouter>
  );
}

describe('Snapshot SearchedProductsPage should render', () => {
  test('Snapshot SearchedProductsPage is rendered', () => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });
});