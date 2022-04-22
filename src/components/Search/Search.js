import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSearch } from '../../store/actionCreators/searchAC';
import { ReactComponent as SearchIcon } from '../../assets/icons/Vector.svg';

import styles from './Search.module.scss';

function Search() {
  const isOpenSearch = useSelector((state) => state.search.isOpenSearch);
  const dispatch = useDispatch();
  if (!isOpenSearch) return null;
  const closeSearch = () => {
    dispatch(toggleSearch(true));
  };
  return (
    <div className={styles.searchBox}>
      <input className={styles.searchInput} type="text" placeholder="Search entiere store here..." />
    </div>
  );
}

export default Search;
