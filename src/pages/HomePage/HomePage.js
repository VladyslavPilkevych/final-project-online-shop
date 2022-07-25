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

import imgCategoryLaptop from '../../assets/images/Categories/imgCategory1.png';
import imgCategoryHeadphones from '../../assets/images/Categories/imgCategory2.png';
import imgCategoryPhones from '../../assets/images/Categories/imgCategory3.png';
import imgCategoryMonitor from '../../assets/images/Categories/imgCategory4.png';

function HomePage() {
  const allProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  useEffect(() => {}, [allProducts]);

  return (
    <div className={styles.homePage}>
      <MainBaner />
      <NewProductsContainer />
      <Categories imageSrc={imgCategoryLaptop} productsCategories="laptop" />
      <Categories imageSrc={imgCategoryHeadphones} productsCategories="headphones" />
      <Categories imageSrc={imgCategoryPhones} productsCategories="phones" />
      <Categories imageSrc={imgCategoryMonitor} productsCategories="monitor" />
      <Companies />
      <Posts />
      <Advantages />
    </div>
  );
}

export default memo(HomePage);
