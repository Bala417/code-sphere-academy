import React from "react";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../config/firebase";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const PasswordReset = () => {
  const [email, setEmail] = useState("");

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    console.log("hit");
    try {
      await sendPasswordResetEmail(auth, email);

      console.log("password reset message sent to your email");
      toast.success("Password reset link send to email", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setEmail("");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className=" md:flex md:justify-center">
      <form className="md:w-1/3">
        <div className="md:flex md:flex-col md:justify-center">
          <input
            className="mx-24 p-2 my-3 md:mt-14 md:shadow-lg"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            placeholder="email"
          />

          <button
            className="m-3 shadow-lg mx-36 p-1 rounded hover:bg-slate-800 hover:text-white "
            onClick={(e) => handlePasswordReset(e)}
            type="button"
          >
            Reset Password
          </button>
          <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </div>
      </form>
    </div>
  );
};

export default PasswordReset;
