import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import CartItem from '../../components/CartItem/CartItem';
import Advantages from '../../components/Advantages/Advantages';

import styles from './CartPage.module.scss';

function CartPage() {
  const navigate = useNavigate();

  return (
    <section>
      <div className={styles.cartWrapper}>
        <h1 className={styles.cartPageTitle}>Shopping Cart</h1>
        <div className={styles.cartItemHeaders}>
          <div className={styles.Item}>
            <p>Item</p>
          </div>
          <div className={styles.Price}>
            <p>Price</p>
          </div>
          <div className={styles.Qty}>
            <p>Qty</p>
          </div>
          <div className={styles.Subtotal}>
            <p>Subtotal</p>
          </div>
        </div>
        <CartItem />
        <div className={styles.CartButtonWrapper}>
          <button className={styles.CartButtonShopping} type="button" onClick={() => navigate({ pathname: '/' })}>
            Continue Shopping
          </button>
          <button className={styles.CartButtonClearCart} type="button">
            Clear Shopping Cart
          </button>
        </div>
      </div>
      <Advantages />
    </section>
  );
}

export default memo(CartPage);
