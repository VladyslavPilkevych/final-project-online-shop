import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CartItem from './CartItem';
import store from '../../store';

function Component() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <CartItem />
      </Provider>
    </BrowserRouter>
  );
}

describe('Snapshot CartItem should render', () => {
  test('Snapshot CartItem is rendered', () => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });
});
