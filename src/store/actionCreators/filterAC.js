import { ADD_NEW_FILTER, CLEAR_FILTER } from '../actions/filterActions';

// export const addNewFilters = (filtersArray) => {
//     return async (dispatch) => {

//     }
// };

export const addNewFilters = (filtersArray) => ({ type: ADD_NEW_FILTER, payload: filtersArray });

export const clearFilter = () => ({ type: CLEAR_FILTER, payload: null });
