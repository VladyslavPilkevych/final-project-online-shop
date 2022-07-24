/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { deleteFromCart, editCart } from '../../store/actionCreators/cartAC';

import { ReactComponent as CloseCartIcon } from '../../assets/icons/closeCartIcon.svg';
import numberWithSpaces from '../../utils/numberWithSpaces';

import styles from './CartItem.module.scss';

function CartItem(data) {
  console.log(data);
  // eslint-disable-next-line react/prop-types
  const {
    cartQuantity, _id, product: {
      currentPrice, name, model, imageUrls, itemNo,
    },
  } = data;
  const dataCart = useSelector((state) => state.cart.dataCart) || [];
  const cartItem = dataCart || [];
  console.log(dataCart);

  // console.log(dataCart);

  const totalPrice = numberWithSpaces(cartItem.map((item) => item.product.currentPrice).reduce((acc, value) => acc + value, 0));

  const index = dataCart.findIndex((item) => item.product.id === _id);

  const dispatch = useDispatch();

  const onDeleteFromCart = (productId) => {
    if (cartItem.map((item) => item.product._id === productId)) {
      dispatch(deleteFromCart(productId));
    }
  };
  const handleChange = (e) => {
    const { value } = e.target;
    console.log('value', value);
    console.log('id', _id);
    dispatch(editCart(_id, value));
  };

  return (
    <div>
      <div className={styles.cartItemContainer}>
        <div className={styles.cartItemWrapper}>
          <div className={styles.cartItem}>
            <NavLink to={`/products/${itemNo}`}>
              <div>
                <img src={imageUrls[0]} alt={name + model} className={styles.cartItemImage} />
              </div>
            </NavLink>
            <div>
              <p className={styles.cartItemDescription}>{`${name}  $model}`}</p>
            </div>
          </div>
          <div className={styles.cartItemRightWrapper}>
            <div className={styles.cartItemContent}>
              <div>
                <p className={styles.cartItemContentSubPrice}>Price</p>
              </div>
              <p className={styles.cartItemPrice}>
                $
                {numberWithSpaces(currentPrice)}
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
                value={cartQuantity}
                // onKeyPress={(event) => {
                //   if (!/[0-9]/.test(event.key)) {
                //     event.preventDefault();
                //   }
                // }}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className={styles.cartItemContent}>
              <div>
                <p className={styles.cartItemContentSubPrice}>Subtotal</p>
              </div>
              <p className={styles.cartItemSubtotal}>
                $
                {numberWithSpaces(cartQuantity * currentPrice)}
              </p>
            </div>
            <div className={styles.cartItemContent}>
              <CloseCartIcon className={styles.closeCartIcon} onClick={() => onDeleteFromCart(_id)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
