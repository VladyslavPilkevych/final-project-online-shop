import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import CardItem from '../CardItem/CardItem';

import styles from './NewProductsContainer.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

function NewProductsContainer() {
  const allProducts = useSelector((state) => state.products.products);
  const newProducts = allProducts && allProducts.slice(10, 22);
  useEffect(() => {
  }, [allProducts]);
  const settings = {
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    overflow: false,
    responsive: [
      {
        breakpoint: 1398,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const heightCarousel = '500px';
  return (
    <div>
      <div className={styles.newProductsWrapper}>
        <div className={styles.newProductsTitleWrapper}>
          <h1 className={styles.newProductsTitle}>New Products</h1>
          <a href="/"><p className={styles.newProductsLink}>See All New Products</p></a>
        </div>
        <Slider {...settings}>
          {newProducts && newProducts.map((elem) => (
            <CardItem
              style={{ height: heightCarousel }}
              className={styles.cardItemWrapper}
              name={elem.name}
              // eslint-disable-next-line no-underscore-dangle
              id={elem._id}
              // eslint-disable-next-line no-underscore-dangle
              img={elem.imageUrls[0]}
              // eslint-disable-next-line no-underscore-dangle
              key={elem._id}
              currentPrice={elem.currentPrice}
              quantity={50}
              model={elem.model}
              elementClassName={styles.cardItems}
              itemNo={elem.itemNo}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default NewProductsContainer;

SampleNextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

SampleNextArrow.defaultProps = {
  className: '',
  style: {},
  onClick: () => { },
};
SamplePrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

SamplePrevArrow.defaultProps = {
  className: '',
  style: {},
  onClick: () => { },
};
