// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKn7yNkwwzdZcqfCnWRY-lL0TdOwXN0Xk",
  authDomain: "react-login-66086.firebaseapp.com",
  projectId: "react-login-66086",
  storageBucket: "react-login-66086.appspot.com",
  messagingSenderId: "342182393129",
  appId: "1:342182393129:web:5d4c809e2d0d258e9ef338",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
