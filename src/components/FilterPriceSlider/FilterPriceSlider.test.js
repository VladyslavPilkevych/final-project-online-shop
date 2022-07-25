import { render } from '@testing-library/react';
import FilterPriceSlider from './FilterPriceSlider';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store';

function Component() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <FilterPriceSlider />
      </Provider>
    </BrowserRouter>
  );
}

describe('Snapshot FilterPriceSlider should render', () => {
  test('Snapshot FilterPriceSlider is rendered', () => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });
});