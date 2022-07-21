/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { toggleCart, deleteFromCart } from '../../store/actionCreators/cartAC';
import { ReactComponent as CloseCartIcon } from '../../assets/icons/closeCartIcon.svg';
import numberWithSpaces from '../../utils/numberWithSpaces';

import Image from '../Image/Image';

import styles from './MiniCart.module.scss';

function MiniCart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isOpenCart = useSelector((state) => state.cart.isOpenCart);
  const dataCart = useSelector((state) => state.cart.dataCart) || [];

  if (!isOpenCart) return null;

  const totalPrice = numberWithSpaces(dataCart.map((item) => item.product.currentPrice * item.cartQuantity).reduce((acc, value) => acc + value, 0));

  const closeCart = () => {
    dispatch(toggleCart(false));
  };

  const onDeleteFromCart = (productId) => {
    if (dataCart.map((item) => item.product._id === productId)) {
      dispatch(deleteFromCart(productId));
    }
  };

  return (
    <div className={styles.miniCartWrapper} role="button" tabIndex="0" onClick={closeCart}>
      <div className={styles.miniCart} role="button" tabIndex="0" onClick={(e) => e.stopPropagation()}>
        <div className={styles.miniCartHeader}>
          <h3 className={styles.miniCartTitle}>My Cart</h3>
          <p className={styles.miniCartSubTitle}>
            {dataCart.length}
            -items
          </p>
          <button
            type="button"
            className={styles.editBtn}
            onClick={() => {
              navigate('/cart');
              dispatch(toggleCart(!isOpenCart));
            }}
          >
            View or Edit Your Cart
          </button>
        </div>
        <div className={styles.miniCartContent} role="button" tabIndex="0" onClick={(e) => e.stopPropagation()}>
          <ul>
            {dataCart.map((item) => (
              <li key={item.product.itemNo}>
                <div className={styles.miniCartContentwrapper}>
                  <div>
                    <p className={styles.miniCartQuantity}>
                      {item.cartQuantity}
                      <span>x</span>
                    </p>
                  </div>
                  {dataCart && (
                    <div
                      onClick={() => {
                        navigate(`/products/${item.product.itemNo}`);
                        dispatch(toggleCart(!isOpenCart));
                      }}
                      role="button"
                      tabIndex="0"
                    >
                      <Image
                        className={styles.imageInCart}
                        src={Array.isArray(item.product.imageUrls) ? item.product.imageUrls[0] : item.product.img}
                        alt={item.product.model}
                      />
                    </div>
                  )}
                  <div>
                    <p className={styles.miniCartDescription}>
                      {`${item.product.name} ${item.product.model}`}
                    </p>
                  </div>
                  <div>
                    <CloseCartIcon onClick={() => onDeleteFromCart(item.product?._id || item.product.id)} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.miniCartFotter}>
          <p className={styles.miniCartTotalPrice}>
            Subtotal:
            <span className={styles.miniCartTotalValues}>
              $
              {totalPrice}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default memo(MiniCart);
