import React, { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './FilterItems.module.scss';
import CardItem from '../CardItem/CardItem';

function FilterItems(props) {
  const { filterProducts } = props;
  // const allProducts = useSelector((state) => state.products.products);
  // const category = useSelector((state) => state.filter.filterCategory);
  // const filterProducts = useSelector((state) => state.filter.filterCategory);
  return (
    /* eslint-disable react/self-closing-comp */
    /* eslint-disable no-underscore-dangle */
    <div className={styles.filterItem}>
      {filterProducts && filterProducts.map((product) => (
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

FilterItems.propTypes = {
  filterProducts: PropTypes.array,
};

FilterItems.defaultProps = {
  filterProducts: [],
};

export default memo(FilterItems);