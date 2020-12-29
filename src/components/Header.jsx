import React, { useState, useContext } from 'react'
import ThemeContext from '../context/ThemeContext';

export default function Header() {
	const [darkMode, setDarkMode] = useState(false)
	const color = useContext(ThemeContext)
	
	const handleClick = () => {
		setDarkMode(!darkMode)
	}

	return (
		<div className="container">
			<h1 style={{ color }}>React Hooks</h1>
			<button onClick={handleClick}>{ darkMode ? "Dark Mode" : "Light Mode" }</button>
			<p>Dark Mode? {darkMode.toString()}</p>
		</div>
	)
}
