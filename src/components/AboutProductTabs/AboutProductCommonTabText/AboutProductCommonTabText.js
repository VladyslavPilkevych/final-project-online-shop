import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import styles from './AboutProductCommonTabText.module.scss';

function AboutProductCommonTabText(props) {
  const {
    product: {
      name, model, capacity, storage, color, display, description, itemNo,
    },
  } = props;
  // console.log(name, model, color);

  const allProducts = useSelector((state) => state.products.products);
  // eslint-disable-next-line max-len
  const analogProducts = allProducts.filter((product) => product.name === name && product.model === model);

  const colors = [
    {
      name: 'shale black',
      hex: 'rgb(0, 0, 0)',
    },
    {
      name: 'gold',
      rgb: 'rgb(247, 232, 33)',
    },
    {
      name: 'silver',
      rgb: 'rgb(230, 235, 234)',
    },
    {
      name: 'space gray',
      rgb: 'rgb(185, 185, 185)',
    },
  ];

  const currentColor = colors.filter((colorObj) => colorObj.name === color);
  const colorsOfAnalogProducts = analogProducts.map((product) => product.color);
  console.log('colorsOfAnalogProducts', colorsOfAnalogProducts);
  return (
    <div>
      <h1 className={styles.productTitle}>
        {name}
        {model}
      </h1>
      <p className={styles.productDescription}>{description}</p>
      <div className={styles.colorsWrapper}>
        {colorsOfAnalogProducts.map((product, index) => (
          // eslint-disable-next-line max-len
          <div className={styles.colorItem} style={{ backgroundColor: product.color }} key={product.color} />

        ))}
      </div>
      <p className={styles.itemNo}>
        Article:
        {itemNo}
      </p>
      <p className={styles.contactUsText}>
        Have a Question?
        <a href="/contact-us">Contact us</a>
      </p>
    </div>
  );
}

AboutProductCommonTabText.propTypes = {
  product: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  name: PropTypes.string,
  model: PropTypes.string,
  capacity: PropTypes.string,
  storage: PropTypes.string,
  color: PropTypes.string,
  display: PropTypes.string,
  description: PropTypes.string,
  itemNo: PropTypes.string,
};

AboutProductCommonTabText.defaultProps = {
  product: {},
  name: '',
  model: '',
  capacity: '',
  storage: '',
  color: '',
  display: '',
  description: '',
  itemNo: '',
};

export default AboutProductCommonTabText;
