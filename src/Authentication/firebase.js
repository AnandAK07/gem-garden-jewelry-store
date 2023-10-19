// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA3hCEbzpPyIuvEipzQY5zazVDYsq5XYhk",
  authDomain: "jwellery-auth-app.firebaseapp.com",
  projectId: "jwellery-auth-app",
  storageBucket: "jwellery-auth-app.appspot.com",
  messagingSenderId: "562968478707",
  appId: "1:562968478707:web:0ece3997a834d52e450886",
  measurementId: "G-JWN3SLHVG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);