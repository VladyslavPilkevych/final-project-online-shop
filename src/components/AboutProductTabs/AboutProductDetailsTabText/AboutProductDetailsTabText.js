import React from 'react';
import PropTypes from 'prop-types';

import styles from './AboutProductDetailsTabText.module.scss';

function AboutProductDetailsTabText(props) {
  const {
    product: {
      // eslint-disable-next-line max-len
      name, model, capacity, storage, display, description, type, size, resolution, matrix, itemNo,
    },
  } = props;
  return (
    <div>
      <h1 className={styles.productTitle}>
        {name}
        {' '}
        {model}
      </h1>
      <ul className={styles.listWrapper}>
        {capacity && <li>{capacity}</li>}
        {resolution && <li>{resolution}</li>}
        {matrix && <li>{matrix}</li>}
        {storage && <li>{storage}</li>}
        {display && <li>{display}</li>}
        {type && <li>{type}</li>}
        {size && <li>{size}</li>}
        {description && description.split('/').map((elem) => elem && <li key={elem}>{elem}</li>)}
      </ul>
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

AboutProductDetailsTabText.propTypes = {
  product: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  name: PropTypes.string,
  model: PropTypes.string,
  capacity: PropTypes.string,
  storage: PropTypes.string,
  display: PropTypes.string,
  description: PropTypes.string,
  itemNo: PropTypes.string,
};

AboutProductDetailsTabText.defaultProps = {
  product: {},
  name: '',
  model: '',
  capacity: '',
  storage: '',
  display: '',
  description: '',
  itemNo: '',
};
export default AboutProductDetailsTabText;
