import React, { useState, useEffect } from "react";

export default function Characters() {
	const [characters, setCharacters] = useState([])

	useEffect(() => {
		fetch("https://rickandmortyapi.com/api/character/")
			.then(response => response.json())
			// .then(data => setCharacters(data.results))
			.then(data => {
				console.log(JSON.stringify(data.results))
				setCharacters(data.results)
			})
	}, [])
	
	return (
		<div className="content">
			{
				characters.map((character) => (
					<div className="character-card">
						<img src={character.image} className="character-image" alt="character"/>
						<div className="character-description">
							<h2>{character.name}</h2>
							<p>{character.description}</p>
						</div>
					</div>
				))
			}
		</div>
	);
}
