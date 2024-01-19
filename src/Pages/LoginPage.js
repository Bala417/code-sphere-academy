import React from "react";
import { Link } from "react-router-dom";
import Login from "../Components/Login";
import PasswordReset from "../Components/PasswordReset";

const LoginPage = () => {
  return (
    <div>
      <Login />
      <Link to="/userRegister">Create Account</Link>
      <PasswordReset />
    </div>
  );
};

export default LoginPage;
