import React, { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './FilterContainer.module.scss';
import Button from '../Button/Button';
import FilterPriceSlider from '../FilterPriceSlider/FilterPriceSlider';
import FilterCreatorBrand from '../FilterCreatorBrand/FilterCreatorBrand';
import swipeUp from '../../assets/icons/filterPage/swipeUp.png';
import swipeDown from '../../assets/icons/filterPage/swipeDown.png';
import { toggleFiltersCategories } from '../../store/actionCreators/filtersCategoriesAC';
import FilterCreatorColor from '../FilterCreatorColor/FilterCreatorColor';
import {
  addFilterColor,
  removeFilterColor,
  filterBrand,
  newFilterProducts,
  setMinSliderValue,
  setMaxSliderValue,
  clearFilterColor,
  setFilterPaginationPage,
  getCategorieProducts,
} from '../../store/actionCreators/filterAC';

function FilterContainer() {
  const dispatch = useDispatch();
  const location = useLocation();
  const filter = useSelector((state) => state.filter);
  const {
    filterByColor,
    filterByBrand,
    filterPriceSliderValues,
    filterCategoryProducts,
  } = useSelector((state) => state.filter);
  const [isOpenFilterBrands, setIsOpenFilterBrands] = useState(false);
  const [filterPrice, setFilterPrice] = useState(false);
  const [isOpenFilterColor, setIsOpenFilterColor] = useState(false);
  const [applyFilterBtn, setApplyFilterBtn] = useState(false);
  const [brandsFiltered, setBrandsFiltered] = useState(null);

  useEffect(() => {
    dispatch(getCategorieProducts(`?categories=${location.pathname.split('/')[2]}`));
  }, [location.pathname]);
  useEffect(() => {
    setApplyFilterBtn(true);
  }, [filter]);
  useEffect(() => {
    if (filterCategoryProducts) {
      const brands = filterCategoryProducts.map((i) => i.name);
      setBrandsFiltered([...new Set(brands)].sort());
    }
  }, [filterCategoryProducts]);
  const clearFilterFn = () => {
    const priceArray = filterCategoryProducts.map(
      (item) => item.currentPrice,
    ).sort((a, b) => a - b);
    dispatch(setMinSliderValue(priceArray[0]));
    dispatch(setMaxSliderValue(priceArray[priceArray.length - 1]));
    dispatch(filterBrand([]));
    dispatch(clearFilterColor(null));
  };
  const applyFilterFn = () => {
    setApplyFilterBtn(false);
    const filterCreators = {
      categories: location.pathname.split('/')[2],
      color: filterByColor,
      name: filterByBrand,
      currentPrice: filterPriceSliderValues,
    };
    dispatch(newFilterProducts(filterCreators));
    dispatch(setFilterPaginationPage(0));
  };
  function closeFiltersMenuOnPhone() {
    dispatch(toggleFiltersCategories(false));
  }
  function toggleToShowFilterBrands() {
    setIsOpenFilterBrands((prevState) => !prevState);
  }
  function toggleToShowFilterPrice() {
    setFilterPrice((prevState) => !prevState);
  }
  function toggleToShowFilterColor() {
    setIsOpenFilterColor((prevState) => !prevState);
  }
  return (
    <div className={styles.filterCreator}>
      <div className={styles.categoryContainers}>
        <p className={styles.filtersTopP}>Filters</p>
        <div className={styles.filtersTopPhone}>
          <p className={styles.filtersTopPhoneP}>Filter By</p>
          <div
            onClick={() => closeFiltersMenuOnPhone()}
            role="button"
            tabIndex={0}
            className={styles.filtersPhoneX}
          >
            ✖
          </div>
        </div>
        <Button
          className={styles.clearFilterBtn}
          handleClick={clearFilterFn}
        >
          Clear Filter
        </Button>
      </div>
      <div className={styles.categoryContainers}>
        <div
          onClick={() => toggleToShowFilterBrands()}
          role="button"
          tabIndex={0}
          className={styles.twiceItems}
        >
          <p className={styles.categoryName}>Brands</p>
          <img src={swipeDown} className={styles.swiper} alt="swipeDown" />
        </div>
        {isOpenFilterBrands && brandsFiltered
          && <FilterCreatorBrand brandsFiltered={brandsFiltered} />}
      </div>
      <div className={styles.categoryContainers}>
        <div
          onClick={() => toggleToShowFilterPrice()}
          role="button"
          tabIndex={0}
          className={styles.twiceItems}
        >
          <p className={styles.categoryName}>Price</p>
          <img src={swipeDown} className={styles.swiper} alt="swipeDown" />
        </div>
        {filterPrice
          && (
            <FilterPriceSlider productsItems={filterCategoryProducts} />
          )}
      </div>
      <div className={styles.categoryContainers}>
        <div
          onClick={() => toggleToShowFilterColor()}
          role="button"
          tabIndex={0}
          className={styles.twiceItems}
        >
          <p className={styles.categoryName}>Color</p>
          <img src={swipeDown} className={styles.swiper} alt="swipeDown" />
        </div>
        {isOpenFilterColor
          && (
            <ul className={styles.colorsContainer}>
              <li>
                <FilterCreatorColor color="red" />
              </li>
              <li>
                <FilterCreatorColor color="black" />
              </li>
              <li>
                <FilterCreatorColor color="grey" />
              </li>
              <li>
                <FilterCreatorColor color="white" />
              </li>
            </ul>
          )}
      </div>
      <div className={styles.categoryContainers}>
        {applyFilterBtn
          ? (
            <Button
              className={[styles.applyFilterBtn, styles.applyFilterBtnActive].join(' ')}
              handleClick={() => { applyFilterFn(); }}
            >
              Apply Filters
            </Button>
          )
          : <Button classNames={styles.applyFilterBtn}>Apply Filters</Button>}
      </div>
    </div>
  );
}

export default memo(FilterContainer);