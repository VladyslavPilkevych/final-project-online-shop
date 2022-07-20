/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { deleteFromCart, editCart } from '../../store/actionCreators/cartAC';

import { ReactComponent as CloseCartIcon } from '../../assets/icons/closeCartIcon.svg';
import numberWithSpaces from '../../utils/numberWithSpaces';

import styles from './CartItem.module.scss';

function CartItem() {
  const dataCart = useSelector((state) => state.cart.dataCart);
  const cartItem = dataCart || [];

  const totalPrice = numberWithSpaces(cartItem.map((item) => item.product.currentPrice).reduce((acc, value) => acc + value, 0));

  const dispatch = useDispatch();

  const onDeleteFromCart = (productId) => {
    if (cartItem.map((item) => item.product._id === productId)) {
      dispatch(deleteFromCart(productId));
    }
  };
  const handleChange = (e, productId) => {
    dispatch(editCart(productId, e.target.value));
  };

  return (
    <div>
      <div className={styles.cartItemContainer}>
        <ul>
          {cartItem.map((item) => (
            <li key={item._id}>
              <div className={styles.cartItemWrapper}>
                <div className={styles.cartItem}>
                  <NavLink to={`/products/${item.product.itemNo}`}>
                    <div>
                      <img src={Array.isArray(item.product.imageUrls) ? item.product.imageUrls[0] : item.product.img} alt={item.product.name + item.product.model} className={styles.cartItemImage} />
                    </div>
                  </NavLink>
                  <div>
                    <p className={styles.cartItemDescription}>{`${item.product.name}  ${item.product.model}`}</p>
                  </div>
                </div>
                <div className={styles.cartItemRightWrapper}>
                  <div className={styles.cartItemContent}>
                    <div>
                      <p className={styles.cartItemContentSubPrice}>Price</p>
                    </div>
                    <p className={styles.cartItemPrice}>
                      $
                      {numberWithSpaces(item.product.currentPrice)}
                    </p>
                  </div>
                  <div className={styles.cartItemQuantity}>
                    <div>
                      <p className={styles.cartItemContentSubPrice}>Qty</p>
                    </div>
                    <input
                      type="number"
                      className={styles.cartItemQuantityInput}
                      min={1}
                      max={99}
                      value={item.cartQuantity}
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      onChange={(e) => handleChange(e, item.product?._id || item.product.id)}
                    />
                  </div>
                  <div className={styles.cartItemContent}>
                    <div>
                      <p className={styles.cartItemContentSubPrice}>Subtotal</p>
                    </div>
                    <p className={styles.cartItemSubtotal}>
                      $
                      {numberWithSpaces(item.cartQuantity * item.product.currentPrice)}
                    </p>
                  </div>
                  <div className={styles.cartItemContent}>
                    <CloseCartIcon className={styles.closeCartIcon} onClick={() => onDeleteFromCart(item.product?._id || item.product.id)} />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CartItem;
