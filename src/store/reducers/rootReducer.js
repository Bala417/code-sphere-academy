import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import coursesDataReducer from "./CourseDataSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  coursesData: coursesDataReducer,
});

export default rootReducer;
