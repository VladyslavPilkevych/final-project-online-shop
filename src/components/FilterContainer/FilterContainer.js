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
} from '../../store/actionCreators/filterAC';
import { getFilteredProductsApi } from '../../api/api';

function FilterContainer(props) {
  const { filterProducts } = props;
  const dispatch = useDispatch();
  const location = useLocation();
  const filter = useSelector((state) => state.filter);
  const filterByColor = useSelector((state) => state.filter.filterByColor);
  const filterByBrand = useSelector((state) => state.filter.filterByBrand);
  const filterPriceSliderValues = useSelector((state) => state.filter.priceSliderValues);
  const [isOpenFilterBrands, setIsOpenFilterBrands] = useState(false);
  const [filterPrice, setFilterPrice] = useState(false);
  const [isOpenFilterColor, setIsOpenFilterColor] = useState(false);
  const [filterRedColor, setFilterRedColor] = useState(false);
  const [filterBlackColor, setFilterBlackColor] = useState(false);
  const [filterGrayColor, setFilterGrayColor] = useState(false);
  const [filterWhiteColor, setFilterWhiteColor] = useState(false);
  const [applyFilterBtn, setApplyFilterBtn] = useState(false);
  const [productsItems, setProductsItems] = useState([]);

  async function getCategorieProducts(url) {
    await getFilteredProductsApi(url)
      .then((rsp) => {
        if (rsp.status === 200) {
          setProductsItems(rsp.data.products);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getCategorieProducts(`?categories=${location.pathname.split('/')[2]}`);
  }, [location.pathname]);
  useEffect(() => {
    setApplyFilterBtn(true);
  }, [filter]);
  useEffect(() => {
    if (filterByColor.length === 0) {
      setFilterRedColor(false);
      setFilterBlackColor(false);
      setFilterGrayColor(false);
      setFilterWhiteColor(false);
    }
  }, [filterByColor]);
  let brandsFiltered = null;
  if (productsItems) {
    const brands = productsItems.map((i) => i.name);
    brandsFiltered = [...new Set(brands)];
    brandsFiltered.sort();
  }
  const clearFilterFn = () => {
    console.log('filter creator must start cleaning');
    const priceArray = productsItems.map((item) => item.currentPrice).sort((a, b) => a - b);
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
  return (
    <div className={styles.filterCreator}>
      {/* <div className={[styles.topItems, styles.categoryContainers].join(' ')}> */}
      <div className={styles.categoryContainers}>
        <p className={styles.filtersTopP}>Filters</p>
        <div className={styles.filtersTopPhone}>
          <p className={styles.filtersTopPhoneP}>Filter By</p>
          <div
            onClick={() => {
              dispatch(toggleFiltersCategories(false));
            }}
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
          onClick={() => {
            setIsOpenFilterBrands((prevState) => !prevState);
          }}
          role="button"
          tabIndex={0}
          className={styles.twiceItems}
        >
          <p className={styles.categoryName}>Brands</p>
          <img src={swipeDown} className={styles.swiper} alt="swipeDown" />
        </div>
        {isOpenFilterBrands
          && <FilterCreatorBrand brandsFiltered={brandsFiltered} />}
      </div>
      <div className={styles.categoryContainers}>
        <div
          onClick={() => {
            setFilterPrice((prevState) => !prevState);
          }}
          role="button"
          tabIndex={0}
          className={styles.twiceItems}
        >
          <p className={styles.categoryName}>Price</p>
          <img src={swipeDown} className={styles.swiper} alt="swipeDown" />
        </div>
        {filterPrice
          && (
            <FilterPriceSlider productsItems={productsItems} />
          )}
      </div>
      <div className={styles.categoryContainers}>
        <div
          onClick={() => {
            setIsOpenFilterColor((prevState) => !prevState);
          }}
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
              handleClick={applyFilterFn}
            >
              Apply Filters
            </Button>
          )
          : <Button classNames={styles.applyFilterBtn}>Apply Filters</Button>}
      </div>
    </div>
  );
}

FilterContainer.propTypes = {
  filterProducts: PropTypes.array,
};

FilterContainer.defaultProps = {
  filterProducts: [],
};

export default memo(FilterContainer);
