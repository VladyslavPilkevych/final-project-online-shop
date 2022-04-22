import React, { useEffect, useState, memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './CardItem.module.scss';
import Button from '../Button/Button';

function CardItem(props) {
  const {
    name, currentPrice, id, img, quantity,
  } = props;
  const dispatch = useDispatch();
  const [oldPrice, setOldPrice] = useState(null);
  const [favourite, setFavourite] = useState(false);
  const [inCart, setInCart] = useState(false);
  useEffect(() => {
    // setOldPrice(String(currentPrice.slice(1) * 1.25).split('.')[0]);
  }, []);
  const addToFavourite = () => {
    setFavourite(true);
    console.log('addToFavourite');
  };
  const removeFromFav = () => {
    setFavourite(false);
    console.log('removeFromFav');
  };
  const addToCart = () => {
    setInCart(true);
    console.log('addToCart');
  };
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
      {
        favourite
          ? <img onClick={removeFromFav} role="presentation" className={styles.iconFav} alt="icon favourite" src="./images/removeFromFavIcon.png" />
          : <img onClick={addToFavourite} role="presentation" className={styles.iconFav} alt="icon favourite" src="./images/addToFavIcon.png" />
      }
      <img className={styles.imgProduct} alt="product" src={img} />
      <h3>{name}</h3>
      <span className={styles.oldPrice}>
        $
        {oldPrice}
        .99
      </span>
      <span className={styles.price}>{currentPrice}</span>
      {inCart
        ? (
          <Button style={styles.btnInCart}>
            <p>Already in cart</p>
          </Button>
        )
        : (
          <Button handleClick={addToCart} style={styles.btnCart}>
            <img alt="icon cart" src="./images/cart.png" />
            <p>Add To Cart</p>
          </Button>
        )}
    </div>
  );
}

CardItem.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  // itemContent: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  name: PropTypes.string,
  img: PropTypes.string,
  currentPrice: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  id: PropTypes.string,
  quantity: PropTypes.number,
};

CardItem.defaultProps = {
  name: '',
  img: '',
  currentPrice: 0,
  id: 'null',
  quantity: 0,
};

export default memo(CardItem);
