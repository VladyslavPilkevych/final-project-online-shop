/* eslint react/no-multi-comp: 0, no-console: 0 */
import React, { useState } from 'react';
import Slider from 'rc-slider';
import './FilterPriceSlider.scss';
// import '../../assets/index.less';

function FilterPriceSlider() {
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);
  function changePriceFn(value) {
    console.log(value);
    setMin(value[0]);
    setMax(value[1]);
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