import { render } from '@testing-library/react';
import AboutProductPage from './AboutProductPage';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store';

function Component() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AboutProductPage />
      </Provider>
    </BrowserRouter>
  );
}

describe('Snapshot AboutProductPage should render', () => {
  test('Snapshot AboutProductPage is rendered', () => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });
});