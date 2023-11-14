// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0ESQ1Ax9ijwhay_z3CBQ9VLWhGxHE4XQ",
  authDomain: "fir-authentication-fdcc2.firebaseapp.com",
  projectId: "fir-authentication-fdcc2",
  storageBucket: "fir-authentication-fdcc2.appspot.com",
  messagingSenderId: "665730334354",
  appId: "1:665730334354:web:d07975c4709bd473aab04b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;