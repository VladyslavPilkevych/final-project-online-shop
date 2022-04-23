// import { PUT_IN_CART, DELETE_FROM_CART, CLEAR_CART } from "../actions/cartItemsActions";

// const initialState = {
//     inCart: null,
// };

// const cartReducer = (state = initialState, action) => {
//     switch (action?.type) {
//         case PUT_IN_CART: {
//             if (state.inCart !== null) {
//                     return { ...state, inCart: [...state.inCart, action.payload] };
//             }
//             return { ...state, inCart: [action.payload] };
//         }
//         case DELETE_FROM_CART: {
//             const newFavouriteData = [...state.inCart];
//             return { ...state, inCart: newFavouriteData };
//         }
//         case CLEAR_CART: {
//             return { ...state, inCart: null };
//         }
//         default:
//             return state;
//     }
// };
// export default cartReducer;