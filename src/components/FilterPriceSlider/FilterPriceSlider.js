import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import './FilterPriceSlider.scss';
import { setMinSliderValue, setMaxSliderValue } from '../../store/actionCreators/filterAC';

function FilterPriceSlider(props) {
  const { productsItems } = props;
  const dispatch = useDispatch();
  const userMinGlobal = useSelector((state) => state.filter.priceSliderValues.min);
  const userMaxGlobal = useSelector((state) => state.filter.priceSliderValues.max);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  useEffect(() => {
    const priceArray = productsItems.map((item) => item.currentPrice).sort((a, b) => a - b);
    setMinPrice(priceArray[0]);
    setMaxPrice(priceArray[priceArray.length - 1]);
    if (!userMinGlobal && !userMaxGlobal) {
      dispatch(setMinSliderValue(priceArray[0]));
      dispatch(setMaxSliderValue(priceArray[priceArray.length - 1]));
    }
  }, [productsItems, minPrice, maxPrice]);
  function changePriceFn(value) {
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
        {userMinGlobal && userMaxGlobal && (
          <Slider
            range
            allowCross={false}
            min={minPrice}
            max={maxPrice}
            defaultValue={[userMinGlobal, userMaxGlobal]}
            onAfterChange={(value) => { changePriceFn(value); }}
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