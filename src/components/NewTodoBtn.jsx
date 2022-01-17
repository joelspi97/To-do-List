import React from 'react';
import { useSettings } from '../contexts/SettingsContext';
import { useMainContext } from '../contexts/MainContext';
import '../scss/components/NewTodoBtn.scss';

function NewTodoBtn() {
    const { spanish } = useSettings();

    const {showModal} = useMainContext();

    return (
        <button 
            className="new-todo-btn"
            type="button" 
            onClick={showModal}
        >
            {spanish? "¡Creá un nuevo To-Do!" : "Create a new To-Do!"}
        </button>
    );
}

export { NewTodoBtn };
