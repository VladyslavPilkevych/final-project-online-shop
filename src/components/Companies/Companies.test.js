import { render } from '@testing-library/react';
import Companies from './Companies';

describe('Snapshot companies should render', () => {
  test('Snapshot companies is rendered', () => {
    const { asFragment } = render(<Companies />);
    expect(asFragment()).toMatchSnapshot();
  });
});
