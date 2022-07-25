import { render } from '@testing-library/react';
import PaginationFilterPage from './PaginationFilterPage';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store';

function Component() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PaginationFilterPage />
      </Provider>
    </BrowserRouter>
  );
}

describe('Snapshot PaginationFilterPage should render', () => {
  test('Snapshot PaginationFilterPage is rendered', () => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });
});