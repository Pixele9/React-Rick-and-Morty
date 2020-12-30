import React, { useState, useContext } from 'react'
import ThemeContext from '../context/ThemeContext';

export default function Header() {
	const [darkMode, setDarkMode] = useState(false)
	const { theme, setTheme } = useContext(ThemeContext)
	
	const handleClick = () => {
		setDarkMode(!darkMode)
		setTheme(!theme)
	}

	const themeText = darkMode ? "light-text" : "dark-text";
	const themeBg = darkMode ? "dark-bg" : "light-bg";

	return (
		<div className="header-container">
			<h1 className={`main-title ${themeText}`}>React Hooks</h1>
			<button onClick={handleClick} className={`main-button ${themeBg} ${themeText}`}>{ darkMode ? "Light Mode" : "Dark Mode" }</button>
			{/* <p>Dark Mode? {theme.toString()}</p> */}
		</div>
	)
}
