import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, NavLink, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import styles from './FilterPage.module.scss';
import imageFilterPageTop from '../../assets/images/FilterPage/imageFilterPageTop.png';
import FilterContainer from '../../components/FilterContainer/FilterContainer';
import PaginationFilterPage from '../../components/PaginationFilterPage/PaginationFilterPage';
import Button from '../../components/Button/Button';
import useWidth from '../../hooks/useWidth';
import { toggleFiltersCategories } from '../../store/actionCreators/filtersCategoriesAC';
import {
  filterProducts,
  filterCategory,
  setMinSliderValue,
  setMaxSliderValue,
  clearFilterColor,
  filterBrand,
  setFilterPaginationPage,
  getCategorieProducts,
  addFilterColor,
  newFilterProducts,
} from '../../store/actionCreators/filterAC';
import { repackColorsForPage } from '../../utils/repackColor';

function FilterPage() {
  const filtersCategories = useSelector((state) => state.filtersCategories.isOpen);
  const filterItems = useSelector((state) => state.filter.filterProducts);
  const {
    filterCategoryProducts,
    pageURL,
  } = useSelector((state) => state.filter);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [filtersCategories]);
  useEffect(() => {
    if (pageURL) {
      navigate({
        search: pageURL,
      });
    }
  }, [pageURL]);
  useEffect(() => {
    if (!location.search || queryString.parse(location.search).categories !== location.pathname.split('/')[2]) {
      dispatch(setMinSliderValue(null));
      dispatch(setMaxSliderValue(null));
      dispatch(filterBrand([]));
      dispatch(clearFilterColor(null));
      dispatch(filterProducts(`?categories=${location.pathname.split('/')[2]}`));
      dispatch(getCategorieProducts(`?categories=${location.pathname.split('/')[2]}`));
      dispatch(filterCategory(location.pathname.split('/')[2]));
      dispatch(setFilterPaginationPage(0));
    }
  }, [location.pathname]);
  useEffect(() => {
    if (!location.search
      && !queryString.parse(location.search).minPrice
      && !queryString.parse(location.search).maxPrice) {
      const priceArray = filterCategoryProducts.map((i) => i.currentPrice).sort((a, b) => a - b);
      dispatch(setMinSliderValue(priceArray[0]));
      dispatch(setMaxSliderValue(priceArray[priceArray.length - 1]));
    }
  }, [filterCategoryProducts]);
  function openFiltersMenuOnPhone() {
    dispatch(toggleFiltersCategories(true));
  }
  useEffect(() => {
    if (location.search) {
      dispatch(filterCategory(location.pathname.split('/')[2]));
      dispatch(getCategorieProducts(`?categories=${location.pathname.split('/')[2]}`));
      dispatch(setFilterPaginationPage(0));
      const paramsLocationSearch = queryString.parse(location.search);
      if (paramsLocationSearch.minPrice || paramsLocationSearch.maxPrice) {
        dispatch(setMinSliderValue(paramsLocationSearch.minPrice));
        dispatch(setMaxSliderValue(paramsLocationSearch.maxPrice));
      }
      if (paramsLocationSearch.name) {
        dispatch(filterBrand(paramsLocationSearch.name.split(',')));
      }
      dispatch(clearFilterColor(null));
      if (paramsLocationSearch.color) {
        dispatch(addFilterColor(repackColorsForPage(paramsLocationSearch.color)));
      }
      dispatch(newFilterProducts(paramsLocationSearch));
    }
  }, []);
  useEffect(() => {
    if (location.search) {
      const paramsLocationSearch = queryString.parse(location.search);
      dispatch(newFilterProducts(paramsLocationSearch));
    }
  }, [location.search]);
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
      <h2 className={styles.h2FilterName}>
        {location.pathname.split('/')[2].toUpperCase()}
        {' '}
        {filterItems && `(${filterItems.length})`}
      </h2>
      <div className={styles.filter}>
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
