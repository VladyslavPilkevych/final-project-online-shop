import { TOGGLE_FILTERS_CATEGORIES } from '../actions/filtersCategoriesActions';

const toggleFiltersCategories = (value) => ({ type: TOGGLE_FILTERS_CATEGORIES, payload: value });
export { toggleFiltersCategories };