import BigNumber from "bignumber.js";
import React, { useContext } from "react";

import { ThemeContext } from "context/themeContext";
import Layout from "component/UI/layout";
import MainCard from "component/UI/MainCard/mainCard";

import "./App.scss";

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});

function App() {
  const data: any = useContext(ThemeContext);

  return (
    <div className={`App ${data.theme}`}>
      <Layout>
        <MainCard />
      </Layout>
    </div>
  );
}

export default App;
