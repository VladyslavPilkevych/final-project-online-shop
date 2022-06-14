import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainBaner from '../../components/MainBanner/MainBaner';
import NewProductsContainer from '../../components/NewProductsContainer/NewProductsContainer';
import Categories from '../../components/Categories/Categories';
import Companies from '../../components/Companies/Companies';
import Posts from '../../components/Posts/Posts';
import { getAllProducts } from '../../store/actionCreators/productsAC';
import styles from './HomePage.module.scss';
import Advantages from '../../components/Advantages/Advantages';
import SearchedProductsPage from '../SearchedProductsPage/SearchedProductsPage';

function HomePage() {
  const allProducts = useSelector((state) => state.products);
  // console.log(allProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  useEffect(() => {}, [allProducts]);
  // console.log(allProducts);
  // useEffect(() => {
  //   if () {
  //     dispatch(getDataAC(token));
  //   }
  // }, [token]);

  return (
    <div className={styles.homePage}>
      <MainBaner />
      <NewProductsContainer />
      <Categories imageSrc="./images/imgCategory1.png" productsCategories="laptop" />
      <Categories imageSrc="./images/imgCategory2.png" productsCategories="headphones" />
      <Categories imageSrc="./images/imgCategory3.png" productsCategories="phones" />
      <Categories imageSrc="./images/imgCategory4.png" productsCategories="monitor" />
      <Companies />
      <Posts />
      <Advantages />
    </div>
  );
}

export default memo(HomePage);
