import { createContext, useState } from "react";
import Cookies from "js-cookie"

export const ThemeContext = createContext(null);

export default function ThemeProvider(props) {
  
  const [theme, toggleTheme] = useState<string>(() => {
    let _cache = Cookies.get('theme');
    return _cache ? _cache : "light"
  })
  
  function handleChange (state:string) {
    toggleTheme(state);
    Cookies.set('theme', state);
  }

    let data:any = {
        theme,
        handleToggleTheme : () => 
          handleChange(theme === "light" ? "dark" :"light")
    }

  return (
    <ThemeContext.Provider value={data}>{props.children}</ThemeContext.Provider>
  );
}