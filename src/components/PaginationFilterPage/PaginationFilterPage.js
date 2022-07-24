import React, { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import styles from './PaginationFilterPage.module.scss';
import CardItem from '../CardItem/CardItem';
import {
  setFilterPaginationPage,
} from '../../store/actionCreators/filterAC';

function PaginationFilterPage(props) {
  const dispatch = useDispatch();
  const { filterProducts, itemsPerPage } = props;
  const filterPaginationPage = useSelector((state) => state.filter.filterPaginationPage);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    if (filterPaginationPage === 0) {
      setItemOffset(0);
    }
    const endOffset = itemOffset + itemsPerPage;
    if (filterProducts !== null) {
      setCurrentItems(filterProducts.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(filterProducts.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, filterProducts, filterPaginationPage]);
  const handlePageClick = (event) => {
    window.scrollTo(0, 0);
    const newOffset = (event.selected * itemsPerPage) % filterProducts.length;
    setItemOffset(newOffset);
    dispatch(setFilterPaginationPage(event.selected));
  };
  return (
    <>
      <div className={styles.filterItem}>
        {currentItems && currentItems.map((product) => (
          <div key={product.itemNo} className={styles.gridItemContainer}>
            <CardItem
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
      {currentItems?.length === 0 && <h1 className={styles.noItems}>No items</h1>}
      <ReactPaginate
        forcePage={filterPaginationPage}
        breakLabel="..."
        nextLabel="›"
        previousLabel="‹"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName={styles.paginateContainer}
        activeLinkClassName={styles.activeLinkClassName}
      />
    </>
  );
}

PaginationFilterPage.propTypes = {
  filterProducts: PropTypes.array,
  itemsPerPage: PropTypes.number,
};

PaginationFilterPage.defaultProps = {
  filterProducts: [],
  itemsPerPage: 0,
};

export default memo(PaginationFilterPage);