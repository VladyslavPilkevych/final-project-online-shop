import { render } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store';

function Component() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ErrorBoundary />
      </Provider>
    </BrowserRouter>
  );
}

describe('Snapshot ErrorBoundary should render', () => {
  test('Snapshot ErrorBoundary is rendered', () => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });
});