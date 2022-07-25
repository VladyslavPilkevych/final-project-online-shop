import { render } from '@testing-library/react';
import AboutProductCommonTabText from './AboutProductCommonTabText';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../../store';

function Component() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AboutProductCommonTabText />
      </Provider>
    </BrowserRouter>
  );
}

describe('Snapshot AboutProductCommonTabText should render', () => {
  test('Snapshot AboutProductCommonTabText is rendered', () => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });
});
