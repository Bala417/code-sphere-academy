import { useState } from "react";
import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../store/reducers/AuthSlice";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      console.log("Please fill in all fields.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      await updateProfile(user, { displayName: name });

      dispatch(loginSuccess());
      navigate("/");
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
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form className="text-center flex flex-col m-5">
        <h1 className="font-bold text-lg m-3">Register</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          required
          className="p-2 m-3"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          className="p-2 m-3"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          className="p-2 m-3"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button
          onClick={(e) => handleSignUp(e)}
          className="bg-slate-400 p-2 rounded shadow-lg mx-32"
        >
          Sign Up
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
      </form>
    </div>
  );
};

export default RegisterPage;
