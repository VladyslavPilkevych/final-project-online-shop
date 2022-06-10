import React, { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './FilterCreatorColor.module.scss';
import Button from '../Button/Button';
import {
  addFilterColor,
  removeFilterColor,
} from '../../store/actionCreators/filterAC';

function FilterCreatorColor(props) {
  const { color } = props;
  const dispatch = useDispatch();
  const filterByColor = useSelector((state) => state.filter.filterByColor);
  const [filterColor, setFilterColor] = useState(false);
  useEffect(() => {
    if (filterByColor.length === 0) {
      setFilterColor(false);
    } else if (filterByColor.includes(color)) {
      setFilterColor(true);
    } else {
      setFilterColor(false);
    }
  }, [filterByColor]);
  const toggleColorFn = () => {
    if (!filterColor) {
      dispatch(addFilterColor(color));
    } else {
      dispatch(removeFilterColor(color));
    }
  };
  return (
    <Button
      handleClick={() => { toggleColorFn(); }}
      className={filterColor ? styles.activeFilterColor : styles.colorsItems}
      style={{ backgroundColor: color }}
    />
  );
}

FilterCreatorColor.propTypes = {
  color: PropTypes.string.isRequired,
};

export default memo(FilterCreatorColor);