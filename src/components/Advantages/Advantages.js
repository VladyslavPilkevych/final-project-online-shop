/* eslint-disable max-len */
import React from 'react';
import styles from './Advantages.module.scss';
import accountIcon from '../../assets/icons/account-icon.png';
import supportIcon from '../../assets/icons/support-icon.png';
import savingIcon from '../../assets/icons/saving-icon.png';

function Advantages() {
  return (
    <div className={styles.advantagesWrapper}>
      <div className={styles.advantagesCard}>
        <img src={accountIcon} className={styles.advantagesIcon} alt="advantages-icon" />
        <h3 className={styles.advantagesTitle}>Product Support</h3>
        <p className={styles.advantagesText}>Up to 3 years on-site warranty available for your peace of mind.</p>
      </div>
      <div className={styles.advantagesCard}>
        <img src={supportIcon} className={styles.advantagesIcon} alt="advantages-icon" />
        <h3 className={styles.advantagesTitle}>Personal Account</h3>
        <p className={styles.advantagesText}>With big discounts, free delivery and a dedicated support specialist.</p>
      </div>
      <div className={styles.advantagesCard}>
        <img src={savingIcon} className={styles.advantagesIcon} alt="advantages-icon" />
        <h3 className={styles.advantagesTitle}>Amazing Savings</h3>
        <p className={styles.advantagesText}>Up to 70% off new Products, you can be sure of the best price.</p>
      </div>
    </div>
  );
}

export default Advantages;
