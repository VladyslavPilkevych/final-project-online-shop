/* eslint-disable max-len */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/actionCreators/cartAC';
import styles from './AboutProductImage.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function AboutProductImage(props) {
  const { urls, model, id } = props;
  const url = urls[0]?.substring(urls[0].length - 4, urls[0].length) === 'jpeg'
    ? urls[0]?.substring(0, urls[0].length - 6)
    : urls[0]?.substring(0, urls[0].length - 5);
  const settings = {
    // eslint-disable-next-line react/no-unstable-nested-components
    customPaging(i) {
      return (
        <a className={styles.imgminWrapper} href="#">
          <img
            src={urls[0]?.substring(urls[0].length - 4, urls[0].length) === 'jpeg' ? `${url}${i + 1}.jpeg` : `${url}${i + 1}.jpg`}
            alt="model"
            className={styles.imgmin}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.imageSideWrapper}>
      <div className={styles.imageWrapper}>
        <Slider {...settings} id="imageSlider">
          {urls
          && urls.map((elem) => (
            <div key={model} className={styles.imgWrapper}>
              <img src={`${elem}`} alt={model} className={styles.imageMain} />
            </div>
          ))}
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
