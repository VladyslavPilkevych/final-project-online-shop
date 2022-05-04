import React, { memo } from 'react';
import styles from './CardsContainer.module.scss';
import CardItem from '../CardItem/CardItem';

function CardsContainer() {
  const name = 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...';
  const currentPrice = '$499.00';
  const id = 'wehjnclksu93877hnjekh2y83hkj2332';
  const img = './images/sPhone.jpg';
  const quantity = 2;
  return (
    <section className={styles.cardContainer}>
      <CardItem name={name} currentPrice={currentPrice} id={id} img={img} quantity={quantity} />
      <CardItem name={name} currentPrice={currentPrice} id={id} img={img} quantity={quantity} />
      <CardItem name={name} currentPrice={currentPrice} id={id} img={img} quantity={quantity} />
      <CardItem name={name} currentPrice={currentPrice} id={id} img={img} quantity={quantity} />
      <CardItem name={name} currentPrice={currentPrice} id={id} img={img} quantity={quantity} />
      <CardItem name={name} currentPrice={currentPrice} id={id} img={img} quantity={quantity} />
      <CardItem name={name} currentPrice={currentPrice} id={id} img={img} quantity={quantity} />
      <CardItem name={name} currentPrice={currentPrice} id={id} img={img} quantity={quantity} />
      <CardItem name={name} currentPrice={currentPrice} id={id} img={img} quantity={quantity} />
      <CardItem name={name} currentPrice={currentPrice} id={id} img={img} quantity={quantity} />
      <CardItem name={name} currentPrice={currentPrice} id={id} img={img} quantity={quantity} />
      <CardItem name={name} currentPrice={currentPrice} id={id} img={img} quantity={quantity} />
      <CardItem name={name} currentPrice={currentPrice} id={id} img={img} quantity={quantity} />
    </section>
  );
}

export default memo(CardsContainer);