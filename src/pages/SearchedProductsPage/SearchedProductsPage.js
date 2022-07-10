/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardItem from '../../components/CardItem/CardItem';
import styles from './SearchedProductsPage.module.scss';
import { searchProducts } from '../../store/actionCreators/searchAC';
import Advantages from '../../components/Advantages/Advantages';

function SearchedProductsPage() {
  const dispatch = useDispatch();
  const searchedProducts = useSelector((state) => state.search.searchedProducts);

  useEffect(() => {
    dispatch(searchProducts(localStorage.getItem('phrase')));
  }, []);

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
      <Advantages />
    </div>
  );
}

export default SearchedProductsPage;