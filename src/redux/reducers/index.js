import { combineReducers } from "redux";
import shopReducer from "./postReducer";

export const rootReducer = combineReducers({
  post: shopReducer,
});
