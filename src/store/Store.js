import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/AuthSlice";
import rootReducer from "./reducers/rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
