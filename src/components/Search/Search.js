import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchProducts } from '../../store/actionCreators/searchAC';

import styles from './Search.module.scss';

function Search() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  const isOpenSearch = useSelector((state) => state.search.isOpenSearch);

  if (!isOpenSearch) return null;

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

export default memo(Search);
