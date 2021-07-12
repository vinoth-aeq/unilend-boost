import BigNumber from "bignumber.js";
import { ThemeContext } from "context/themeContext";
import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import "./theme.scss";
import NavBar from "./component/UI/layout/Navbar/index";
import Footer from "component/UI//layout/Footer";

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});

function App() {
  const data: any = useContext(ThemeContext);

  return (
    <div className={`App ${data.theme}`}>
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;
