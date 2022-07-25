import { render } from '@testing-library/react';
import FilterContainer from './FilterContainer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store';

function Component() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <FilterContainer />
      </Provider>
    </BrowserRouter>
  );
}

describe('Snapshot FilterContainer should render', () => {
  test('Snapshot FilterContainer is rendered', () => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });
});
