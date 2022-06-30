import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleSearch, searchProducts } from '../../store/actionCreators/searchAC';
import { ReactComponent as SearchIcon } from '../../assets/icons/Vector.svg';

import styles from './Search.module.scss';

function Search() {
  const isOpenSearch = useSelector((state) => state.search.isOpenSearch);
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();
  if (!isOpenSearch) return null;
  // const closeSearch = () => {
  //   dispatch(toggleSearch(true));
  //   setValue('');
  // };

  const phrase = { query: value };
  const emptyPhraseWithSpace = { query: ' ' };

  const putSearchedProducts = () => {
    if (value === '') {
      dispatch(searchProducts(emptyPhraseWithSpace));
    } else {
      dispatch(searchProducts(phrase));
    }
  };

  return (
    <div className={styles.searchBox}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          putSearchedProducts();
          localStorage.setItem('phrase', JSON.stringify(phrase));
          navigate({ pathname: '/products/search' });
          setValue('');
        }}
      >
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search entiere store here..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </form>
    </div>
  );
}

export default Search;
