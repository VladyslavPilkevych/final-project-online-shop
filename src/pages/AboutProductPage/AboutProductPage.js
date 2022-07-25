/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ToastNotification } from '../../utils/toastify';

import AboutProductDetailsTabText from '../../components/AboutProductTabs/AboutProductDetailsTabText/AboutProductDetailsTabText';
import AboutProductCommonTabText from '../../components/AboutProductTabs/AboutProductCommonTabText/AboutProductCommonTabText';
import AboutProductImage from '../../components/AboutProductTabs/AboutProductImage/AboutProductImage';
import { onHandleCart } from '../../store/actionCreators/cartAC';

import Button from '../../components/Button/Button';
import { getProduct } from '../../store/actionCreators/productsAC';
import Advantages from '../../components/Advantages/Advantages';
import numberWithSpaces from '../../utils/numberWithSpaces';

import styles from './AboutProductPage.module.scss';

function AboutProductPage() {
  const dispatch = useDispatch();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState('tab1');
  const product = useSelector((state) => state.products.activeProduct);
  const handleToggleTab = (value) => {
    setActiveTab(value);
  };

  const newLocation = location.pathname.split('/').slice(-1);

  useEffect(() => {
    dispatch(getProduct(newLocation));
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [newLocation[0]]);

  return (
    <div className={styles.aboutProductWrapper}>
      <div className={`${styles.aboutProductTabMenuWrapper} ${styles.aboutProductWrapper}`}>
        <ul className={styles.aboutProductTabMenu}>
          <li className={activeTab === 'tab1' ? `${styles.active}` : ''} role="menuitem" onClick={() => handleToggleTab('tab1')}>
            About Product
          </li>
          <li className={activeTab === 'tab2' ? `${styles.active}` : ''} role="menuitem" onClick={() => handleToggleTab('tab2')}>
            Details
          </li>
        </ul>
        <div className={styles.aboutProductCartBtnWrapper}>
          <p className={styles.costWrapper}>
            Cost: $
            {numberWithSpaces(product.currentPrice)}
          </p>
          <Button
            type="button"
            className={styles.aboutProductCartBtn}
            handleClick={() => {
              dispatch(onHandleCart(product._id, { ...product, id: product._id }));
            }}
          >
            {' Add to Cart'}
          </Button>
        </div>
      </div>
      <hr className={styles.line} />
      <div className={`${styles.aboutProducTextAndImageWrapper} ${styles.aboutProductWrapper}`}>
        <div className={styles.aboutProducImageWrapper}>
          <AboutProductImage urls={product.imageUrls} model={product.model} id={product._id} />
        </div>
        <div className={styles.aboutProductTextWrapper}>
          {activeTab === 'tab1' ? <AboutProductCommonTabText product={product} /> : <AboutProductDetailsTabText product={product} />}
        </div>
      </div>
      <div>
        <Advantages />
      </div>
      <ToastNotification position="top-right" hideBar close={false} theme="colored" width="280px" className="toast-container" />
    </div>
  );
}

export default AboutProductPage;
