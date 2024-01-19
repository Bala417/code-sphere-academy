// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDANhE69Z9PzG79AABZCchLQSVusa0xvKU",
  authDomain: "code-sphere-academy.firebaseapp.com",
  projectId: "code-sphere-academy",
  storageBucket: "code-sphere-academy.appspot.com",
  messagingSenderId: "113179939344",
  appId: "1:113179939344:web:e661775b37012241c5f095",
  measurementId: "G-26ZX4XX1XW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
