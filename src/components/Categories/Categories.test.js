import { render } from '@testing-library/react';
import Categories from './Categories';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store';

function Component() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Categories />
      </Provider>
    </BrowserRouter>
  );
}

describe('Snapshot Categories should render', () => {
  test('Snapshot Categories is rendered', () => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });
});