import React, { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './FilterItems.module.scss';
import CardItem from '../CardItem/CardItem';

function FilterItems() {
  const allProducts = useSelector((state) => state.products.products);
  return (
  /* eslint-disable react/self-closing-comp */
  /* eslint-disable no-underscore-dangle */
    <div className={styles.filterItems}>
      {allProducts && allProducts.map((product) => (
        <div key={product.id} className={styles.gridItemContainer}>
          {/* {console.log(product)} */}
          <CardItem
            key={product.id}
            name={product.name}
            currentPrice={product.currentPrice}
            id={product._id}
            img={product.imageUrls[0]}
            quantity={product.quantity}
            previousPrice={product.previousPrice}
            model={product.model}
            itemNo={product.itemNo}
          />
        </div>
      ))}
      {/* <div className={styles.gridItemContainer}></div>
      <div className={styles.gridItemContainer}></div>
      <div className={styles.gridItemContainer}></div>
      <div className={styles.gridItemContainer}></div>
      <div className={styles.gridItemContainer}></div>
      <div className={styles.gridItemContainer}></div>
      <div className={styles.gridItemContainer}></div>
      <div className={styles.gridItemContainer}></div>
      <div className={styles.gridItemContainer}></div>
      <div className={styles.gridItemContainer}></div>
      <div className={styles.gridItemContainer}></div>
      <div className={styles.gridItemContainer}></div>
      <div className={styles.gridItemContainer}></div>
      <div className={styles.gridItemContainer}></div>
      <div className={styles.gridItemContainer}></div>
      <div className={styles.gridItemContainer}></div>
      <div className={styles.gridItemContainer}></div>
      <div className={styles.gridItemContainer}></div> */}
    </div>
  /* eslint-enable no-underscore-dangle */
  /* eslint-enable react/self-closing-comp */
  );
}

export default memo(FilterItems);