import { render } from '@testing-library/react';
import NewProductsContainer from './NewProductsContainer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store';

function Component() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <NewProductsContainer />
      </Provider>
    </BrowserRouter>
  );
}

describe('Snapshot NewProductsContainer should render', () => {
  test('Snapshot NewProductsContainer is rendered', () => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });
});