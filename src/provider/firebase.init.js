// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIUy00ETF72gcuchY3soqqPaYzcGoa7a4",
  authDomain: "coffee-house-50d67.firebaseapp.com",
  projectId: "coffee-house-50d67",
  storageBucket: "coffee-house-50d67.firebasestorage.app",
  messagingSenderId: "591796844360",
  appId: "1:591796844360:web:e721f13888187e58c6257d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
