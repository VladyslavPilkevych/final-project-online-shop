import React, { memo } from 'react';
import MainBaner from '../../components/MainBanner/MainBaner';
import CardsContainer from '../../components/CardsContainer/CardsContainer';

function HomePage() {
  return (
    <div className="Page">
      <h1>Home Page</h1>
      <MainBaner />
      <CardsContainer />
    </div>
  );
}

export default memo(HomePage);
