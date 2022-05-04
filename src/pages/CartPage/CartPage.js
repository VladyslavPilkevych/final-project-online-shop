import React, { memo } from 'react';
import CartItem from '../../components/CartItem/CartItem';

function CartPage() {
  return (
    <section>
      <h1> PCartage</h1>
      <CartItem />
    </section>
  );
}

export default memo(CartPage);
