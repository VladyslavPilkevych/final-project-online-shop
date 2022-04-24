import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import styles from './AboutProductImage.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function AboutProductImage(props) {
  const { urls, model } = props;
  //   console.log(urls);
  return (
    <div className={styles.imageWrapper}>
      <img src={urls[0]} alt={model} className={styles.imageMain} />
    </div>
  );
}

AboutProductImage.propTypes = {
  urls: PropTypes.array,
  model: PropTypes.string,
};

AboutProductImage.defaultProps = {
  urls: [],
  model: '',
};

export default AboutProductImage;
