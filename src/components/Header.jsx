import React, { useState, useContext } from 'react'
import ThemeContext from '../context/ThemeContext';

export default function Header() {
	const [darkMode, setDarkMode] = useState(false)
	const { theme, setTheme } = useContext(ThemeContext)
	
	const handleClick = () => {
		setDarkMode(!darkMode)
		setTheme(!theme)
	}

	return (
		<div className="container">
			<h1>React Hooks</h1>
			<button onClick={handleClick}>{ darkMode ? "Dark Mode" : "Light Mode" }</button>
			<p>Dark Mode? {darkMode.toString()}</p>
		</div>
	)
}
