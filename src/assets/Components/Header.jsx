import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";


export default function Header() {
    const [theme, setTheme] = useContext(ThemeContext);

    console.log('themeObj', theme);
    return (
        <>
            <header className={theme === 'light' ? 'dark' : 'light'}>

                <h2 className="text-center">Header</h2>
                <button className={theme === 'light' ? 'btnDark' : 'btnLight'}
                    onClick={() => {
                        setTheme(theme === 'light' ? 'dark' : 'light')
                    }}>
                    {theme === 'light' ? 'Make it Light' : 'Make it Dark'}
                </button>

            </header>
        </>
    )
}