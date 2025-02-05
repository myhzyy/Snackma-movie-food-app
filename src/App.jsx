import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import SignIn from "./Components/SignIn";
import CinemaSelect from "./Components/CinemaSelect";
import MainHeader from "./Components/MainHeader";

function App() {
  const [count, setCount] = useState(true);

  return (
    <>
      <div className="appContainer">
        <Header />
        {/* {count && <CinemaSelect />} */}
        {/* <SignIn /> */}
        <MainHeader />
      </div>
    </>
  );
}

export default App;
