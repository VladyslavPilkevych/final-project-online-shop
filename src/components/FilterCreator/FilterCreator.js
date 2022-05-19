import React, { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './FilterCreator.module.scss';
import Button from '../Button/Button';
import FilterPriceSlider from '../FilterPriceSlider/FilterPriceSlider';
import swipeUp from '../../assets/icons/filterPage/swipeUp.png';
import swipeDown from '../../assets/icons/filterPage/swipeDown.png';
import { toggleFiltersCategories } from '../../store/actionCreators/filtersCategoriesAC';
import {
  addFilterColor, removeFilterColor, filterBrand, newFilterProducts,
} from '../../store/actionCreators/filterAC';
import { getFilteredProductsApi } from '../../api/api';

function FilterCreator(props) {
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
  const [filterBrands, setFilterBrands] = useState([]);
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
    setApplyFilterBtn(true);
    getCategorieProducts(`?categories=${location.pathname.split('/')[2]}`);
  }, [filter]);
  let brandsFiltered = null;
  if (productsItems) {
    const brands = productsItems.map((i) => i.name);
    brandsFiltered = [...new Set(brands)];
  }
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
        <Button style={styles.clearFilterBtn}>Clear Filter</Button>
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
          && (
            <ul className={styles.brandsContainer}>
              {brandsFiltered
                && brandsFiltered.map((brand) => (
                  <li key={brand} className={styles.brandsLi}>
                    <input
                      type="checkbox"
                      className={styles.brandsCheckbox}
                      id={`brand_${brand}`}
                      name={`brand_${brand}`}
                      onChange={() => {
                        setFilterBrands((prevState) => {
                          if (!prevState.includes(brand)) {
                            prevState.push(brand);
                          } else {
                            const index = prevState.findIndex((item) => item === brand);
                            prevState.splice(index, 1);
                          }
                          return prevState;
                        });
                        dispatch(filterBrand(filterBrands));
                      }}
                    />
                    <label htmlFor={`brand_${brand}`}>{brand}</label>
                  </li>
                ))}
            </ul>
          )}
        {/* <Button style={styles.clearFilterBtn}>All Brands</Button> */}
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
            <FilterPriceSlider />
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
              {/* <li className={styles.colorsItems} style={{ backgroundColor: 'red' }} />
              <li className={styles.colorsItems} style={{ backgroundColor: 'black' }} /> */}
              <li>
                <Button
                  handleClick={() => {
                    setFilterRedColor((prevState) => !prevState);
                    if (!filterRedColor) {
                      dispatch(addFilterColor('red'));
                    } else {
                      dispatch(removeFilterColor('red'));
                    }
                  }}
                  // eslint-disable-next-line max-len
                  style={classnames(styles.colorsItems, styles.redColor, { activeFilterColor: filterRedColor })}
                />
              </li>
              <li>
                <Button
                  handleClick={() => {
                    setFilterBlackColor((prevState) => !prevState);
                    if (!filterBlackColor) {
                      dispatch(addFilterColor('black'));
                    } else {
                      dispatch(removeFilterColor('black'));
                    }
                  }}
                  // eslint-disable-next-line max-len
                  style={classnames(styles.colorsItems, styles.blackColor, { activeFilterColor: filterBlackColor })}
                />
              </li>
              {/* eslint-disable-next-line max-len */}
              {/* {colorsFiltered && colorsFiltered.map((color) => <li key={Math.random()} className={styles.colorsItems} style={{ backgroundColor: color }} />)} */}
            </ul>
          )}
      </div>
      <div className={styles.categoryContainers}>
        {applyFilterBtn
          ? (
            <Button
              style={[styles.applyFilterBtn, styles.applyFilterBtnActive].join(' ')}
              handleClick={() => {
                setApplyFilterBtn(false);
                const filterCreators = {
                  categories: location.pathname.split('/')[2],
                  color: filterByColor,
                  name: filterByBrand,
                  currentPrice: filterPriceSliderValues,
                };
                dispatch(newFilterProducts(filterCreators));
              }}
            >
              Apply Filters
            </Button>
          )
          : <Button style={styles.applyFilterBtn}>Apply Filters</Button>}
      </div>
    </div>
  );
}

FilterCreator.propTypes = {
  filterProducts: PropTypes.array,
};

FilterCreator.defaultProps = {
  filterProducts: [],
};

export default memo(FilterCreator);
