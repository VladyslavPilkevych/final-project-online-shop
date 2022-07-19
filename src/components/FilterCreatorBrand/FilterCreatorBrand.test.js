import React, { Fragment } from 'react';
// import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
// import { fireEvent, getByText, queryByTestId, queryByText, render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import FilterCreatorBrand from './FilterCreatorBrand';
import store from '../../store';
// import Router from 'react-router-dom';
// import { Routes, Route, Navigate } from 'react-router-dom';

const brandsFiltered = ['apple', 'android', 'linux', 'windows'];

function Component() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <FilterCreatorBrand brandsFiltered={brandsFiltered} />
      </Provider>
    </BrowserRouter>
  );
}

describe('Snapshot FilterCreatorBrand should render', () => {
  test('Snapshot FilterCreatorBrand is rendered', () => {
    const { asFragment } = render(<Component />);
    const firstRender = asFragment();
    expect(firstRender).toMatchSnapshot(asFragment());
  });
});

describe('brand redux should work', () => {
  test('should add to store', () => {
    const result = render(<Component />);
    const brand = result.getByText('windows');
    brand.click();
    const checkbox = result.container.querySelector('#brand_windows');
    expect(checkbox).toBeChecked();
  });
  // test('should delete from store', () => {
  //     const result = render(<Component />);
  //     const brand = result.getByText('windows');
  //     brand.click();
  //     brand.click();
  //     const checkbox = result.container.querySelector('#brand_windows');
  //     expect(checkbox).not.toBeChecked();
  // });
});
