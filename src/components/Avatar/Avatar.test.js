/* eslint-disable react/react-in-jsx-scope */
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store';
import Avatar from './Avatar';

function Component() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Avatar />
      </Provider>
    </BrowserRouter>
  );
}

describe('Snapshot avatar should render', () => {
  test('Snapshot avatar is rendered', () => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });
});
