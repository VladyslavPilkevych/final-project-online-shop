import React, { useEffect, useState, memo } from 'react';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
import styles from './CardItem.module.scss';
import Button from '../Button/Button';

function CardItem(props) {
  const {
    name, currentPrice, id, img, quantity, previousPrice, elementClassName,
  } = props;
  // const dispatch = useDispatch();
  // const [previousPrice, setPreviousPrice] = useState(null);
  const [favourite, setFavourite] = useState(false);
  const [inCart, setInCart] = useState(false);
  // useEffect(() => {
  // setpreviousPrice('$' + String(currentPrice.slice(1) * 1.25).split('.')[0] + '.99');
  // }, []);
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
    <div id={id} className={`${styles.productItem} ${elementClassName}`}>
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
      <h3 className={styles.productName}>{name}</h3>
      {previousPrice && <span className={styles.previousPrice}>{previousPrice}</span>}
      <span className={styles.price}>{currentPrice}</span>
      <div className={styles.btnCartContainer}>
        {inCart
          ? (
            <Button style={`${styles.btnCart} ${styles.btnInCart}`}>
              <img alt="icon cart" src="./images/inCart.png" />
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
  id: PropTypes.number,
  quantity: PropTypes.number,
  previousPrice: PropTypes.number,
  elementClassName: PropTypes.string,
};

CardItem.defaultProps = {
  name: '',
  img: '',
  currentPrice: 0,
  id: null,
  quantity: 0,
  previousPrice: 0,
  elementClassName: '',
};

export default memo(CardItem);
