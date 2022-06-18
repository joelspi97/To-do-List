import React from 'react';
import { connect } from 'react-redux';
import { searchTodo } from '../actions/todosActions';
import '../scss/components/SearchBar.scss';

function SearchBar(props) {
    const { showHeaderModal, 
            showTodoModal,
            searchValue, 
            searchTodo, 
            spanish } = props;

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
                    onChange={e => searchTodo(e.target.value.toLowerCase())}
                    value={searchValue}
                    disabled={showHeaderModal || showTodoModal}
                />
                <span className="icon search-icon"></span>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return (
        {
            showHeaderModal: state.modals.showHeaderModal,
            showTodoModal: state.modals.showTodoModal,
            spanish: state.settings.spanish,
            searchValue: state.todos.searchValue,
        }
    );
};

const mapDispatchToProps = {
    searchTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
