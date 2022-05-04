import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { toggleCart } from '../../store/actionCreators/cartAC';
import { ReactComponent as CloseCartIcon } from '../../assets/icons/closeCartIcon.svg';
import { ReactComponent as EditCartIcon } from '../../assets/icons/editIcon.svg';
import Image from '../Image/Image';

import styles from './MiniCart.module.scss';

const newCart = {
  products: [
    {
      product: '5da463678cca382250dd7bc7',
      date: Date.now(),
    },
    {
      product: '5d73ad04fcad90130470f08b',
      date: Date.now(),
    },
  ],
};

function MiniCart() {
  const isOpenCart = useSelector((state) => state.cart.isOpenCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (!isOpenCart) return null;

  const handleItemSubMenu = (url) => navigate(url);

  const closeCart = () => {
    dispatch(toggleCart(false));
  };

  return (
    <div className={styles.miniCartWrapper} role="button" tabIndex="0" onClick={closeCart}>
      <div className={styles.miniCart} role="button" tabIndex="0" onClick={(e) => e.stopPropagation()}>
        <div className={styles.miniCartHeader}>
          <h3 className={styles.miniCartTitle}>My Cart</h3>
          <p className={styles.miniCartSubTitle}>2 item in cart</p>
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
        <div className={styles.miniCartContent}>
          <ul>
            {newCart.products.map((item) => (
              <li key={item.product}>
                <div className={styles.miniCartContentwrapper}>
                  <div>
                    <p>
                      1
                      <span>x</span>
                    </p>
                  </div>
                  <div>
                    <Image src="./images/pcImg.png" alt="pcIm" />
                  </div>
                  <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, et!</p>
                  </div>
                  <div>
                    <CloseCartIcon />
                    <EditCartIcon />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.miniCartFotter}>
          <p className={styles.miniCartTotalPrice}>
            Subtotal:
            <span className={styles.miniCartTotalValues}> $499.00</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MiniCart;
