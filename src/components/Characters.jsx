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

	const themeCard = theme ? "character-card dark-card" : "character-card light-card";
	const themeText = theme ? "light-text" : "dark-text"
	
	return (
		<div className="content">
			{
				characters.map((character) => (
					<div className={themeCard}>
						<img src={character.image} className="character-image" alt="character"/>
						<div className="character-description">
							<h2 className={themeText}>{character.name}</h2>
							<p className={themeText}>{character.description}</p>
						</div>
					</div>
				))
			}
		</div>
	);
}
