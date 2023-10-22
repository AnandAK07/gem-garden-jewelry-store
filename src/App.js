import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Footer from "./Components/Footer";

function App() {
  const [name, setName] = useState("");

  const auth = getAuth();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setName(user.displayName);
      } else {
        setName("");
      }
    });
  }, [name, auth, onAuthStateChanged]);

  return (
    <div className="App">
      <Navbar />

      <AllRoutes />
      <h1>Welcome :{name} </h1>
      <Footer />
    </div>
  );
}

export default App;
