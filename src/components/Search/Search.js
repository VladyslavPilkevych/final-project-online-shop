import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSearch } from '../../store/actionCreators/searchAC';
import { ReactComponent as SearchIcon } from '../../assets/icons/Vector.svg';

import styles from './Search.module.scss';

function Search() {
  const isOpenSearch = useSelector((state) => state.search.isOpenSearch);
  const [value, setValue] = useState('');

  const dispatch = useDispatch();
  if (!isOpenSearch) return null;
  const closeSearch = () => {
    dispatch(toggleSearch(true));
    setValue('');
  };
  return (
    <div className={styles.searchBox}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search entiere store here..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          console.log(value);
        }}
      />
    </div>
  );
}

export default Search;
