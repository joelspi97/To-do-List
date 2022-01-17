import React from 'react';
import { useSettings } from '../contexts/SettingsContext';
import { useMainContext } from '../contexts/MainContext';
import '../scss/components/SearchBar.scss';

function SearchBar() {
    const { spanish } = useSettings();
    const {
        searchValue,
        setSearchValue,}= useMainContext();

    return (
        <div className="search-bar">
            <label className="search-bar__label" htmlFor="search">
                {spanish? "Buscar un To-Do" : "Search a To-Do"}
            </label>
            <div className="search-bar__wrapper">
                <input 
                    className="search-bar__input" 
                    type="text" 
                    id="search" 
                    placeholder={spanish? "Filtrar por descripción..." : "Filter by description..."} 
                    onChange={e => setSearchValue(e.target.value.toLowerCase())}
                    value={searchValue}
                />
                <span className="icon search-icon"></span>
            </div>
        </div>
    );
}

export default SearchBar;
