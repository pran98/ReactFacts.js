import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import styles from "./styles.css";
export default function App() {
  const [dark, setDark] = React.useState(false);
  const [toggle, setToggle] = React.useState(true);

  React.useEffect(() => {
    setDark((e) => !e);
  }, [toggle]);
  function g() {
    setToggle((e) => !e);
  }

  return (
    <div className="container">
      <Navbar darkMode={dark} toggleDarkMode={g} />
      <Main darkMode={dark} />
    </div>
  );
}
