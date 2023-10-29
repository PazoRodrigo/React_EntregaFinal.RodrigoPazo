import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// ****** Me conecto con l base de datos ***********************
// primero hago npm install firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1SnWVG0HZ_lJg7XkQ8PfyE2Apgf7tTNs",
  authDomain: "curso-react-b0e97.firebaseapp.com",
  projectId: "curso-react-b0e97",
  storageBucket: "curso-react-b0e97.appspot.com",
  messagingSenderId: "488104781124",
  appId: "1:488104781124:web:56d7b2134d0c41880fe311",
};
// Initialize Firebase
initializeApp(firebaseConfig);
// *************************************************************

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
