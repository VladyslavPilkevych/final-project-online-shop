import React, { Fragment } from 'react';
// import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
// import { fireEvent, getByText, queryByTestId, queryByText, render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import CardItem from './CardItem';
// import Router from 'react-router-dom';
// import { Routes, Route, Navigate } from 'react-router-dom';

const itemContent = {
  name: 'testName',
  img: 'testURL',
  currentPrice: 123,
  id: 'testID123',
  quantity: 2,
  previousPrice: 100,
  elementClassName: 'testElementClassName',
  model: 'testModel',
  itemNo: '123',
};

function Component() {
  const {
    name, currentPrice, id, img, quantity, previousPrice, elementClassName, model, itemNo,
  } = itemContent;
  return (
    <BrowserRouter>
      <CardItem
        name={name}
        currentPrice={currentPrice}
        id={id}
        img={img}
        quantity={quantity}
        previousPrice={previousPrice}
        elementClassName={elementClassName}
        model={model}
        itemNo={itemNo}
      />
    </BrowserRouter>
  );
}

describe('Snapshot CardItem should render', () => {
  test('Snapshot CardItem is rendered', () => {
    const { asFragment } = render(<Component />);
    const firstRender = asFragment();
    expect(firstRender).toMatchSnapshot(asFragment());
  });
});

// describe('item add to cart', () => {
//   test('should add to card', () => {
//     const { getByText } = render(<Component />);
//     const button = getByText('Add To Cart');
//     button.click();
//     expect(getByText('Already in cart')).toBeInTheDocument();
//   });
// });
