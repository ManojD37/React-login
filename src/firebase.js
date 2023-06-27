// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD8dKudN2KoU_goJnt40vnwB3mg8091gA",
  authDomain: "react-login-proj1.firebaseapp.com",
  projectId: "react-login-proj1",
  storageBucket: "react-login-proj1.appspot.com",
  messagingSenderId: "650756874663",
  appId: "1:650756874663:web:b2b8c2822f14905f6e1682",
  measurementId: "G-H8RF0XHJZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); 

export { app, analytics,  auth };