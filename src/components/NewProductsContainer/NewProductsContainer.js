import React from 'react';
import Slider from 'react-slick';

import PropTypes from 'prop-types';
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
  return (
    <div>NewProductsContainer</div>
  );
}

export default NewProductsContainer;
