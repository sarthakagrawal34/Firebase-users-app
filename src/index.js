import { StrictMode } from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import App from "./App";
import "./index.css";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-cKgFskJOWpHwpDDPwy7OregoX9ZFKMg",
  authDomain: "fir-user-app-ca751.firebaseapp.com",
  projectId: "fir-user-app-ca751",
  storageBucket: "fir-user-app-ca751.appspot.com",
  messagingSenderId: "138989990666",
  appId: "1:138989990666:web:0b193b125237c221e680f3"
};

// Initialize Firebase
firebase.default.initializeApp(firebaseConfig);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
