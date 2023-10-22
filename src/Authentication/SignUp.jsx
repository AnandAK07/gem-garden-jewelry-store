import React, { useContext, useState } from "react";
import styles from "./signup.module.css";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { Link, Navigate } from "react-router-dom";
import ThemeContext from "../ThemeContext/ThemeContext";
import Footer from "../Components/Footer";

const firebaseConfig = {
  apiKey: "AIzaSyA3hCEbzpPyIuvEipzQY5zazVDYsq5XYhk",
  authDomain: "jwellery-auth-app.firebaseapp.com",
  projectId: "jwellery-auth-app",
  storageBucket: "jwellery-auth-app.appspot.com",
  messagingSenderId: "562968478707",
  appId: "1:562968478707:web:0ece3997a834d52e450886",
  measurementId: "G-JWN3SLHVG1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);
  const [token, setToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  console.log(isAuthenticated);

  const {light} = useContext(ThemeContext)





  const handleCreateAccount = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("Fill all the fields*");
      return;
    } else {
      setError("");
    }
    const userData = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };

    const auth = getAuth();

    setDisableBtn(true);
    setIsAuthenticated(false);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // Signed up
        const user = res.user;
        setDisableBtn(false);
        setToken(res.user.accessToken);
        updateProfile(user, { displayName: firstName });
        setIsAuthenticated(true);
        console.log(res);

        // ...
      })
      .catch((err) => {
        setDisableBtn(false);
        console.log(err);
        // ..
      });

    console.log(error);
    console.log(userData);
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className={light?"light":"dark"}>
    <div className={styles.signupComponent}>
      <div className={styles.formContainer}>
        <h1>Create Account</h1>
        <form onSubmit={(e) => handleCreateAccount(e)}>
          <label>First Name:</label>
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <label>Last Name:</label>
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <label>Email:</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <label>Confirm Password:</label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />
          <p className={styles.error}>{error}</p>
          <input
            type="submit"
            value="Sign up"
            disabled={disableBtn}
            className={styles.submitButton}
          />
        </form>
        <h3 className={styles.accountVerification} >Already have an account? <span><Link className={styles.loginButton} to="/login" >Log in</Link></span> </h3>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default SignUp;
