import React, { useState, useEffect, useContext, useReducer } from "react";

import ThemeContext from '../context/ThemeContext';

const initialState = {
	favorites: [],
}

const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";

const favoriteReducer = (state, action) => {
	switch (action.type) {
		case ADD_TO_FAVORITE:
			return {
				...state,
				favorites: [...state.favorites, action.payload]
			};
		default:
			return state
	}
}

export default function Characters() {
	const [characters, setCharacters] = useState([]);
	const [favorites, dispatch] = useReducer(favoriteReducer, initialState)

	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		fetch("https://rickandmortyapi.com/api/character/")
			.then(response => response.json())
			.then(data => setCharacters(data.results))
			// .then(data => {
			// 	console.log(JSON.stringify(data.results))
			// 	setCharacters(data.results)
			// })
	}, [])

	const handleClick = favorite => {
		dispatch({ type: ADD_TO_FAVORITE, payload: favorite })
	}

	// dark mode settings
	const themeCard = theme ? "character-card dark-bg" : "character-card light-bg";
	const themeText = theme ? "light-text" : "dark-text"
	const themeBg = theme ? "dark-bg" : "light-bg";
	
	return (
		<div className="content">

			{favorites.favorites.map(favorite => (
				<li key={favorite.id}>
					{favorite.name}
				</li>
			))}

			{
				characters.map((character) => (
					<div className={themeCard}>
						<img src={character.image} className="character-image" alt="character"/>
						<div className="character-description" key={character.id}>
							<h3 className={themeText}>{character.name}</h3>
							<p className={themeText}>{character.description}</p>
							<button type="button" className={`${themeText} ${themeBg}`} onClick={() => handleClick(character)}>Add to Favorites</button>
						</div>
					</div>
				))
			}
		</div>
	);
}
