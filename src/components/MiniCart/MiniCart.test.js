import { render } from '@testing-library/react';
import MiniCart from './MiniCart';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store';

function Component() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MiniCart />
      </Provider>
    </BrowserRouter>
  );
}

describe('Snapshot MiniCart should render', () => {
  test('Snapshot MiniCart is rendered', () => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });
});