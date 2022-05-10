import React, { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import styles from './FilterItems.module.scss';
import CardItem from '../CardItem/CardItem';

function FilterItems(props) {
  const { filterProducts, itemsPerPage } = props;

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    if (filterProducts !== null) {
      setCurrentItems(filterProducts.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(filterProducts.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, filterProducts]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filterProducts.length;
    setItemOffset(newOffset);
  };
  return (
    /* eslint-disable no-underscore-dangle */
    <>
      <div className={styles.filterItem}>
        {currentItems && currentItems.map((product) => (
          <div key={product.id} className={styles.gridItemContainer}>
            <CardItem
              key={product.id}
              name={product.name}
              currentPrice={product.currentPrice}
              id={product._id}
              img={product.imageUrls[0]}
              quantity={product.quantity}
              previousPrice={product.previousPrice}
              model={product.model}
              itemNo={product.itemNo}
            />
          </div>
        ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="›"
        previousLabel="‹"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName={styles.paginateContainer}
        activeLinkClassName={styles.activeLinkClassName}
      />
    </>
    /* eslint-eneble no-underscore-dangle */
  );
}

FilterItems.propTypes = {
  filterProducts: PropTypes.array,
  itemsPerPage: PropTypes.number,
};

FilterItems.defaultProps = {
  filterProducts: [],
  itemsPerPage: 0,
};

export default memo(FilterItems);