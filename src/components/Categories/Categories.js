import React, { useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import CardItem from '../CardItem/CardItem';
import { filterCategory } from '../../store/actionCreators/filterAC';

import styles from './Categories.module.scss';
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
function Categories(props) {
  const { productsCategories, imageSrc } = props;
  const allProducts = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  console.log(allProducts);
  const eachCategory = allProducts.map((product) => {
    if (product.categories === productsCategories) {
      return product;
    }
    return null;
  });
  const resultProducts = eachCategory.filter((element) => element !== null);
  console.log(resultProducts);
  useEffect(() => {
  }, [allProducts]);
  const settings = {
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    // overflow: true,
    responsive: [
      {
        breakpoint: 1398,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    // slidesToShow: 1,
    // slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };
  return (
    <div className={styles.categoriesWrapper}>
      <div className={styles.categories}>
        <div className={styles.categorieImg} style={{ 'background-image': `url(${imageSrc})` }}>
          <h3>{productsCategories}</h3>
          <div
            onClick={() => {
              dispatch(filterCategory(productsCategories));
            }}
            role="button"
            tabIndex={0}
          >
            <NavLink to={`/filter/${productsCategories}`}>
              {/* <NavLink to="/filter"> */}
              See All Products
            </NavLink>
          </div>
        </div>
        {/* <div className={styles.categorieSlider}> */}
        <div className={styles.categoriesSliderWrapper}>
          <Slider {...settings}>
            {resultProducts && resultProducts.map((elem) => (
              <CardItem
                className={styles.cardItemWrapper}
                itemNo={elem.itemNo}
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
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

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

// CategoryProductsContainer.propTypes = {
//   productsCategories: PropTypes.string,
// };

// CategoryProductsContainer.defaultProps = {
//   productsCategories: '',
// };

Categories.propTypes = {
  productsCategories: PropTypes.string,
  imageSrc: PropTypes.string,
};

Categories.defaultProps = {
  productsCategories: '',
  imageSrc: '',
};

export default memo(Categories);