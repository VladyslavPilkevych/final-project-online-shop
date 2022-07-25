/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { colors } from '../../../assets/colors/colors';

import styles from './AboutProductCommonTabText.module.scss';

function AboutProductCommonTabText(props) {
  const {
    product: {
      name, model, description, itemNo, color,
    },
  } = props;

  const allProducts = useSelector((state) => state.products.products);
  // eslint-disable-next-line max-len
  const analogProducts = allProducts.filter((product) => product.name === name && product.model === model);

  const analogProductsWithHexColor = analogProducts?.map((product) => {
    const colorOfProduct = colors.find((currColor) => currColor.name === product.color);
    return {
      ...product,
      rgbColor: colorOfProduct.rgb,
    };
  });

  return (
    <div>
      <h1 className={styles.productTitle}>
        {name}
        &nbsp;
        {model}
      </h1>
      <p className={styles.productDescription}>{description}</p>
      <div className={styles.colorsWrapper}>
        {analogProductsWithHexColor.map((product) => (
          <Link to={`/products/${product.itemNo}`} key={product.itemNo}>
            <div className={product.color === color ? `${styles.activeColor} ${styles.colorItem}` : `${styles.colorItem}`} style={{ backgroundColor: product.rgbColor }} />
          </Link>
        ))}
      </div>
      <p className={styles.itemNo}>
        Article:
        {itemNo}
      </p>
      <p className={styles.contactUsText}>
        Have a Question?&nbsp;
        <a href="/contact-us">Contact us</a>
      </p>
    </div>
  );
}

AboutProductCommonTabText.propTypes = {
  product: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  name: PropTypes.string,
  model: PropTypes.string,
  description: PropTypes.string,
  itemNo: PropTypes.string,
};

AboutProductCommonTabText.defaultProps = {
  product: {},
  name: '',
  model: '',
  description: '',
  itemNo: '',
};

export default AboutProductCommonTabText;
