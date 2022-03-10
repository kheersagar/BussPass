
import { combineReducers } from "redux";
import { globalData } from "./data";
import { studentDetail } from "./studentDetails";

const rootReducer = combineReducers({
  DATA : globalData,
  studentDetail : studentDetail
});

export default rootReducer;