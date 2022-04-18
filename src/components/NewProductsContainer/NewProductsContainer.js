import React from 'react';
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
  const settings = {
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1398,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
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
    // slidesToShow: 1,
    // slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const newProducts = [
    {
      enabled: true,
      imageUrls: [
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Huawei/huawei-p40-128GB-blush-gold/huawei-p40-128GB-blush-gold_01.jpg',
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Huawei/huawei-p40-128GB-blush-gold/huawei-p40-128GB-blush-gold_02.jpg',
      ],
      quantity: 100,
      _id: '625312856ad189cceeb8b577',
      name: 'Huawei',
      model: 'P40',
      capacity: '128GB',
      storage: '6GB',
      color: 'blush gold',
      display: '6.1',
      categories: 'phones',
      currency: 'UAH',
      currentPrice: 31246,
      previousPrice: null,
      description: "Screen (6.1', OLED, 2340x1080) / Huawei Kirin 990 5G (2 x 2.86 GHz + 2 x 2.36 GHz + 4 x 1.95 GHz) / triple main camera: 50 MP + 16 MP + 8 MP, dual front camera: 32 MP + IR Camera / RAM 8 GB / 128 GB of internal memory / 5 + 50 GB on Huawei Cloud (until 31.12.2020) / 3G / LTE / 5G / GPS / support for 2 SIM-cards (Nano-SIM) / Android 10 (EMUI 10.1 ) / 3800 mAh",
      itemNo: '20000013',
      size: '',
      date: '2022-04-10T17:23:17.007Z',
      __v: 0,
    },
    {
      enabled: true,
      imageUrls: [
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Apple/iphone-13-128GB-white/iphone-13-128GB-white_01.jpg',
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Apple/iphone-13-128GB-white/iphone-13-128GB-white_02.jpg',
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Apple/iphone-13-128GB-white/iphone-13-128GB-white_03.jpg',
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Apple/iphone-13-128GB-white/iphone-13-128GB-white_04.jpg',
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Apple/iphone-13-128GB-white/iphone-13-128GB-white_05.jpg',
      ],
      quantity: 100,
      _id: '625312846ad189cceeb8b56d',
      name: 'Apple iPhone',
      model: '13',
      capacity: '128GB',
      storage: '4GB',
      color: 'white',
      display: '6.1',
      categories: 'phones',
      currency: 'UAH',
      currentPrice: 29999,
      previousPrice: null,
      description: 'Screen: 6.1; OLED (2532x1170 pixels, 460 ppi) Super Retina XDR / built-in memory: 128 GB / RAM 4 GB / processor: Apple A15 Bionic / OS: iOS 15 / 2G, 3G, 4G (LTE), 5G / GPS, A-GPS, GLONASS, Beidou, Galileo, QZSS, NFC / camera: 12 + 12MP + front 12MP / 5x digital zoom, 2x optical zoom / video: 4K UHD (3840x2160), 60fps / moisture protection IP68 / 3240 mAh / 146.7x71.5x7.65 mm / 173 g /',
      itemNo: '20000003',
      size: '',
      date: '2022-04-10T17:23:16.997Z',
      __v: 0,
    },
    {
      enabled: true,
      imageUrls: [
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Huawei/huawei-p40-128GB-blush-gold/huawei-p40-128GB-blush-gold_01.jpg',
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Huawei/huawei-p40-128GB-blush-gold/huawei-p40-128GB-blush-gold_02.jpg',
      ],
      quantity: 100,
      _id: '625312856ad189cceeb8b577',
      name: 'Huawei',
      model: 'P40',
      capacity: '128GB',
      storage: '6GB',
      color: 'blush gold',
      display: '6.1',
      categories: 'phones',
      currency: 'UAH',
      currentPrice: 31246,
      previousPrice: null,
      description: "Screen (6.1', OLED, 2340x1080) / Huawei Kirin 990 5G (2 x 2.86 GHz + 2 x 2.36 GHz + 4 x 1.95 GHz) / triple main camera: 50 MP + 16 MP + 8 MP, dual front camera: 32 MP + IR Camera / RAM 8 GB / 128 GB of internal memory / 5 + 50 GB on Huawei Cloud (until 31.12.2020) / 3G / LTE / 5G / GPS / support for 2 SIM-cards (Nano-SIM) / Android 10 (EMUI 10.1 ) / 3800 mAh",
      itemNo: '20000013',
      size: '',
      date: '2022-04-10T17:23:17.007Z',
      __v: 0,
    },
    {
      enabled: true,
      imageUrls: [
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Huawei/huawei-p40-128GB-blush-gold/huawei-p40-128GB-blush-gold_01.jpg',
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Huawei/huawei-p40-128GB-blush-gold/huawei-p40-128GB-blush-gold_02.jpg',
      ],
      quantity: 100,
      _id: '625312856ad189cceeb8b577',
      name: 'Huawei',
      model: 'P40',
      capacity: '128GB',
      storage: '6GB',
      color: 'blush gold',
      display: '6.1',
      categories: 'phones',
      currency: 'UAH',
      currentPrice: 31246,
      previousPrice: null,
      description: "Screen (6.1', OLED, 2340x1080) / Huawei Kirin 990 5G (2 x 2.86 GHz + 2 x 2.36 GHz + 4 x 1.95 GHz) / triple main camera: 50 MP + 16 MP + 8 MP, dual front camera: 32 MP + IR Camera / RAM 8 GB / 128 GB of internal memory / 5 + 50 GB on Huawei Cloud (until 31.12.2020) / 3G / LTE / 5G / GPS / support for 2 SIM-cards (Nano-SIM) / Android 10 (EMUI 10.1 ) / 3800 mAh",
      itemNo: '20000013',
      size: '',
      date: '2022-04-10T17:23:17.007Z',
      __v: 0,
    },
    {
      enabled: true,
      imageUrls: [
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Samsung/samsung-galaxy-a32-64GB-black/samsung-galaxy-a32-64GB-black_01.jpg',
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Samsung/samsung-galaxy-a32-64GB-black/samsung-galaxy-a32-64GB-black_02.jpg',
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Samsung/samsung-galaxy-a32-64GB-black/samsung-galaxy-a32-64GB-black_03.jpg',
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Samsung/samsung-galaxy-a32-64GB-black/samsung-galaxy-a32-64GB-black_04.jpg',
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Samsung/samsung-galaxy-a32-64GB-black/samsung-galaxy-a32-64GB-black_05.jpg',
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Samsung/samsung-galaxy-a32-64GB-black/samsung-galaxy-a32-64GB-black_06.jpg',
      ],
      quantity: 100,
      _id: '625312856ad189cceeb8b573',
      name: 'Samsung',
      model: 'Galaxy A32',
      capacity: '64GB',
      storage: '4GB',
      color: 'black',
      display: '6.4',
      categories: 'phones',
      currency: 'UAH',
      currentPrice: 8699,
      previousPrice: null,
      description: "Screen (6.4', Super AMOLED, 2400x1080) / Mediatek Helio G80 (2 x 2.0 GHz + 6 x 1.8 GHz) / main quad camera: 64 MP + 8 MP + 5 MP + 5 MP, front camera: 20 MP / RAM 4 GB / 64 GB internal memory + microSD (up to 1 TB) / 3G / LTE / GPS / A-GPS / GLONASS / BDS / support for 2 SIM-cards (Nano-SIM) / Android 11 (One UI) / 5000 mA · hour",
      itemNo: '20000009',
      size: '',
      date: '2022-04-10T17:23:17.003Z',
      __v: 0,
    },
    {
      enabled: true,
      imageUrls: [
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Samsung/samsung-galaxy-a32-64GB-black/samsung-galaxy-a32-64GB-black_01.jpg',
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Samsung/samsung-galaxy-a32-64GB-black/samsung-galaxy-a32-64GB-black_02.jpg',
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Samsung/samsung-galaxy-a32-64GB-black/samsung-galaxy-a32-64GB-black_03.jpg',
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Samsung/samsung-galaxy-a32-64GB-black/samsung-galaxy-a32-64GB-black_04.jpg',
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Samsung/samsung-galaxy-a32-64GB-black/samsung-galaxy-a32-64GB-black_05.jpg',
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Samsung/samsung-galaxy-a32-64GB-black/samsung-galaxy-a32-64GB-black_06.jpg',
      ],
      quantity: 100,
      _id: '625312856ad189cceeb8b573',
      name: 'Samsung',
      model: 'Galaxy A32',
      capacity: '64GB',
      storage: '4GB',
      color: 'black',
      display: '6.4',
      categories: 'phones',
      currency: 'UAH',
      currentPrice: 8699,
      previousPrice: null,
      description: "Screen (6.4', Super AMOLED, 2400x1080) / Mediatek Helio G80 (2 x 2.0 GHz + 6 x 1.8 GHz) / main quad camera: 64 MP + 8 MP + 5 MP + 5 MP, front camera: 20 MP / RAM 4 GB / 64 GB internal memory + microSD (up to 1 TB) / 3G / LTE / GPS / A-GPS / GLONASS / BDS / support for 2 SIM-cards (Nano-SIM) / Android 11 (One UI) / 5000 mA · hour",
      itemNo: '20000009',
      size: '',
      date: '2022-04-10T17:23:17.003Z',
      __v: 0,
    },
    {
      enabled: true,
      imageUrls: [
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Samsung/samsung-galaxy-a32-64GB-black/samsung-galaxy-a32-64GB-black_01.jpg',
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Samsung/samsung-galaxy-a32-64GB-black/samsung-galaxy-a32-64GB-black_02.jpg',
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Samsung/samsung-galaxy-a32-64GB-black/samsung-galaxy-a32-64GB-black_03.jpg',
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Samsung/samsung-galaxy-a32-64GB-black/samsung-galaxy-a32-64GB-black_04.jpg',
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Samsung/samsung-galaxy-a32-64GB-black/samsung-galaxy-a32-64GB-black_05.jpg',
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Samsung/samsung-galaxy-a32-64GB-black/samsung-galaxy-a32-64GB-black_06.jpg',
      ],
      quantity: 100,
      _id: '625312856ad189cceeb8b573',
      name: 'Samsung',
      model: 'Galaxy A32',
      capacity: '64GB',
      storage: '4GB',
      color: 'black',
      display: '6.4',
      categories: 'phones',
      currency: 'UAH',
      currentPrice: 8699,
      previousPrice: null,
      description: "Screen (6.4', Super AMOLED, 2400x1080) / Mediatek Helio G80 (2 x 2.0 GHz + 6 x 1.8 GHz) / main quad camera: 64 MP + 8 MP + 5 MP + 5 MP, front camera: 20 MP / RAM 4 GB / 64 GB internal memory + microSD (up to 1 TB) / 3G / LTE / GPS / A-GPS / GLONASS / BDS / support for 2 SIM-cards (Nano-SIM) / Android 11 (One UI) / 5000 mA · hour",
      itemNo: '20000009',
      size: '',
      date: '2022-04-10T17:23:17.003Z',
      __v: 0,
    },
    {
      enabled: true,
      imageUrls: [
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Samsung/samsung-galaxy-a32-64GB-black/samsung-galaxy-a32-64GB-black_01.jpg',
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Samsung/samsung-galaxy-a32-64GB-black/samsung-galaxy-a32-64GB-black_02.jpg',
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Samsung/samsung-galaxy-a32-64GB-black/samsung-galaxy-a32-64GB-black_03.jpg',
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Samsung/samsung-galaxy-a32-64GB-black/samsung-galaxy-a32-64GB-black_04.jpg',
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Samsung/samsung-galaxy-a32-64GB-black/samsung-galaxy-a32-64GB-black_05.jpg',
        'https://final-project-ecommerce-images.s3.eu-west-3.amazonaws.com/images/phones/Samsung/samsung-galaxy-a32-64GB-black/samsung-galaxy-a32-64GB-black_06.jpg',
      ],
      quantity: 100,
      _id: '625312856ad189cceeb8b573',
      name: 'Samsung',
      model: 'Galaxy A32',
      capacity: '64GB',
      storage: '4GB',
      color: 'black',
      display: '6.4',
      categories: 'phones',
      currency: 'UAH',
      currentPrice: 8699,
      previousPrice: null,
      description: "Screen (6.4', Super AMOLED, 2400x1080) / Mediatek Helio G80 (2 x 2.0 GHz + 6 x 1.8 GHz) / main quad camera: 64 MP + 8 MP + 5 MP + 5 MP, front camera: 20 MP / RAM 4 GB / 64 GB internal memory + microSD (up to 1 TB) / 3G / LTE / GPS / A-GPS / GLONASS / BDS / support for 2 SIM-cards (Nano-SIM) / Android 11 (One UI) / 5000 mA · hour",
      itemNo: '20000009',
      size: '',
      date: '2022-04-10T17:23:17.003Z',
      __v: 0,
    },
  ];

  return (
    <div>
      <div className={styles.newProductsWrapper}>
        <Slider {...settings}>
          {newProducts && newProducts.map((elem) => (
            <CardItem
              name={elem.name}
            // eslint-disable-next-line no-underscore-dangle
              id={elem._id}
            // eslint-disable-next-line no-underscore-dangle
              img={elem.imageUrls[0]}
            // eslint-disable-next-line no-underscore-dangle
              key={elem._id}
              price={elem.currentPrice}
              quantity={50}
              model={elem.model}
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
