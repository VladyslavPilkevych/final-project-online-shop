import { render } from '@testing-library/react';
import Button from './Button';

describe('Snapshot Button should render', () => {
    test('Snapshot Button is rendered', () => {
      const { asFragment } = render(<Button />);
      expect(asFragment()).toMatchSnapshot();
    });
  });