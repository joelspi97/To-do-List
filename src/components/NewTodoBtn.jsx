import React from 'react';
import { connect } from 'react-redux';
import { toggleTodoModal } from '../actions/modalActions';
import { useSettings } from '../contexts/SettingsContext';
import { useMainContext } from '../contexts/MainContext';
import '../scss/components/NewTodoBtn.scss';

function NewTodoBtn({ toggleTodoModal }) {
    const { spanish } = useSettings();

    return (
        <button 
            className="new-todo-btn"
            type="button" 
            onClick={toggleTodoModal}
        >
            {spanish? "¡Creá un nuevo To-Do!" : "Create a new To-Do!"}
        </button>
    );
}

const mapDispatchToProps = {
    toggleTodoModal,
};

export default connect(null, mapDispatchToProps)(NewTodoBtn);
