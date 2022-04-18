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

  //   const newSlide = {
  //     customId: "baner-slide-phone-001",
  //     imageUrl: "https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/slides/smartphone_banner_002.jpg",
  //     title: "50% discount for Apple 13 Pro Max!! ",
  //     description: "Do not miss our hot offer. Promotion ends 31/05/2022",
  //     category: "phones"
  //   };
  //   const addSlide = async (newSlide)=>{
  //     const response = await fetch('https://skvonlineshop.herokuapp.com/api/slides', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(newSlide),
  //     });
  // console.log(response);
  //   }

  //   addSlide(newSlide)
  // axios
  //   .post("/slides", newSlide)
  //   .then(newSlide => {
  //     /*Do something with newSlide*/
  //   })
  //   .catch(err => {
  //     /*Do something with error, e.g. show error to user*/
  //   });

  // const productsToSlide = getSlidesForBaner()
  const productsToSlide = [
    {
      _id: '625312856ad189cceeb8b596',
      customId: 'promotion-product-563877',
      imageUrl:
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/slides/smartphone_banner_002.jpg',
      title: "50% discount for 'test product 5' ",
      product: {
        enabled: true,
        imageUrls: [
          'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/laptops/apple/%D0%9D%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA+Apple+MacBook+Air+13+M1+512GB+2020/Space+Gray/MC13-sg-img1.jpg',
          'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/laptops/apple/%D0%9D%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA+Apple+MacBook+Air+13+M1+512GB+2020/Space+Gray/MC13-sg-img2.jpg',
          'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/laptops/apple/%D0%9D%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA+Apple+MacBook+Air+13+M1+512GB+2020/Space+Gray/MC13-sg-img3.jpg',
          'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/laptops/apple/%D0%9D%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA+Apple+MacBook+Air+13+M1+512GB+2020/Space+Gray/MC13-sg-img4.jpg',
          'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/laptops/apple/%D0%9D%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA+Apple+MacBook+Air+13+M1+512GB+2020/Space+Gray/MC13-sg-img5.jpg',
        ],
        quantity: 100,
        _id: '22222222222222222222222',
        name: 'Apple',
        model: 'Samsung MacBook Air 13',
        categories: 'laptop',
        color: 'space gray',
        capacity: '512GB',
        storage: '8GB',
        display: '13.3',
        currency: 'UAH',
        currentPrice: 42999,
        previousPrice: null,
        itemNo: '40000023',
        size: '',
        description: ' 13,3 / IPS / 2560x1600 / Apple M1 / RAM: 8 Gb / 7 core GPU / SSD: 512 Gb / 1,29 kg / OS: macOS Big Sur / space gray ',
        date: '2022-04-10T17:23:17.032Z',
        __v: 0,
      },
      date: '2019-10-16T18:56:04.674Z',
      __v: 0,
    },
    {
      _id: '11111111111111111111111111',
      customId: 'promotion-product-563877',
      imageUrl:
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/slides/smartphone_banner_001.jpg',
      title: "10% discount for 'PRODUCT 1' ",
      product: {
        enabled: true,
        imageUrls: [
          'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/laptops/apple/%D0%9D%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA+Apple+MacBook+Air+13+M1+512GB+2020/Space+Gray/MC13-sg-img1.jpg',
          'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/laptops/apple/%D0%9D%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA+Apple+MacBook+Air+13+M1+512GB+2020/Space+Gray/MC13-sg-img2.jpg',
          'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/laptops/apple/%D0%9D%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA+Apple+MacBook+Air+13+M1+512GB+2020/Space+Gray/MC13-sg-img3.jpg',
          'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/laptops/apple/%D0%9D%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA+Apple+MacBook+Air+13+M1+512GB+2020/Space+Gray/MC13-sg-img4.jpg',
          'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/laptops/apple/%D0%9D%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA+Apple+MacBook+Air+13+M1+512GB+2020/Space+Gray/MC13-sg-img5.jpg',
        ],
        quantity: 100,
        _id: '625312856ad189cceeb8b596',
        name: 'Apple',
        model: 'Apple Iphone 13 Max Pro',
        categories: 'laptop',
        color: 'space gray',
        capacity: '512GB',
        storage: '8GB',
        display: '13.3',
        currency: 'UAH',
        currentPrice: 42999,
        previousPrice: null,
        itemNo: '40000023',
        size: '',
        description: ' 13,3 / IPS / 2560x1600 / Apple M1 / RAM: 8 Gb / 7 core GPU / SSD: 512 Gb / 1,29 kg / OS: macOS Big Sur / space gray ',
        date: '2022-04-10T17:23:17.032Z',
        __v: 0,
      },
      date: '2019-10-16T18:56:04.674Z',
      __v: 0,
    }, {
      _id: '625312856ad189cceeb8b596',
      customId: 'promotion-product-563877',
      imageUrl:
          'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/slides/smartphone_banner_003.jpg',
      title: "50% discount for 'test product 5' ",
      product: {
        enabled: true,
        imageUrls: [
          'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/laptops/apple/%D0%9D%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA+Apple+MacBook+Air+13+M1+512GB+2020/Space+Gray/MC13-sg-img5.jpg',
        ],
        quantity: 100,
        _id: '333333333333333333333',
        name: 'Huawei',
        model: 'HUAWEI',
        categories: 'phones',
        color: 'space gray',
        capacity: '512GB',
        storage: '8GB',
        display: '13.3',
        currency: 'UAH',
        currentPrice: 42999,
        previousPrice: null,
        itemNo: '40000023',
        size: '',
        description: ' 13,3 / IPS / 2560x1600 / Apple M1 / RAM: 8 Gb / 7 core GPU / SSD: 512 Gb / 1,29 kg / OS: macOS Big Sur / space gray ',
        date: '2022-04-10T17:23:17.032Z',
        __v: 0,
      },
      date: '2019-10-16T18:56:04.674Z',
      __v: 0,
    },
  ];

  return (
    <div>
      <div className={styles.mainBanerWrapper}>
        <Slider {...settings}>
          {productsToSlide && productsToSlide.map((elem) => (
            <MainBanerElem
              title={elem.title}
            // eslint-disable-next-line no-underscore-dangle
              id={elem._id}
            // eslint-disable-next-line no-underscore-dangle
              img={elem.imageUrl}
            // eslint-disable-next-line no-underscore-dangle
              key={elem._id}
              model={elem.product.model}
            />
          ))}
        </Slider>
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
  onClick: () => {},
};
SamplePrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

SamplePrevArrow.defaultProps = {
  className: '',
  style: {},
  onClick: () => {},
};
