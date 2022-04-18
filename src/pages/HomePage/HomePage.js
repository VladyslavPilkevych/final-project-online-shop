import React, { memo } from 'react';
import MainBaner from '../../components/MainBanner/MainBaner';
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import Companies from '../../components/Companies/Companies';
import Posts from '../../components/Posts/Posts';

function HomePage() {
  return (
    <div className="Page">
      <h1>Home Page</h1>
      <MainBaner />
      <CardsContainer />
      <Companies />
      <Posts />
    </div>
  );
}

export default memo(HomePage);
