/* eslint-disable react/react-in-jsx-scope */
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store';
import MainBaner from './MainBaner';

function Component() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MainBaner />
      </Provider>
    </BrowserRouter>
  );
}

describe('Snapshot main baner should render', () => {
  test('Snapshot main baner is rendered', () => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });
});
