import { render } from '@testing-library/react';
import FilterCreatorColor from './FilterCreatorColor';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store';

function Component() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <FilterCreatorColor />
      </Provider>
    </BrowserRouter>
  );
}

describe('Snapshot FilterCreatorColor should render', () => {
  test('Snapshot FilterCreatorColor is rendered', () => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });
});