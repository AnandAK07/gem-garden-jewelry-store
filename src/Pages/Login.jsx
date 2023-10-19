import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import SignUp from "./SignUp";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);
  const [token, setToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  


  const handleLoginAccount = (e) => {
    e.preventDefault();
    if ( !email || !password) {
      setError("Fill all the fields*");
      return;
    } else {
      setError("");
    }
    
      const userData = {
        email,password
      }

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
        setError(err.message)
        console.log(err);
        // ..
      });

    console.log(error);
    console.log(userData);
  };

  if (isAuthenticated) {
    return <Navigate to="/" element={<HomePage/>} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e)=>handleLoginAccount(e)}>
        <label>
          Email : 
          <input type="email" placeholder="Email"  value={email} onChange={(e)=>setEmail(e.target.value)} />
        </label>
        <br />
        <br />
        <label>
          Password : 
          <input type="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)} />
        </label>
        <br/>
        <br/>
        <p> {error} </p>
        <input type="submit" value="Login"  disabled={disableBtn} />
        <Link to="/signup" element={<SignUp/>} ><button>Sign up</button></Link>
      </form>
    </div>
  );
};

export default Login;
