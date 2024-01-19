import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/Store";
import { loginSuccess } from "./store/reducers/AuthSlice";

// Check the storage for the login state and dispatch the loginSuccess action
const storedLoginState = localStorage.getItem("isLoggedIn");
if (storedLoginState === "true") {
  store.dispatch(loginSuccess());
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
