import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './MainBanerElement.module.scss';

function MainBanerElement(props) {
  const {
    title, id, img, model, itemNo,
  } = props;
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        width: '100%',
      }}
      className={styles.mainBannerElemWrapper}
      key={id}
      id={id}
    >
      <div className={styles.titleWrapper}>
        <h1 className={styles.banerTitle}>{model}</h1>
        <p className={styles.banerSubTitle}>{title}</p>
        <Link to={`/products/${itemNo}`}>
          <button
            type="button"
            className={[styles.bannerBtn, styles.btn, styles.btnWhite, styles.btnAnimate].join(' ')}
          >
            SHOP NOW
          </button>
        </Link>
      </div>
    </div>
  );
}
MainBanerElement.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  img: PropTypes.string,
  model: PropTypes.string,
  itemNo: PropTypes.string,
};

MainBanerElement.defaultProps = {
  img: '',
  model: '',
  itemNo: '',
};
export default MainBanerElement;
