import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import { useContext, useEffect, useState } from "react";
import { getAuth,onAuthStateChanged} from "firebase/auth";
import Theme from "./Theme/Theme";
import ThemeContext from "./ThemeContext/ThemeContext";

function App() {
 const {light} = useContext(ThemeContext)

  return (
    <div className={light?"light":"dark"}>
      <Navbar />
      <AllRoutes />
      
    </div>
  );
}

export default App;
