import { render } from '@testing-library/react';
import SignUpPage from './SignUpPage';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store';

function Component() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <SignUpPage />
      </Provider>
    </BrowserRouter>
  );
}

describe('Snapshot SignUpPage should render', () => {
  test('Snapshot SignUpPage is rendered', () => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });
});