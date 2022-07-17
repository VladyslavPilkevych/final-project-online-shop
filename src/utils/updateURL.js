// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import {
//   useLocation, NavLink, useNavigate, createSearchParams,
// } from 'react-router-dom';
// import queryString from 'query-string';
// import {
//   filterCategory,
//   setMinSliderValue,
//   setMaxSliderValue,
//   addFilterColor,
//   clearFilterColor,
//   filterBrand,
//   setFilterPaginationPage,
//   filterProducts,
//   getCategorieProducts,
//   newFilterProducts,
// } from '../store/actionCreators/filterAC';
// import { repackColorsForPage } from './repackColor';

// const updateURL = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const dispatch = useDispatch();

//   const [categorie, setCategorie] = useState(null);
//   /* eslint-disable */
//   useEffect(() => {
//     setCategorie(location.pathname.split('/')[2]);
//     if (location.search && queryString.parse(location.search).categories === location.pathname.split('/')[2]) {
//       const paramsLocationSearch = queryString.parse(location.search);
//       if (paramsLocationSearch.minPrice || paramsLocationSearch.maxPrice) {
//           dispatch(setMinSliderValue(paramsLocationSearch.minPrice));
//           dispatch(setMaxSliderValue(paramsLocationSearch.maxPrice));
//         }
//         paramsLocationSearch.name ? dispatch(filterBrand(paramsLocationSearch.name)) : null;
//         dispatch(clearFilterColor(null));
//         paramsLocationSearch.color ? dispatch(addFilterColor(repackColorsForPage(paramsLocationSearch.color))) : null;
//     } else {
//         dispatch(setMinSliderValue(null));
//         dispatch(setMaxSliderValue(null));
//         dispatch(filterBrand([]));
//         dispatch(clearFilterColor(null));
//         navigate({
//             search: createSearchParams({
//                 categories: location.pathname.split('/')[2],
//             }).toString(),
//         });
//     }
//     dispatch(filterProducts(categorie));
//     dispatch(getCategorieProducts(categorie));
//     dispatch(filterCategory(categorie));
//     dispatch(setFilterPaginationPage(0));
//   }, []);
//   return dispatch(newFilterProducts(location.search));
// };

// export default updateURL;
