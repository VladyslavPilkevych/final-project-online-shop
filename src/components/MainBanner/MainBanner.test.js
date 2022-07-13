/* eslint-disable react/react-in-jsx-scope */
import { render } from '@testing-library/react';
import MainBaner from './MainBaner';

describe('Snapshot main baner should render', () => {
  test('Snapshot main baner is rendered', () => {
    const { asFragment } = render(<MainBaner />);
    expect(asFragment()).toMatchSnapshot();
  });
});
