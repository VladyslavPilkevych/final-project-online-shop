/* eslint-disable react/react-in-jsx-scope */
import { configure, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Footer from './Footer';

describe('Snapshot footer should render', () => {
  test('Snapshot footer is rendered', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('More information should open, after click on arrow', () => {
  test('More info is open', () => {
    render(<Footer />);
    configure({ testIdAttribute: 'id' });
    userEvent.click(screen.getByTestId(1));
    expect(screen.getByText('Information')).toBeInTheDocument();
    screen.debug();
  });
});