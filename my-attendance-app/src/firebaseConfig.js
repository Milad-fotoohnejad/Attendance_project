// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRCyt_dWErHaKxV8YKmF7BnX6TEeNvCfw",
  authDomain: "atten-d.firebaseapp.com",
  projectId: "atten-d",
  storageBucket: "atten-d.appspot.com",
  messagingSenderId: "247989738575",
  appId: "1:247989738575:web:80e815625474294eaede3a",
  measurementId: "G-WC8BL8TFXD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { firebaseConfig, db, auth };
