import React from 'react';

function SearchBar({ searchValue, setSearchValue }) {
    return (
        <div className="search-bar">
            <label className="search-bar__label" htmlFor="search">Search a To-Do</label>
            <div className="search-bar__wrapper">
                <input 
                    className="search-bar__input" type="text" id="search" placeholder="Filter by name..." 
                    onChange={e => setSearchValue(e.target.value.toLowerCase())}
                    value={searchValue}
                />
                <span className="icon search-icon"></span>
            </div>
        </div>
    );
}

export { SearchBar };
