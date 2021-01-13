import React from 'react';

export default function Search({ search, searchInput, handleSearch }) {
	return (
		<div className="search-container">
			<input className="search-input" ref={searchInput} type="text" value={search} onChange={handleSearch} />
		</div>
	)
}
