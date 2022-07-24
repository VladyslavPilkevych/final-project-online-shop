/* eslint-disable max-len */
import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CartItem from '../../components/CartItem/CartItem';
import Advantages from '../../components/Advantages/Advantages';
import { ReactComponent as PayPallIcon } from '../../assets/icons/paypall.svg';
import numberWithSpaces from '../../utils/numberWithSpaces';

import { deleteAllCart } from '../../store/actionCreators/cartAC';

import styles from './CartPage.module.scss';

function CartPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dataCart = useSelector((state) => state.cart.dataCart) || [];

  const totalPrice = (parseInt(dataCart.map((item) => item.product.currentPrice * item.cartQuantity).reduce((acc, value) => acc + value, 0), 10));
  const orderPrice = numberWithSpaces(totalPrice + (totalPrice * 0.1) + 21);
  return (
    <section>
      <div className={styles.cartWrapper}>
        <h1 className={styles.cartPageTitle}>Shopping Cart</h1>
        <div className={styles.cartPageColumn}>
          <div className={styles.cartPageGridWrapper}>
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
              <button className={styles.CartButtonClearCart} type="button" onClick={() => { dispatch(deleteAllCart()); window.scrollTo(0, 0); }}>
                Clear Shopping Cart
              </button>
            </div>
          </div>
          <div className={styles.summaryContainer}>
            <div className={styles.summaryWrapper}>
              <h2 className={styles.titleSummary}>Summary</h2>
              <div className={styles.summaryContent}>
                <div>
                  <p className={styles.summarytext}>Subtotal</p>
                </div>
                <div>
                  <p className={styles.summarytext}>
                    $
                    {numberWithSpaces(totalPrice)}
                  </p>
                </div>
              </div>
              <div className={styles.summaryContent}>
                <div>
                  <p className={styles.summarytext}>Shipping</p>
                </div>
                <div>
                  <p className={styles.summarytext}>$21</p>
                </div>
              </div>
              <div className={styles.summaryContent}>
                <div>
                  <p className={styles.summarytext}>Tax</p>
                </div>
                <div>
                  <p className={styles.summarytext}>10%</p>
                </div>
              </div>
              <div className={styles.summaryContent}>
                <div>
                  <p className={styles.summarytext}>Order Total</p>
                </div>
                <div>
                  <p className={styles.summarytext}>
                    $
                    {orderPrice}
                  </p>
                </div>
              </div>
              <div className={styles.summaryButtonWrapper}>
                <button className={styles.buttonProceed} type="button">
                  Proceed to Checkout
                </button>
                <button className={styles.buttonCheck} type="button">
                  Check out with
                  <PayPallIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.advantagesBackGround}>
        <Advantages />
      </div>
    </section>
  );
}

export default memo(CartPage);
