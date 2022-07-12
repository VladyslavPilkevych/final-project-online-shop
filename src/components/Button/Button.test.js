import { render } from '@testing-library/react';
import Button from './Button.js';

describe('Testing component Button', () => {
  test('should Button render text', () => {
    const { getByText } = render(<Button>Test Name</Button>);
    expect(getByText('Test Name')).toBeInTheDocument();
  });
});