import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainBaner from '../../components/MainBanner/MainBaner';
import NewProductsContainer from '../../components/NewProductsContainer/NewProductsContainer';
import Companies from '../../components/Companies/Companies';
import Posts from '../../components/Posts/Posts';
import { getAllProducts } from '../../store/actionCreators/productsAC';
import styles from './HomePage.module.scss';

function HomePage() {
  const allProducts = useSelector((state) => state.products);
  console.log(allProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  useEffect(() => {
  }, [allProducts]);
  console.log(allProducts);
  // useEffect(() => {
  //   if () {
  //     dispatch(getDataAC(token));
  //   }
  // }, [token]);

  return (
    <div className={styles.homePage}>
      <MainBaner />
      <NewProductsContainer />
      <Companies />
      <Posts />
    </div>
  );
}

export default memo(HomePage);
