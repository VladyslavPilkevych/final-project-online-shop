/* eslint react/no-multi-comp: 0, no-console: 0 */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import './FilterPriceSlider.scss';
import { setMinSliderValue, setMaxSliderValue } from '../../store/actionCreators/filterAC';
// import useDebounce from '../../hooks/useDebounce';
// import useThrottle from '../../hooks/useThrottle';

function FilterPriceSlider(props) {
  const { productsItems } = props;
  const dispatch = useDispatch();
  const userMinGlobal = useSelector((state) => state.filter.priceSliderValues.min);
  const userMaxGlobal = useSelector((state) => state.filter.priceSliderValues.max);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  useEffect(() => {
    //  сортировка цен от самой маленькой товара выбраной категории, до самого дорогого
    const priceArray = productsItems.map((item) => item.currentPrice).sort((a, b) => a - b);
    setMinPrice(priceArray[0]);
    setMaxPrice(priceArray[priceArray.length - 1]);
    if (!userMinGlobal && !userMaxGlobal) {
      dispatch(setMinSliderValue(priceArray[0]));
      dispatch(setMaxSliderValue(priceArray[priceArray.length - 1]));
    }
  }, [productsItems, minPrice, maxPrice]);
  function changePriceFn(value) {
    // console.log(value);
    dispatch(setMinSliderValue(value[0]));
    dispatch(setMaxSliderValue(value[1]));
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
        {/* eslint-disable react/jsx-no-bind */}
        {userMinGlobal && userMaxGlobal && (
          <Slider
            range
            allowCross={false}
            min={minPrice} // минимальная цена (самый дешёвый продукт)
            max={maxPrice} // максимальная цены (самый дорогой продукт)
            // value={[userChangeMin, userChangeMax]} // то что юзер выбрал
            // defaultValue={[
            // productsItems.map((item) => item.currentPrice).sort((a, b) => a - b)[0],
            // eslint-disable-next-line max-len
            // productsItems.map((item) => item.currentPrice).sort((a, b) => a - b)[productsItems.length - 1],
            // ]}
            defaultValue={[userMinGlobal, userMaxGlobal]} // стьартовая цена (стартовая цена)
            // onChange={useDebounce(changePriceFn, 500)}
            onAfterChange={changePriceFn}
          />
        )}
        {/* eslint-eneble react/jsx-no-bind */}
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