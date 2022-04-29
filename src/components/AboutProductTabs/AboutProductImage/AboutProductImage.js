/* eslint-disable max-len */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/actionCreators/cartAC';
import addToFavIcon from '../../../assets/images/addToFavIcon.png';
import styles from './AboutProductImage.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function AboutProductImage(props) {
  const { urls, model, id } = props;
  const dispatch = useDispatch();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log(urls);
  return (
    <div className={styles.detailsWrapper}>
      <div role="button" onClick={() => { console.log('Add to Wishlist', id); }} className={styles.addToCartIconWrapper}>
        <img
          src={addToFavIcon}
          alt="Add to Cart Icon"
          className={styles.addToCartIcon}
        />
      </div>
      <div className={styles.imageWrapper}>
        <Slider {...settings}>
          {/* <div><img src={urls[0]} alt={model} className={styles.imageMain} /></div> */}
          {/* <div><img src={urls[1]} alt={model} className={styles.imageMain} /></div> */}
          {urls && urls.map((elem) => <div key={model}><img src={`${elem}`} alt={model} className={styles.imageMain} /></div>)}

        </Slider>
      </div>
    </div>
  );
}

AboutProductImage.propTypes = {
  id: PropTypes.string,
  urls: PropTypes.array,
  model: PropTypes.string,
};

AboutProductImage.defaultProps = {
  id: '',
  urls: [],
  model: '',
};

export default AboutProductImage;
