import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import styles from "./styles.css";
export default function App() {
  const [dark, setDark] = React.useState(false);
  

  
  function g() {
    setDark(e=>!e)
  }

  return (
    <div className="container">
      <Navbar darkMode={dark} toggleDarkMode={g} />
      <Main darkMode={dark} />
    </div>
  );
}
