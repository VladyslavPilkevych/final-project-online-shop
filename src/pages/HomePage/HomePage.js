import React, { memo } from 'react';
import MainBaner from '../../components/MainBanner/MainBaner';

function HomePage() {
  return (
    <div className="Page">
      <h1>Home Page</h1>
      <MainBaner />
    </div>
  );
}

export default memo(HomePage);
