/* eslint-disable max-len */
import React from 'react';

import { ReactComponent as CloseCartIcon } from '../../assets/icons/closeCartIcon.svg';
import { ReactComponent as EditCartIcon } from '../../assets/icons/editIcon.svg';
import Cartimg from '../../assets/Images/pcImg.png';

import styles from './CartItem.module.scss';

const newCart = {
  products: [
    {
      product: '625312856ad189cceeb8b58a',
      cartQuantity: 1,
    },
    {
      product: '625312856ad189cceeb8b599',
      cartQuantity: 1,
    },
  ],
};
function CartItem() {
  return (
    <div>
      <div className={styles.cartItemContainer}>
        <ul>
          {newCart.products.map((item) => (
            <li key={item.product}>
              <div className={styles.cartItemWrapper}>
                <div className={styles.cartItem}>
                  <div>
                    <img src={Cartimg} alt="Cartimg" className={styles.cartItemImage} />
                  </div>
                  <div className={styles.cartItemDescription}>
                    <p>
                      16.2 Liquid Retina XDR (3456x2234) 120 Hz/ Apple M1 Pro / RAM 16 Gb / SSD 1 Gb / Apple M1 Pro Graphics (16 core) / Wi-Fi /
                      Bluetooth / webcam / macOS Monterey / 2.1 kg / space gray
                    </p>
                  </div>
                </div>
                <div className={styles.cartItemRightWrapper}>
                  <div className={styles.cartItemPrice}>
                    <p>$3,000</p>
                  </div>
                  <div className={styles.cartItemQuantity}>
                    <input
                      type="number"
                      className={styles.cartItemQuantityInput}
                      // pattern="[0-9]{0,5}"
                      min={1}
                      max={99}
                      // value={1}
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                    />
                  </div>
                  <div className={styles.cartItemSubtotal}>
                    <p>$12,000</p>
                  </div>
                  <div>
                    <CloseCartIcon className={styles.closeCartIcon} />
                    {/* <EditCartIcon /> */}
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
