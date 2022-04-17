import React, { memo } from 'react';
import MainBaner from '../../components/MainBanner/MainBaner';
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import NewProductsContainer from '../../components/NewProductsContainer/NewProductsContainer';

function HomePage() {
  return (
    <div className="Page">
      <h1>Home Page</h1>
      <MainBaner />
      <NewProductsContainer />
      <CardsContainer />
    </div>
  );
}

export default memo(HomePage);
