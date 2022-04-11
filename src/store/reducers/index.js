import { combineReducers } from "redux";
import preloaderReducer from "./preloaderReducer";

const reducer = combineReducers({
    loader: preloaderReducer,
});

export default reducer;