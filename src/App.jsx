import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import SignIn from "./Components/SignIn";
import CinemaSelect from "./Components/CinemaSelect";

function App() {
  const [count, setCount] = useState(false);

  return (
    <>
      <div className="appContainer">
        <Header />
        {count && <CinemaSelect />}
        <SignIn />
      </div>
    </>
  );
}

export default App;
