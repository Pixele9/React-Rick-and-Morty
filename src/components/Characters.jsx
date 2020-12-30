import React, { useState, useEffect, useContext } from "react";

import ThemeContext from '../context/ThemeContext';

export default function Characters() {
	const [characters, setCharacters] = useState([]);
	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		fetch("https://rickandmortyapi.com/api/character/")
			.then(response => response.json())
			// .then(data => setCharacters(data.results))
			.then(data => {
				console.log(JSON.stringify(data.results))
				setCharacters(data.results)
			})
	}, [])

	// dark mode settings
	const themeCard = theme ? "character-card dark-bg" : "character-card light-bg";
	const themeText = theme ? "light-text" : "dark-text"
	
	return (
		<div className="content">
			{
				characters.map((character) => (
					<div className={themeCard}>
						<img src={character.image} className="character-image" alt="character"/>
						<div className="character-description">
							<h3 className={themeText}>{character.name}</h3>
							<p className={themeText}>{character.description}</p>
						</div>
					</div>
				))
			}
		</div>
	);
}
