import { render } from '@testing-library/react';
import CardItem from './CardItem';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store';

function Component() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <CardItem />
        </Provider>
      </BrowserRouter>
    );
  }
  
  describe('Snapshot CardItem should render', () => {
    test('Snapshot CardItem is rendered', () => {
      const { asFragment } = render(<Component />);
      expect(asFragment()).toMatchSnapshot();
    });
  });