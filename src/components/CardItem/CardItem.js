import React, { useEffect, useState, memo } from 'react';
import PropTypes from 'prop-types';
import styles from './CardItem.module.scss';
import Button from '../Button/Button';

function CardItem(props) {
  const {
    itemContent: {
      name, price, id, img, quantity,
    },
  } = props;
  const [oldPrice, setOldPrice] = useState(null);
  useEffect(() => {
    setOldPrice(String(price.slice(1) * 1.25).split('.')[0]);
  }, []);
  return (
    <div id={id} className={styles.productItem}>
      {quantity
        ? (
          <p className={styles.available}>
            <img className={styles.iconAvailable} alt="icon available" src="./images/greenG.png" />
            {' '}
            in stock
          </p>
        )
        : (
          <p className={`${styles.available} ${styles.notAvaliable}`}>
            <img className={styles.iconAvailable} alt="icon not available" src="./images/redPhone.png" />
            {' '}
            check availability
          </p>
        )}

      <img className={styles.iconFav} alt="icon favourite" src="./images/icon.png" />
      <img className={styles.imgProduct} alt="product" src={img} />
      <h3>{name}</h3>
      <span className={styles.oldPrice}>
        $
        {oldPrice}
        .99
      </span>
      <span className={styles.price}>{price}</span>
      <Button style={styles.btnCart}>
        {' '}
        <img alt="icon cart" src="./images/cart.png" />
        {' '}
        Add To Cart
      </Button>
    </div>
  );
}

CardItem.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  itemContent: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  name: PropTypes.string,
  price: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  id: PropTypes.number,
  quantity: PropTypes.number,
};

CardItem.defaultProps = {
  name: '',
  price: 0,
  id: null,
  quantity: 0,
};

export default memo(CardItem);
