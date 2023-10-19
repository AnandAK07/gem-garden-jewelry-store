import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import SignUp from "./SignUp";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);
  const [token, setToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginAccount = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Fill all the fields*");
      return;
    } else {
      setError("");
    }

    const userData = {
      email,
      password,
    };

    const auth = getAuth();

    setDisableBtn(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // Signed up
        const user = res.user;
        setDisableBtn(false);
        setToken(res.user.accessToken);
        setIsAuthenticated(true);
        console.log(res);

        // ...
      })
      .catch((err) => {
        setDisableBtn(false);
        setError(err.message);
        console.log(err);
        // ..
      });

    console.log(error);
    console.log(userData);
  };

  if (isAuthenticated) {
    return <Navigate to="/" element={<HomePage />} />;
  }

  return (
    <div className={styles.loginComponent}>
      <div className={styles.loginContainer}>
        <h1>Login</h1>
        <form onSubmit={(e) => handleLoginAccount(e)}>
          <label>Email :</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <br />
          <label>Password :</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <br />
          <p className={styles.error}> {error} </p>
          <input
            type="submit"
            value="Login"
            disabled={disableBtn}
            className={styles.submitButton}
          />
          <h3>
            New user?{" "}
            <span>
              <Link
                to="/signup"
                element={<SignUp />}
                className={styles.signupButton}
              >
                Create an account
              </Link>
            </span>{" "}
          </h3>
        </form>
      </div>
    </div>
  );
};

export default Login;
