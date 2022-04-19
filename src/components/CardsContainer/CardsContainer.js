import React, { memo } from 'react';
import styles from './CardsContainer.module.scss';
import CardItem from '../CardItem/CardItem';

function CardsContainer() {
  const content = {
    name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
    currentPrice: '$499.00',
    id: 'wehjnclksu93877hnjekh2y83hkj2332',
    img: './images/sPhone.jpg',
    quantity: 2,
  };
  // img: './images/img.png',
  return (
    <section className={styles.cardContainer}>
      <CardItem itemContent={content} />
    </section>
  );
}

export default memo(CardsContainer);
