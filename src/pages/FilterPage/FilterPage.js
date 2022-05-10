import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, NavLink } from 'react-router-dom';
import styles from './FilterPage.module.scss';
import imageFilterPageTop from '../../assets/images/FilterPage/imageFilterPageTop.png';
import FilterCreator from '../../components/FilterCreator/FilterCreator';
import FilterItems from '../../components/FilterItems/FilterItems';
import Button from '../../components/Button/Button';
import useWidth from '../../hooks/useWidth';
import { toggleFiltersCategories } from '../../store/actionCreators/filtersCategoriesAC';
import { getAllProducts } from '../../store/actionCreators/productsAC';
import { filterProducts } from '../../store/actionCreators/filterAC';

function FilterPage() {
  const filterItems = useSelector((state) => state.filter.filterProducts);
  const location = useLocation();
  const dispatch = useDispatch();
  console.log(`?categories=${location.pathname.split('/')[2]}`);
  useEffect(() => {
    dispatch(getAllProducts());
    // dispatch(filterProducts(`?categories=${location.pathname.split('/')[2]}`));
  }, []);
  useEffect(() => {
    dispatch(filterProducts(`?categories=${location.pathname.split('/')[2]}`));
  }, [filterItems]);
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
        <li className={styles.filterPathItems}>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li className={styles.filterPathItems}>{location.pathname.split('/')[2]}</li>
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
        <div className={styles.filterItem}>
          {width > 1024
            && <FilterItems filterProducts={filterItems} itemsPerPage={15} />}
          {width > 768 && width <= 1024
            && <FilterItems filterProducts={filterItems} itemsPerPage={12} />}
          {width > 425 && width <= 768
            && <FilterItems filterProducts={filterItems} itemsPerPage={9} />}
          {width <= 425
            && <FilterItems filterProducts={filterItems} itemsPerPage={8} />}

        </div>
      </div>
    </section>
  );
}

export default memo(FilterPage);
