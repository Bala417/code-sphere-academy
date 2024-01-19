// src/features/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: localStorage.getItem("isLoggedIn") === "true",

    // isLoggedIn: false,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", "true");
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
      localStorage.setItem("isLoggedIn", "false");
      // Optionally, you can clear other stored data on logout
      localStorage.removeItem("isLoggedIn");
    },
  },
});

export const { loginSuccess, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
