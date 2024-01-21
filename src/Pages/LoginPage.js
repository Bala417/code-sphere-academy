import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "../Components/Login";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="  md:flex md:justify-center">
      <div className="md:w-1/3">
        <Login />
        <div className="text-center bg-blue-200 mx-24 mb-5 p-2">
          <button className=" " onClick={() => navigate("/passwordReset")}>
            Reset Password
          </button>
        </div>

        <div className="text-center bg-blue-200 mx-24 mb-5 p-2 ">
          <Link to="/userRegister">Create Account</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
