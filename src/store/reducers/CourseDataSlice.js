// src/features/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const CourseDataSlice = createSlice({
  name: "courseData",
  initialState: {
    courses: null,
  },
  reducers: {
    courseListData: (state, action) => {
      state.courses = action.payload;
    },
  },
});

export const { courseListData } = CourseDataSlice.actions;
export default CourseDataSlice.reducer;
