import React from 'react';
import { connect } from 'react-redux';
import { useMainContext } from '../contexts/MainContext';
import '../scss/components/SearchBar.scss';

function SearchBar({ spanish }) {
    const { searchValue,
            setSearchValue, }= useMainContext();

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
};

function mapStateToProps(state) {
    return (
        {
            spanish: state.settings.spanish,
        }
    );
};

export default connect(mapStateToProps, null)(SearchBar);
