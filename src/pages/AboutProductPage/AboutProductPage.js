/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useMatch, useLocation, useNavigate } from 'react-router-dom';
import AboutProductDetailsTabText from '../../components/AboutProductTabs/AboutProductDetailsTabText/AboutProductDetailsTabText';
import AboutProductCommonTabText from '../../components/AboutProductTabs/AboutProductCommonTabText/AboutProductCommonTabText';
import AboutProductImage from '../../components/AboutProductTabs/AboutProductImage/AboutProductImage';
import addToFavIcon from '../../assets/Images/addToFavIcon.png';
import Button from '../../components/Button/Button';
import { getProduct } from '../../store/actionCreators/productsAC';
import Advantages from '../../components/Advantages/Advantages';

import styles from './AboutProductPage.module.scss';

function AboutProductPage() {
  const [activeTab, setActiveTab] = useState('tab1');
  const product = useSelector((state) => state.products.activeProduct);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleToggleTab = (value) => {
    setActiveTab(value);
  };

  // const handleTab2 = () => {
  //   setActiveTab('tab2');
  // };
  const location = useLocation();
  const newLocation = location.pathname.split('/').slice(-1);
  // console.log(location.pathname);

  useEffect(() => {
    dispatch(getProduct(...newLocation));
  }, []);

  return (
    <>
      {/* <div>
        AboutProductPage
        {product.imageUrls}
        <p>{product.name}</p>
        <p>{product.model}</p>
        <p>{product.quantity}</p>
        <p>{product.storage}</p>
        <p>{product.color}</p>
        <p>{product.display}</p>
        <p>{product.currentPrice}</p>
        <p>{product.previousPrice}</p>
      </div> */}
      {/* <div className={styles.goBackBtn}>
        <Button style={styles.aboutProductCartBtn} handleClick={() => navigate(-1)}>Go Back</Button>
      </div> */}
      <hr className={styles.line} />
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
          <div className={styles.priceWrapper}>
            <p className={styles.priceTitle}>Price:</p>
            <p className={styles.priceAmount}>
              {product.currency}
              {product.currentPrice}
            </p>
          </div>
          <button type="button" className={styles.aboutProductCartBtn} onClick={() => console.log('Add to Cart', product._id)}>
            Add to Cart
          </button>
        </div>
      </div>
      <hr className={styles.line} />
      <div className={`${styles.aboutProducTextAndImageWrapper} ${styles.aboutProductWrapper}`}>
        <div className={styles.aboutProductTextWrapper}>
          {activeTab === 'tab1' ? <AboutProductCommonTabText product={product} /> : <AboutProductDetailsTabText product={product} />}
        </div>
        <div
          onClick={() => {
            console.log('Add to Wishlist', product._id);
          }}
          role="button"
          className={styles.addToCartIconWrapper}
        >
          <img src={addToFavIcon} alt="Add to Cart Icon" className={styles.addToCartIcon} />
        </div>
        <div className={styles.aboutProducImageWrapper}>
          <AboutProductImage urls={product.imageUrls} model={product.model} id={product._id} />
        </div>
      </div>
      <div>
        <Advantages />
      </div>
    </>
  );
}

export default AboutProductPage;
