import React from 'react';

import styles from './CartItem.module.scss';

function CartItem() {
  return (
    <div>
      <div className={styles.cartWrapper}>
        <div>
          <div><p>Item</p></div>
          <div><p>Price</p></div>
          <div><p>Qty</p></div>
          <div><p>Subtotal</p></div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
