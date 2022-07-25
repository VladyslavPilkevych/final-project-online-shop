import { render } from '@testing-library/react';
import ProductCard from './ProductCard';

describe('Snapshot ProductCard should render', () => {
    test('Snapshot ProductCard is rendered', () => {
      const { asFragment } = render(<ProductCard />);
      expect(asFragment()).toMatchSnapshot();
    });
  });