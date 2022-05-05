/* eslint-disable max-len */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardItem from '../../components/CardItem/CardItem';
import styles from './SearchedProductsPage.module.scss';
import { searchProducts } from '../../store/actionCreators/searchAC';

function SearchedProductsPage() {
  const dispatch = useDispatch();
  const searchedProducts = useSelector((state) => state.search.searchedProducts);

  const useLocalStorageSearchedProducts = () => {
    dispatch(searchProducts(localStorage.getItem('phrase')));
  };

  window.addEventListener('load', useLocalStorageSearchedProducts);

  return (
    <div>
      <h2 className={styles.productName}>
        Products
        {' '}
        (
        {searchedProducts.length}
        )
      </h2>
      <div className={styles.searchedProductsContainer}>
        {searchedProducts.map(({
          _id, name, currentPrice, imageUrls, quantity, itemNo, model,
        }) => (
          <div key={_id} className={styles.cardWrapper}>
            <CardItem key={_id} id={_id} name={name} currentPrice={currentPrice} img={imageUrls[0]} quantity={quantity} itemNo={itemNo} model={model} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchedProductsPage;