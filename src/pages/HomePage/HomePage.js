import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainBaner from '../../components/MainBanner/MainBaner';
import NewProductsContainer from '../../components/NewProductsContainer/NewProductsContainer';
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import { getAllProducts } from '../../store/actionCreators/productsAC';

function HomePage() {
  const allProducts = useSelector((state) => state.products.payload);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
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
    </div>
  );
}

export default memo(HomePage);
