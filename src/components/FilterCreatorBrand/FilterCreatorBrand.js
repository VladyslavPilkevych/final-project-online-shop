import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './FilterCreatorBrand.module.scss';
import {
  filterBrand,
} from '../../store/actionCreators/filterAC';

function FilterCreatorBrand(props) {
  const { brandsFiltered } = props;
  const dispatch = useDispatch();
  const filterByBrand = useSelector((state) => state.filter.filterByBrand);
  function toggleBrandToRedux(brand) {
    const selectedBrands = [...filterByBrand];
    if (!selectedBrands.includes(brand)) {
      selectedBrands.push(brand);
    } else {
      const index = selectedBrands.findIndex((item) => item === brand);
      selectedBrands.splice(index, 1);
    }
    dispatch(filterBrand(selectedBrands));
  }
  return (
    <ul className={styles.brandsContainer}>
      {brandsFiltered
        && brandsFiltered.map((brand) => (
          <li key={brand} className={styles.brandsLi}>
            <input
              type="checkbox"
              className={styles.brandsCheckbox}
              id={`brand_${brand}`}
              name={`brand_${brand}`}
              checked={filterByBrand.includes(brand)}
              onChange={() => { toggleBrandToRedux(brand); }}
            />
            <label htmlFor={`brand_${brand}`}>{brand}</label>
          </li>
        ))}
    </ul>
  );
}

FilterCreatorBrand.propTypes = {
  brandsFiltered: PropTypes.array,
};

FilterCreatorBrand.defaultProps = {
  brandsFiltered: [],
};

export default memo(FilterCreatorBrand);
