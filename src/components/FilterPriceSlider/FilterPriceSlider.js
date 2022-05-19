/* eslint react/no-multi-comp: 0, no-console: 0 */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'rc-slider';
import './FilterPriceSlider.scss';
import { setMinSliderValue, setMaxSliderValue } from '../../store/actionCreators/filterAC';

function FilterPriceSlider() {
  const dispatch = useDispatch();
  const minGlobal = useSelector((state) => state.filter.priceSliderValues.min);
  const maxGlobal = useSelector((state) => state.filter.priceSliderValues.max);
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);
  function changePriceFn(value) {
    console.log(value);
    setMin(value[0]);
    setMax(value[1]);
    dispatch(setMinSliderValue(value[0]));
    dispatch(setMaxSliderValue(value[1]));
  }
  return (
    <div>
      <div>
        {min && max
          && (
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly' }}>
              <p>
                $
                {min}
              </p>
              <p>-</p>
              <p>
                $
                {max}
              </p>
            </div>
          )}
        {/* eslint-disable react/jsx-no-bind */}
        <Slider
          range
          allowCross={false}
          min={1}
          max={100000}
          defaultValue={[1, 100000]}
          onChange={changePriceFn}
        />
        {/* eslint-eneble react/jsx-no-bind */}
      </div>
    </div>
  );
}

export default FilterPriceSlider;