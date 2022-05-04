import React, { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './FilterCreator.module.scss';
import Button from '../Button/Button';
import swipeUp from '../../assets/icons/filterPage/swipeUp.png';
import swipeDown from '../../assets/icons/filterPage/swipeDown.png';

function FilterCreator() {
  const allProducts = useSelector((state) => state.products.products);
  const colors = allProducts.map((product) => product.color);
  const colorsFiltered = [...new Set(colors)];
  console.log(colorsFiltered);
  const [filterCategory, setFilterCategory] = useState(false);
  const [filterPrice, setFilterPrice] = useState(false);
  const [filterColor, setFilterColor] = useState(false);
  const [filterName, setFilterName] = useState(false);
  return (
    <div className={styles.filterCreator}>
      {/* <div className={[styles.topItems, styles.categoryContainers].join(' ')}> */}
      <div className={styles.categoryContainers}>
        <p className={styles.filtersTopP}>Filters</p>
        <Button style={styles.clearFilterBtn}>Clear Filter</Button>
      </div>
      <div className={styles.categoryContainers}>
        <div
          onClick={() => {
            setFilterCategory((prevState) => !prevState);
          }}
          role="button"
          tabIndex={0}
          className={styles.twiceItems}
        >
          <p className={styles.categoryName}>Category</p>
          <img src={swipeDown} className={styles.swiper} alt="swipeDown" />
        </div>
        {filterCategory
          && (
            <ul>
              <li className={styles.twiceItems}>
                <p>Laptop</p>
                <span>12</span>
              </li>
              <li className={styles.twiceItems}>
                <p>Headphones</p>
                <span>12</span>
              </li>
              <li className={styles.twiceItems}>
                <p>Phones</p>
                <span>12</span>
              </li>
              <li className={styles.twiceItems}>
                <p>Monitor</p>
                <span>12</span>
              </li>
            </ul>
          )}
      </div>
      <div className={styles.categoryContainers}>
        <div
          onClick={() => {
            setFilterPrice((prevState) => !prevState);
          }}
          role="button"
          tabIndex={0}
          className={styles.twiceItems}
        >
          <p className={styles.categoryName}>Price</p>
          <img src={swipeDown} className={styles.swiper} alt="swipeDown" />
        </div>
        {filterPrice
          && (
            <ul>
              <li className={styles.twiceItems}>
                <p>$0.00 - $250.00</p>
                <span>12</span>
              </li>
              <li className={styles.twiceItems}>
                <p>$250.00 - $500.00</p>
                <span>12</span>
              </li>
              <li className={styles.twiceItems}>
                <p>$500.00 - $750.00</p>
                <span>12</span>
              </li>
              <li className={styles.twiceItems}>
                <p>$750.00 And Above</p>
                <span>12</span>
              </li>
            </ul>
          )}
      </div>
      <div className={styles.categoryContainers}>
        <div
          onClick={() => {
            setFilterColor((prevState) => !prevState);
          }}
          role="button"
          tabIndex={0}
          className={styles.twiceItems}
        >
          <p className={styles.categoryName}>Color</p>
          <img src={swipeDown} className={styles.swiper} alt="swipeDown" />
        </div>
        {filterColor
          && (
            <ul className={styles.colorsContainer}>
              <li className={styles.colorsItems} style={{ backgroundColor: 'red' }} />
              <li className={styles.colorsItems} style={{ backgroundColor: 'black' }} />
              {/* eslint-disable-next-line max-len */}
              {/* {colorsFiltered && colorsFiltered.map((color) => <li key={Math.random()} className={styles.colorsItems} style={{ backgroundColor: color }} />)} */}
            </ul>
          )}
      </div>
      <div className={styles.categoryContainers}>
        <div
          onClick={() => {
            setFilterName((prevState) => !prevState);
          }}
          role="button"
          tabIndex={0}
          className={styles.twiceItems}
        >
          <p className={styles.categoryName}>Filter Name</p>
          <img src={swipeDown} className={styles.swiper} alt="swipeDown" />
        </div>
        {filterName
          && (
            <ul>
              <li className={styles.twiceItems}>
                <p>HP</p>
                <span>12</span>
              </li>
              <li className={styles.twiceItems}>
                <p>iPhone</p>
                <span>12</span>
              </li>
              <li className={styles.twiceItems}>
                <p>Samsung</p>
                <span>12</span>
              </li>
            </ul>
          )}
      </div>
      <div className={styles.categoryContainers}>
        <Button style={styles.clearFilterBtn}>Apply Filters</Button>
      </div>
      <div className={styles.categoryContainers}>
        <p className={styles.filtersTopP}>Brands</p>
        <Button style={styles.clearFilterBtn}>All Brands</Button>
      </div>
    </div>
  );
}

export default memo(FilterCreator);