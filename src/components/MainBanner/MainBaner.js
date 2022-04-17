import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import MainBanerElem from '../MainBanerElem/MainBanerElem';
import styles from './MainBaner.module.scss';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      role="button"
      tabIndex={0}
      style={{
        ...style,
        display: 'block',
        background: '#252931',
        opacity: '0.5',
        borderRadius: '30px 0px 0px 30px',
        right: '0',
        zIndex: '10',
        width: '20px',
        height: '32px',
        padding: '13px 0px 1px 11px',
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      role="button"
      tabIndex={0}
      style={{
        ...style,
        display: 'block',
        background: '#252931',
        opacity: '0.5',
        borderRadius: '0px 30px 30px 0px',
        left: '0',
        zIndex: '10',
        width: '32px',
        height: '32px',
        paddingTop: '12px',
      }}
      onClick={onClick}
    />
  );
}

export default function MainBaner() {
  const settings = {
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    afterChange(index) {
      console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
    },
    autoplay: true,
    // speed: 2000,
    autoplaySpeed: 5000,
    cssEase: 'ease',
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  // const productsToSlide = getSlidesForBaner()


  return (
    <div className={styles.mainBanerWrapper}>
      <Slider {...settings}>
        {productsToSlide && productsToSlide.map((elem) => (
          <MainBanerElem
            title={elem.title}
            // eslint-disable-next-line no-underscore-dangle
            id={elem._id}
            img={elem.imageUrl}
            // eslint-disable-next-line no-underscore-dangle
            key={elem._id}
            model={elem.product.model}
          />
        ))}
      </Slider>
    </div>
  );
}

SampleNextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.string,
  onClick: PropTypes.func,
};

SampleNextArrow.defaultProps = {
  className: '',
  style: '',
  onClick: () => {},
};
SamplePrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.string,
  onClick: PropTypes.func,
};

SamplePrevArrow.defaultProps = {
  className: '',
  style: '',
  onClick: () => {},
};
