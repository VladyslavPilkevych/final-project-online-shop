import { render } from '@testing-library/react';
import AuthorizationPage from './AuthorizationPage';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store';

function Component() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AuthorizationPage />
      </Provider>
    </BrowserRouter>
  );
}

describe('Snapshot AuthorizationPage should render', () => {
  test('Snapshot AuthorizationPage is rendered', () => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });
});