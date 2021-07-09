import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie"
export const ThemeContext = createContext(null);

export default function ThemeProvider(props) {
    const [theme, toggleTheme] = useState<string>("")

    useEffect(() => {
      let _cache = Cookies.get('theme');
      console.log(_cache)
      if(_cache ) {
        toggleTheme(_cache);
      }
      else {
        toggleTheme("light")
      }
    },[])

    let data:any = {
        theme,
        handleToggleTheme : () => {
        if(theme === "light") {
            toggleTheme("dark");
            Cookies.set('theme', 'dark');
        }
        else {
            toggleTheme("light");
            Cookies.set('theme', 'light');

        }
    }
    }

  return (
    <ThemeContext.Provider value={data}>{props.children}</ThemeContext.Provider>
  );
}