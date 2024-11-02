
import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";


export default function Section() {
    const [theme, setTheme] = useContext(ThemeContext);
    return (
        <>
            <div className={`section ${theme === 'light' ? 'dark' : 'light'}`}>
                <h2>Section</h2>
            </div>
        </>
    )
}