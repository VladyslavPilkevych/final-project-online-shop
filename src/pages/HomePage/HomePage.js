import React, { memo } from 'react';
import MainBaner from '../../components/MainBanner/MainBaner';
import NewProductsContainer from '../../components/NewProductsContainer/NewProductsContainer';
import CardsContainer from '../../components/CardsContainer/CardsContainer';

function HomePage() {
  return (
    <div className="Page">
      <MainBaner />
      <NewProductsContainer />
      <CardsContainer />
    </div>
  );
}

export default memo(HomePage);
