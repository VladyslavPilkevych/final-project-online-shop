/* eslint-disable react/react-in-jsx-scope */
import { render } from '@testing-library/react';
import Advantages from './Advantages';

describe('Snapshot advantages should render', () => {
  test('Snapshot advantages is rendered', () => {
    const { asFragment } = render(<Advantages />);
    expect(asFragment()).toMatchSnapshot();
  });
});