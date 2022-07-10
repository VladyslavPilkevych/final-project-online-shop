import React from 'react';
import PropTypes from 'prop-types';
import styles from './AboutProductCommonTabText.module.scss';

function AboutProductCommonTabText(props) {
  const {
    product: {
      name, model, capacity, storage, color, display, description, itemNo,
    },
  } = props;
  return (
    <div>
      <h1 className={styles.productTitle}>
        {name}
        {' '}
        {model}
      </h1>
      <p className={styles.productDescription}>
        {description}
      </p>
      <div className={styles.colorsWrapper}>
        <div className={styles.colorItem} styles={{ backgroundColor: `${color}` }} />
        <div className={styles.colorItem} />
        <div className={styles.colorItem} />
      </div>
      <p className={styles.itemNo}>
        Article:
        {' '}
        {itemNo}
      </p>
      <p className={styles.contactUsText}>
        Have a Question?
        {' '}
        <a href="/contact-us">Contact us</a>
      </p>
    </div>
  );
}

AboutProductCommonTabText.propTypes = {
  product: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
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
