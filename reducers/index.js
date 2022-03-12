
import { combineReducers } from "redux";
import { globalData } from "./data";
import { Login } from "./loginReducer";
import { studentDetail } from "./studentDetails";

const rootReducer = combineReducers({
  DATA : globalData,
  studentDetail : studentDetail,
  loginCreditials : Login
});

export default rootReducer;