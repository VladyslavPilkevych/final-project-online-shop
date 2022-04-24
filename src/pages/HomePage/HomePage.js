import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainBaner from '../../components/MainBanner/MainBaner';
import NewProductsContainer from '../../components/NewProductsContainer/NewProductsContainer';
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import Companies from '../../components/Companies/Companies';
import Posts from '../../components/Posts/Posts';
import { getAllProducts } from '../../store/actionCreators/productsAC';
import Advantages from '../../components/Advantages/Advantages';

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
    <div className="Page">
      <MainBaner />
      <NewProductsContainer />
      <CardsContainer />
      <Companies />
      <Posts />
      <Advantages />
    </div>
  );
}

export default memo(HomePage);
