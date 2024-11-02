
import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";


export default function Banner(){
    const [theme, setTheme] = useContext(ThemeContext);
    return(
        <>
    <div className="banner">
    <h2 className={theme === 'light' ? 'dark' : 'light'}>Banner</h2>
    </div>
        </>
    )
}