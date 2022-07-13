import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import './FilterPriceSlider.scss';
import { useDebouncedCallback } from 'use-debounce';
import { setMinSliderValue, setMaxSliderValue } from '../../store/actionCreators/filterAC';
// import useDebounce from '../../hooks/useDebounce';
// import useThrottle from '../../hooks/useThrottle';

function FilterPriceSlider(props) {
  const { productsItems } = props;
  const dispatch = useDispatch();
  const userMinGlobal = useSelector((state) => state.filter.priceSliderValues.min);
  const userMaxGlobal = useSelector((state) => state.filter.priceSliderValues.max);
  // const filterCategoryProducts = useSelector((state) => state.filter.filterCategoryProducts);
  // console.log(productsItems === filterCategoryProducts);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [priceValue, setPriceValue] = useState([userMinGlobal, userMaxGlobal]);

  function resetValue() {
    setPriceValue([minPrice, maxPrice]);
  }
  useEffect(() => {
    if (userMinGlobal === minPrice && userMaxGlobal === maxPrice) {
      resetValue();
    }
    const priceArray = productsItems.map((item) => item.currentPrice).sort((a, b) => a - b);
    setMinPrice(priceArray[0]);
    setMaxPrice(priceArray[priceArray.length - 1]);
    // if (!userMinGlobal && !userMaxGlobal) {
    //   dispatch(setMinSliderValue(priceArray[0]));
    //   dispatch(setMaxSliderValue(priceArray[priceArray.length - 1]));
    // }
  }, [productsItems, minPrice, maxPrice, userMinGlobal, userMaxGlobal]);
  // useEffect(() => {
  //   const priceArray = productsItems.map((item) => item.currentPrice).sort((a, b) => a - b);
  //   dispatch(setMinSliderValue(priceArray[0]));
  //   dispatch(setMaxSliderValue(priceArray[priceArray.length - 1]));
  // }, [productsItems]);
  const reduxRequest = useDebouncedCallback((value) => {
    dispatch(setMinSliderValue(value[0]));
    dispatch(setMaxSliderValue(value[1]));
  }, 200);
  function changePriceFn(value) {
    setPriceValue([value[0], value[1]]);
    reduxRequest(value);
  }
  return (
    <div>
      <div>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly' }}>
          <p>
            $
            {userMinGlobal}
          </p>
          <p>-</p>
          <p>
            $
            {userMaxGlobal}
          </p>
        </div>
        {userMinGlobal && userMaxGlobal && (
          <Slider
            range
            value={priceValue}
            allowCross={false}
            min={minPrice}
            max={maxPrice}
            onChange={(value) => { changePriceFn(value); }}
          />
        )}
      </div>
    </div>
  );
}

FilterPriceSlider.propTypes = {
  productsItems: PropTypes.array,
};

FilterPriceSlider.defaultProps = {
  productsItems: [],
};

export default FilterPriceSlider;