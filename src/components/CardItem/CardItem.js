import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './CardItem.module.scss';
import Button from '../Button/Button';

import { onHandleCart } from '../../store/actionCreators/cartAC';
import numberWithSpaces from '../../utils/numberWithSpaces';

import imageAddToFavIcon from '../../assets/images/CardItem/addToFavIcon.png';
import imageGreenG from '../../assets/images/CardItem/greenG.png';
import imageRedPhone from '../../assets/images/CardItem/redPhone.png';
import imageRemoveFromFavIcon from '../../assets/images/CardItem/removeFromFavIcon.png';

function CardItem(props) {
  const {
    name,
    currentPrice,
    id,
    img,
    quantity,
    previousPrice,
    elementClassName,
    model,
    itemNo,
  } = props;
  const [favourite, setFavourite] = useState(false);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const addToFavourite = () => {
    setFavourite(true);
  };
  const removeFromFav = () => {
    setFavourite(false);
  };
  return (
    <div id={id} className={`${styles.productItem} ${elementClassName}`}>
      {quantity ? (
        <p className={styles.available}>
          <img className={styles.iconAvailable} alt="icon available" src={imageGreenG} />
          in stock
        </p>
      ) : (
        <p className={`${styles.available} ${styles.notAvaliable}`}>
          <img className={styles.iconAvailable} alt="icon not available" src={imageRedPhone} />
          check availability
        </p>
      )}
      {favourite ? (
        <img onClick={removeFromFav} role="presentation" className={styles.iconFav} alt="icon favourite" src={imageRemoveFromFavIcon} />
      ) : (
        <img onClick={addToFavourite} role="presentation" className={styles.iconFav} alt="icon favourite" src={imageAddToFavIcon} />
      )}
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
      <span className={styles.price}>
        $
        {numberWithSpaces(currentPrice)}
      </span>
      <div className={styles.btnCartContainer}>
        {!user ? (
          <Button className={styles.btnCart}>
            <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.4574 16.6667C12.01 16.6667 12.5399 16.4472 12.9306 16.0565C13.3213 15.6658 13.5408 15.1359 13.5408 14.5833C13.5408 14.0308 13.3213 13.5009 12.9306 13.1102C12.5399 12.7195 12.01 12.5 11.4574 12.5C10.9049 12.5 10.375 12.7195 9.9843 13.1102C9.59359 13.5009 9.3741 14.0308 9.3741 14.5833C9.3741 15.1359 9.59359 15.6658 9.9843 16.0565C10.375 16.4472 10.9049 16.6667 11.4574 16.6667ZM4.16577 16.6667C4.7183 16.6667 5.24821 16.4472 5.63891 16.0565C6.02961 15.6658 6.2491 15.1359 6.2491 14.5833C6.2491 14.0308 6.02961 13.5009 5.63891 13.1102C5.24821 12.7195 4.7183 12.5 4.16577 12.5C3.61323 12.5 3.08333 12.7195 2.69263 13.1102C2.30193 13.5009 2.08243 14.0308 2.08243 14.5833C2.08243 15.1359 2.30193 15.6658 2.69263 16.0565C3.08333 16.4472 3.61323 16.6667 4.16577 16.6667ZM17.747 2.00312C18.0071 1.99474 18.2536 1.88554 18.4346 1.69863C18.6156 1.51171 18.7168 1.26174 18.7168 1.00156C18.7168 0.741387 18.6156 0.491411 18.4346 0.304497C18.2536 0.117584 18.0071 0.0083873 17.747 0H16.5481C15.6085 0 14.796 0.652083 14.5918 1.56875L13.2866 7.44583C13.0824 8.3625 12.2699 9.01458 11.3304 9.01458H3.50535L2.00327 3.00417H11.7376C11.9952 2.99241 12.2384 2.88181 12.4165 2.69537C12.5946 2.50892 12.694 2.26099 12.694 2.00312C12.694 1.74526 12.5946 1.49733 12.4165 1.31088C12.2384 1.12444 11.9952 1.01384 11.7376 1.00208H2.00327C1.69875 1.00199 1.39823 1.07133 1.12453 1.20483C0.850839 1.33832 0.611185 1.53246 0.423786 1.77248C0.236388 2.01251 0.106178 2.29209 0.0430578 2.59C-0.0200627 2.8879 -0.0144327 3.19627 0.0595186 3.49167L1.5616 9.5C1.66989 9.93354 1.92003 10.3184 2.27224 10.5934C2.62444 10.8684 3.05849 11.0178 3.50535 11.0177H11.3304C12.242 11.0178 13.1265 10.707 13.8376 10.1366C14.5488 9.56612 15.0441 8.77019 15.2418 7.88021L16.5481 2.00312H17.747Z" fill="#0156ff" />
            </svg>
            <p>Add To Cart</p>
          </Button>
        ) : (
          <Button
            type="button"
            className={styles.btnCart}
            handleClick={() => {
              dispatch(onHandleCart(id));
            }}
          >
            <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.4574 16.6667C12.01 16.6667 12.5399 16.4472 12.9306 16.0565C13.3213 15.6658 13.5408 15.1359 13.5408 14.5833C13.5408 14.0308 13.3213 13.5009 12.9306 13.1102C12.5399 12.7195 12.01 12.5 11.4574 12.5C10.9049 12.5 10.375 12.7195 9.9843 13.1102C9.59359 13.5009 9.3741 14.0308 9.3741 14.5833C9.3741 15.1359 9.59359 15.6658 9.9843 16.0565C10.375 16.4472 10.9049 16.6667 11.4574 16.6667ZM4.16577 16.6667C4.7183 16.6667 5.24821 16.4472 5.63891 16.0565C6.02961 15.6658 6.2491 15.1359 6.2491 14.5833C6.2491 14.0308 6.02961 13.5009 5.63891 13.1102C5.24821 12.7195 4.7183 12.5 4.16577 12.5C3.61323 12.5 3.08333 12.7195 2.69263 13.1102C2.30193 13.5009 2.08243 14.0308 2.08243 14.5833C2.08243 15.1359 2.30193 15.6658 2.69263 16.0565C3.08333 16.4472 3.61323 16.6667 4.16577 16.6667ZM17.747 2.00312C18.0071 1.99474 18.2536 1.88554 18.4346 1.69863C18.6156 1.51171 18.7168 1.26174 18.7168 1.00156C18.7168 0.741387 18.6156 0.491411 18.4346 0.304497C18.2536 0.117584 18.0071 0.0083873 17.747 0H16.5481C15.6085 0 14.796 0.652083 14.5918 1.56875L13.2866 7.44583C13.0824 8.3625 12.2699 9.01458 11.3304 9.01458H3.50535L2.00327 3.00417H11.7376C11.9952 2.99241 12.2384 2.88181 12.4165 2.69537C12.5946 2.50892 12.694 2.26099 12.694 2.00312C12.694 1.74526 12.5946 1.49733 12.4165 1.31088C12.2384 1.12444 11.9952 1.01384 11.7376 1.00208H2.00327C1.69875 1.00199 1.39823 1.07133 1.12453 1.20483C0.850839 1.33832 0.611185 1.53246 0.423786 1.77248C0.236388 2.01251 0.106178 2.29209 0.0430578 2.59C-0.0200627 2.8879 -0.0144327 3.19627 0.0595186 3.49167L1.5616 9.5C1.66989 9.93354 1.92003 10.3184 2.27224 10.5934C2.62444 10.8684 3.05849 11.0178 3.50535 11.0177H11.3304C12.242 11.0178 13.1265 10.707 13.8376 10.1366C14.5488 9.56612 15.0441 8.77019 15.2418 7.88021L16.5481 2.00312H17.747Z" fill="#0156ff" />
            </svg>
            <p>Add To Cart</p>
          </Button>
        )}
      </div>
    </div>
  );
}

CardItem.propTypes = {
  itemNo: PropTypes.string.isRequired,
  name: PropTypes.string,
  img: PropTypes.string,
  currentPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
