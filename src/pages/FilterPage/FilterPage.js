import React, { memo } from 'react';
import styles from './FilterPage.module.scss';
import imageFilterPageTop from '../../assets/images/FilterPage/imageFilterPageTop.png';
import FilterCreator from '../../components/FilterCreator/FilterCreator';
import Button from '../../components/Button/Button';

function FilterPage() {
  return (
    <section className={styles.FilterPage}>
      <img alt="img" src={imageFilterPageTop} className={styles.topImg} />
      <ul className={styles.filterPath}>
        <li className={styles.filterPathItems}>Home</li>
        <li className={styles.filterPathItems}>Laptops</li>
      </ul>
      <h2 className={styles.h2FilterName}>MSI PS Series (20)</h2>
      <div className={styles.filter}>
        {/* <Button style={styles.openFilterOnPhone}>Filter</Button> */}
        <div className={styles.filterCreator}>
          <FilterCreator />
        </div>
        <div className={styles.filterItems}>
          cards
        </div>
      </div>
    </section>
  );
}

export default memo(FilterPage);
