// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcDzF0hjxZUwINRBLZ8uOgaofabJhBMeU",
  authDomain: "fir-auth-practice-8ecbd.firebaseapp.com",
  projectId: "fir-auth-practice-8ecbd",
  storageBucket: "fir-auth-practice-8ecbd.appspot.com",
  messagingSenderId: "347051360482",
  appId: "1:347051360482:web:8474c4a5887896fc015ebb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;