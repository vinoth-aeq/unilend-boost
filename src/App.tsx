import BigNumber from 'bignumber.js';
import { ThemeContext } from 'context/themeContext';
import React, { useContext } from 'react';
import './App.scss';
import "./theme.scss";

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});

function App() {
  
  const data:any = useContext(ThemeContext);

  return (
    <div className={ `App ${data.theme}`}>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={data.handleToggleTheme}>{data.theme}</button>
      </header>
    </div>
  );
}

export default App;
