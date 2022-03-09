
import { combineReducers } from "redux";
import { globalData } from "./data";

const rootReducer = combineReducers({
  DATA : globalData
});

export default rootReducer;