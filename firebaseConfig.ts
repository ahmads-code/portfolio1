// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkat8g3_KDFEjyTffG3EwxEkGxHxHt_sg",
  authDomain: "decodingbyte-1.firebaseapp.com",
  projectId: "decodingbyte-1",
  storageBucket: "decodingbyte-1.appspot.com",
  messagingSenderId: "314194085665",
  appId: "1:314194085665:web:71e7c103fea58c276c6060",
  measurementId: "G-9DVV23RQEZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);