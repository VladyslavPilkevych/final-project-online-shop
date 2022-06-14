import React, { useEffect, useState, memo } from 'react';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './CardItem.module.scss';
import Button from '../Button/Button';
import imageAddToFavIcon from '../../assets/Images/CardItem/addToFavIcon.png';
import imageCart from '../../assets/Images/CardItem/cart.png';
import imageGreenG from '../../assets/Images/CardItem/greenG.png';
import imageInCart from '../../assets/Images/CardItem/inCart.png';
import imageRedPhone from '../../assets/Images/CardItem/redPhone.png';
import imageRemoveFromFavIcon from '../../assets/Images/CardItem/removeFromFavIcon.png';

function CardItem(props) {
  const {
    name, currentPrice, id, img, quantity, previousPrice, elementClassName, model, itemNo,
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
            <img className={styles.iconAvailable} alt="icon available" src={imageGreenG} />
            {' '}
            in stock
          </p>
        )
        : (
          <p className={`${styles.available} ${styles.notAvaliable}`}>
            <img className={styles.iconAvailable} alt="icon not available" src={imageRedPhone} />
            {' '}
            check availability
          </p>
        )}
      {
        favourite
          ? <img onClick={removeFromFav} role="presentation" className={styles.iconFav} alt="icon favourite" src={imageRemoveFromFavIcon} />
          : <img onClick={addToFavourite} role="presentation" className={styles.iconFav} alt="icon favourite" src={imageAddToFavIcon} />
      }
      <div className={styles.imageContainer}>
        <Link className={styles.linksToCardPage} to={`/products/${itemNo}`}>
          <img className={styles.imgProduct} alt="product" src={img} />
        </Link>
      </div>
      <Link className={styles.linksToCardPage} to={`/products/${itemNo}`}>
        <h3 className={styles.productName}>{name}</h3>
      </Link>
      <Link className={styles.linksToCardPage} to={`/products/${itemNo}`}>
        <h2 className={styles.productModel}>{model}</h2>
      </Link>
      {previousPrice !== 0 && <span className={styles.previousPrice}>{previousPrice}</span>}
      <span className={styles.price}>{currentPrice}</span>
      <div className={styles.btnCartContainer}>
        {inCart
          ? (
            <Button style={`${styles.btnCart} ${styles.btnInCart}`}>
              <img alt="icon cart" src={imageInCart} />
              <p>Already in cart</p>
            </Button>
          )
          : (
            <Button handleClick={addToCart} style={styles.btnCart}>
              <img alt="icon cart" src={imageCart} />
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
  itemNo: PropTypes.string.isRequired,
  name: PropTypes.string,
  img: PropTypes.string,
  currentPrice: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  previousPrice: PropTypes.number,
  elementClassName: PropTypes.string,
  model: PropTypes.string,
};

CardItem.defaultProps = {
  name: '',
  img: '',
  currentPrice: 0,
  quantity: 0,
  previousPrice: 0,
  elementClassName: '',
  model: '',
};

export default memo(CardItem);