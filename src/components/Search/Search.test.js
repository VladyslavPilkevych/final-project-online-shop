/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
import {
  getByDisplayValue, getByPlaceholderText, render, screen,
} from '@testing-library/react';
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import store from '../../store';
import Search from './Search';
import { toggleSearch, searchProducts } from '../../store/actionCreators/searchAC';

const Component = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Search />
        <OpenButton />
        <CloseButton />
        <SearchButton />
      </Provider>
    </BrowserRouter>
  );
};

const OpenButton = () => {
  const dispatch = useDispatch();
  const toggleOpen = () => {
    dispatch(toggleSearch(true));
  };

  return (
    <button onClick={toggleOpen}>Open</button>
  );
};

const CloseButton = () => {
  const dispatch = useDispatch();
  const toggleClose = () => {
    dispatch(toggleSearch(false));
  };

  return (
    <button onClick={toggleClose}>Close</button>
  );
};

const SearchButton = () => {
  const dispatch = useDispatch();
  const searchForProduct = () => {
    dispatch(searchProducts('Apple'));
  };
  return (
    <button onClick={searchForProduct}>Search</button>
  );
};

describe('Snapshot search with button', () => {
  test('Should snapshot search with button', () => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Search should open', () => {
  test('Search is opened', () => {
    const { asFragment, getByText } = render(<Component />);
    const button = getByText('Open');
    button.click();
    expect(screen.getByPlaceholderText('Search entiere store here...')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Search should close', () => {
  test('Search is closed', () => {
    const { asFragment, getByText, queryByPlaceholderText } = render(<Component />);
    const button = getByText('Close');
    button.click();
    expect(queryByPlaceholderText('Search entiere store here...')).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Search input should work', () => {
  test('Search value is input value', () => {
    const { getByText } = render(<Component />);
    const button = getByText('Open');
    button.click();
    userEvent.type(screen.getByPlaceholderText('Search entiere store here...'), 'Apple');
    expect(screen.getByPlaceholderText('Search entiere store here...').value).toBe('Apple');
  });

  test('Search should find products, by input value', () => {
    const { getByText } = render(<Component />);
    const openButton = getByText('Open');
    const searchButton = getByText('Search');
    openButton.click();
    userEvent.type(screen.getByPlaceholderText('Search entiere store here...'), 'Apple');
    searchButton.click();
  });
});
