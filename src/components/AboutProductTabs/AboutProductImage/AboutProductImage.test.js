import { render } from '@testing-library/react';
import AboutProductImage from './AboutProductImage';

describe('Snapshot AboutProductImage should render', () => {
  test('Snapshot AboutProductImage is rendered', () => {
    const { asFragment } = render(<AboutProductImage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
