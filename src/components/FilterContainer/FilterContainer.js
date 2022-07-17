import React, { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate, createSearchParams } from 'react-router-dom';
import queryString from 'query-string';
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
  // newFilterProducts,
  setMinSliderValue,
  setMaxSliderValue,
  clearFilterColor,
  setFilterPaginationPage,
} from '../../store/actionCreators/filterAC';
import { repackColorsForPage, repackColorsForServer } from '../../utils/repackColor';

function FilterContainer() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const filter = useSelector((state) => state.filter);
  const {
    filterByColor,
    filterByBrand,
    filterPriceSliderValues,
    filterCategoryProducts,
    priceSliderValues,
    filterCategory,
  } = useSelector((state) => state.filter);
  const [isOpenFilterBrands, setIsOpenFilterBrands] = useState(false);
  const [filterPrice, setFilterPrice] = useState(false);
  const [isOpenFilterColor, setIsOpenFilterColor] = useState(false);
  const [brandsFiltered, setBrandsFiltered] = useState(null);
  const [colorsFiltered, setColorsFiltered] = useState(null);

  useEffect(() => {
    if (filterCategoryProducts) {
      const brands = filterCategoryProducts.map((i) => i.name);
      setBrandsFiltered([...new Set(brands)].sort());
      setColorsFiltered(repackColorsForPage(filterCategoryProducts));
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
    dispatch(setFilterPaginationPage(0));
    navigate({
      search: createSearchParams({ categories: filterCategory }).toString(),
    });
  };
  /* eslint-disable */
  const applyFilterFn = () => {
    // const filterCreators = {
    //   categories: location.pathname.split('/')[2],
    //   color: filterByColor,
    //   name: filterByBrand,
    //   currentPrice: {
    //     min: priceSliderValues.min,
    //     max: priceSliderValues.max,
    //   },
    // };
    // ---------------------------------------------------------------------------------
    // if (location.search && queryString.parse(location.search).categories === location.pathname.split('/')[2]) {
    //   const paramsLocationSearch = queryString.parse(location.search);
    //   if (paramsLocationSearch.minPrice || paramsLocationSearch.maxPrice) {
    //     dispatch(setMinSliderValue(paramsLocationSearch.minPrice));
    //     dispatch(setMaxSliderValue(paramsLocationSearch.maxPrice));
    //   }
    //   paramsLocationSearch.name ? dispatch(filterBrand(paramsLocationSearch.name)) : null;
    //   dispatch(clearFilterColor(null));
    //   paramsLocationSearch.color ? dispatch(addFilterColor(repackColorsForPage(paramsLocationSearch.color))) : null;
    // } else {
    //   dispatch(setMinSliderValue(null));
    //   dispatch(setMaxSliderValue(null));
    //   dispatch(filterBrand([]));
    //   dispatch(clearFilterColor(null));
    //   navigate({
    //     search: createSearchParams({
    //       categories: location.pathname.split('/')[2],
    //     }).toString(),
    //   });
    // }
    // ---------------------------------------------------------------------------------
    dispatch(setFilterPaginationPage(0));
    dispatch(toggleFiltersCategories(false));
    const filterCreators = {
      categories: filterCategory,
    };
    repackColorsForServer(filterByColor).length !== 0 ? filterCreators.color = repackColorsForServer(filterByColor) : null;
    console.log(filterByBrand);
    filterByBrand.length !== 0 ? filterCreators.name = filterByBrand : null;
    const priceArray = filterCategoryProducts.map(
      (item) => item.currentPrice,
    ).sort((a, b) => a - b);
    if (priceSliderValues.min !== priceArray[0] || priceSliderValues.max !== priceArray[priceArray.length - 1]) {
      filterCreators.minPrice = priceSliderValues.min;
      filterCreators.maxPrice = priceSliderValues.max;
    }
    navigate({
      search: queryString.stringify(filterCreators),
    });

    // // dispatch(newFilterProducts(filterCreators));
    // const filtersNavigate = {
    //   categories: location.pathname.split('/')[2],
    //   // color: repackColorsForServer(filterByColor).join(),
    //   // name: filterByBrand.join(),
    // };
    // console.log(filterByBrand);
    // console.log(repackColorsForServer(filterByColor));
    // /* eslint-disable */
    // repackColorsForServer(filterByColor).length !== 0 ? filtersNavigate.color = repackColorsForServer(filterByColor) : null;
    // filterByBrand.length !== 0 ? filtersNavigate.name = filterByBrand.join() : null;
    // // priceSliderValues.min === priceArray[0] ? null : filtersNavigate.minPrice = priceSliderValues.min;
    // // priceSliderValues.max === priceArray[priceArray.length - 1] ? null : filtersNavigate.maxPrice = priceSliderValues.max;
    // if (priceSliderValues.min !== priceArray[0] || priceSliderValues.max !== priceArray[priceArray.length - 1]) {
    //   filtersNavigate.minPrice = priceSliderValues.min;
    //   filtersNavigate.maxPrice = priceSliderValues.max;
    // }
    // navigate({
    //   search: createSearchParams(filtersNavigate).toString(),
    // });
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
            <ul>
              {colorsFiltered
                && colorsFiltered.map((color) => <FilterCreatorColor key={color} color={color} />)}
            </ul>
          )}
      </div>
      <div className={styles.categoryContainers}>
        <Button
          className={[styles.applyFilterBtn, styles.applyFilterBtnActive].join(' ')}
          handleClick={() => { applyFilterFn(); }}
        >
          Apply Filters
        </Button>
      </div>
    </div>
  );
}

export default memo(FilterContainer);
