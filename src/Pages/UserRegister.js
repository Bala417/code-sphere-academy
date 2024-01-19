import React from "react";
import Login from "../Components/Login";
import RegisterPage from "../Components/RegisterPage";
import { Link } from "react-router-dom";

const UserRegister = () => {
  return (
    <div>
      <RegisterPage />
      <Link to="/loginPage">Go to Login Page</Link>
    </div>
  );
};

export default UserRegister;
