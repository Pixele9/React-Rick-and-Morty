import React, {
	useState,
	useContext,
	useReducer,
	useMemo,
	useRef,
	useCallback,
} from "react";

import Search from "./Search";
import ThemeContext from "../context/ThemeContext";
import useCharacter from "../hooks/useCharacter";

const initialState = {
	favorites: [],
};

const API = "https://rickandmortyapi.com/api/character/"

const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";

const favoriteReducer = (state, action) => {
	switch (action.type) {
		case ADD_TO_FAVORITE:
			return {
				...state,
				favorites: [...state.favorites, action.payload],
			};
		default:
			return state;
	}
};

export default function Characters() {
	const characters = useCharacter(API)
	const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
	const [search, setSearch] = useState("");

	const searchInput = useRef(null);

	const { theme } = useContext(ThemeContext);


	const handleClick = (favorite) => {
		dispatch({ type: ADD_TO_FAVORITE, payload: favorite });
	};

	// const handleSearch = () =>  {
	// 	setSearch(searchInput.current.value)
	// }

	const handleSearch = useCallback(() => {
		setSearch(searchInput.current.value)
	}, [search])

	// const filteredChars = characters.filter(char => {
	// 	return char.name.toLowerCase().includes(search.toLowerCase())
	// })

	const filteredChars = useMemo(
		() =>
			characters.filter((char) => {
				return char.name.toLowerCase().includes(search.toLowerCase());
			}),
		[characters, search]
	);

	// dark mode settings
	const themeCard = theme
		? "character-card dark-bg"
		: "character-card light-bg";
	const themeText = theme ? "light-text" : "dark-text";
	const themeBg = theme ? "dark-bg" : "light-bg";

	return (
		<div className="main-container">
			<div style={{width: "80%"}}>
			<Search
				search={search}
				searchInput={searchInput}
				handleSearch={handleSearch}
			/>

			<div className="content">

				{filteredChars.map((character) => (
					<div className={themeCard}>
						<img
							src={character.image}
							className="character-image"
							alt="character"
						/>
						<div
							className="character-description"
							key={character.id}
						>
							<h3 className={themeText}>{character.name}</h3>
							<p className={themeText}>{character.description}</p>
							<button
								type="button"
								className={`${themeText} ${themeBg}`}
								onClick={() => handleClick(character)}
							>
								Add to Favorites
							</button>
						</div>
					</div>
				))}
			</div>
			</div>

			<div className="favorites">
				<p>Favorites</p>
				{favorites.favorites.map((favorite) => (
					<li key={favorite.id}>{favorite.name}</li>
				))}
			</div>
		</div>
	);
}
