import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import { useEffect, useState } from "react";
import { getAuth,onAuthStateChanged} from "firebase/auth";

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
  }, [name,auth,onAuthStateChanged]);

  return (
    <div className="App">
    <h1>Welcome :{name} </h1>
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
