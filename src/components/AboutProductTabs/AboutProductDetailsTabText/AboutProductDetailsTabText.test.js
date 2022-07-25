import { render } from '@testing-library/react';
import AboutProductDetailsTabText from './AboutProductDetailsTabText';

describe('Snapshot AboutProductDetailsTabText should render', () => {
    test('Snapshot AboutProductDetailsTabText is rendered', () => {
      const { asFragment } = render(<AboutProductDetailsTabText />);
      expect(asFragment()).toMatchSnapshot();
    });
  });