import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, NavLink } from 'react-router-dom';
import styles from './FilterPage.module.scss';
import imageFilterPageTop from '../../assets/images/FilterPage/imageFilterPageTop.png';
import FilterContainer from '../../components/FilterContainer/FilterContainer';
import PaginationFilterPage from '../../components/PaginationFilterPage/PaginationFilterPage';
import Button from '../../components/Button/Button';
import useWidth from '../../hooks/useWidth';
import { toggleFiltersCategories } from '../../store/actionCreators/filtersCategoriesAC';
import { getAllProducts } from '../../store/actionCreators/productsAC';
import {
  filterProducts,
  filterCategory,
  setMinSliderValue,
  setMaxSliderValue,
  clearFilterColor,
  filterBrand,
  setFilterPaginationPage,
  getCategorieProducts,
} from '../../store/actionCreators/filterAC';

function FilterPage() {
  const filterItems = useSelector((state) => state.filter.filterProducts);
  const filtersCategories = useSelector((state) => state.filtersCategories.isOpen);
  const filterCategoryProducts = useSelector((state) => state.filter.filterCategoryProducts);
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    // dispatch(getAllProducts());
  }, [filtersCategories]);
  useEffect(() => {
    // eslint-disable-next-line max-len
    // const priceArray = filterCategoryProducts.map((item) => item.currentPrice).sort((a, b) => a - b);
    // dispatch(setMinSliderValue(priceArray[0]));
    // dispatch(setMaxSliderValue(priceArray[priceArray.length - 1]));
    dispatch(setMinSliderValue(null));
    dispatch(setMaxSliderValue(null));
    dispatch(filterBrand([]));
    dispatch(clearFilterColor(null));
    dispatch(filterProducts(`?categories=${location.pathname.split('/')[2]}`));
    dispatch(getCategorieProducts(`?categories=${location.pathname.split('/')[2]}`));
    dispatch(filterCategory(location.pathname.split('/')[2]));
    dispatch(setFilterPaginationPage(0));
  }, [location.pathname]);
  useEffect(() => {
    console.log('123123132123');
    // eslint-disable-next-line max-len
    const priceArray = filterCategoryProducts.map((item) => item.currentPrice).sort((a, b) => a - b);
    dispatch(setMinSliderValue(priceArray[0]));
    dispatch(setMaxSliderValue(priceArray[priceArray.length - 1]));
  }, [filterCategoryProducts]);
  function openFiltersMenuOnPhone() {
    dispatch(toggleFiltersCategories(true));
  }
  const width = useWidth();
  const filtersCategoriesOnPhone = useSelector((state) => state.filtersCategories.isOpen);
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
        {/* {width <= 426 && ( */}
        {width <= 550 && (
          <Button
            handleClick={() => { openFiltersMenuOnPhone(); }}
            className={styles.openFilterOnPhone}
          >
            Filter
          </Button>
        )}
        <div className={styles.filterCreator}>
          <FilterContainer filterProducts={filterItems} />
        </div>
        {/* {width <= 426 && filtersCategoriesOnPhone */}
        {width <= 550 && filtersCategoriesOnPhone
          && (
            <div>
              <FilterContainer
                filterProducts={filterItems}
              />
            </div>
          )}
        <div className={styles.filterItem}>
          {width > 1024
            && (
              <PaginationFilterPage
                filterProducts={filterItems}
                itemsPerPage={15}
              />
            )}
          {width > 768 && width <= 1024
            && (
              <PaginationFilterPage
                filterProducts={filterItems}
                itemsPerPage={12}
              />
            )}
          {width > 425 && width <= 768
            && (
              <PaginationFilterPage
                filterProducts={filterItems}
                itemsPerPage={9}
              />
            )}
          {width <= 425
            && (
              <PaginationFilterPage
                filterProducts={filterItems}
                itemsPerPage={8}
              />
            )}
        </div>
      </div>
    </section>
  );
}

export default memo(FilterPage);
