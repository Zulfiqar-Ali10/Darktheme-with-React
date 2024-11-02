import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";


export default function Footer(){
    const [theme, setTheme] = useContext(ThemeContext);


    return(
        <>
      <footer>
      <h2 className={theme === 'light' ? 'dark' : 'light'}>Footer</h2>
      </footer>

        </>
    )
}