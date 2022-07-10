/* eslint-disable react/react-in-jsx-scope */
import { render } from '@testing-library/react';
import Posts from './Posts';

describe('Snapshot posts should render', () => {
  test('Snapshot posts is rendered', () => {
    const { asFragment } = render(<Posts />);
    expect(asFragment()).toMatchSnapshot();
  });
});