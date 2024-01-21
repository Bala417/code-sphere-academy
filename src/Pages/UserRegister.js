import React from "react";
import Login from "../Components/Login";
import RegisterPage from "../Components/RegisterPage";
import { Link } from "react-router-dom";

const UserRegister = () => {
  return (
    <div className="  md:flex md:justify-center">
      <div className="md:w-1/4">
        <RegisterPage />
        <div className="text-center p-5 font-semibold">
          <Link to="/loginPage" className=" hover:text-blue-500">
            Go to Login Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
