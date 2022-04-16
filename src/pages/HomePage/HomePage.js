import React, { memo } from 'react';
import CardsContainer from '../../components/CardsContainer/CardsContainer';

function HomePage() {
  return (
    <div className="Page">
      <h1>Home Page</h1>
      <CardsContainer />
    </div>
  );
}

export default memo(HomePage);
