import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './FilterPage.module.scss';
import imageFilterPageTop from '../../assets/images/FilterPage/imageFilterPageTop.png';
import FilterCreator from '../../components/FilterCreator/FilterCreator';
import Button from '../../components/Button/Button';
import useWidth from '../../hooks/useWidth';
import { toggleFiltersCategories } from '../../store/actionCreators/filtersCategoriesAC';

function FilterPage() {
  const dispatch = useDispatch();
  const width = useWidth();
  const filtersCategoriesOnPhone = useSelector((state) => state.filtersCategories.isOpen);
  // useEffect(() => {
  //   if (width >= 426) {
  //     dispatch(toggleFiltersCategories(true));
  //   }
  // });
  return (
    <section className={styles.FilterPage}>
      <img alt="img" src={imageFilterPageTop} className={styles.topImg} />
      <ul className={styles.filterPath}>
        <li className={styles.filterPathItems}>Home</li>
        <li className={styles.filterPathItems}>Laptops</li>
      </ul>
      <h2 className={styles.h2FilterName}>MSI PS Series (20)</h2>
      <div className={styles.filter}>
        {width <= 426 && (
          <Button
            handleClick={() => {
              dispatch(toggleFiltersCategories(true));
            }}
            style={styles.openFilterOnPhone}
          >
            Filter
          </Button>
        )}
        <div className={styles.filterCreator}>
          <FilterCreator />
        </div>
        {width <= 426 && filtersCategoriesOnPhone
          && (
            <div>
              <FilterCreator />
            </div>
          )}
        <div className={styles.filterItems}>
          cards
        </div>
      </div>
    </section>
  );
}

export default memo(FilterPage);
