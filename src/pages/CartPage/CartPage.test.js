import { render } from '@testing-library/react';
import CartPage from './CartPage';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store';

function Component() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <CartPage />
      </Provider>
    </BrowserRouter>
  );
}

describe('Snapshot CartPage should render', () => {
  test('Snapshot CartPage is rendered', () => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });
});