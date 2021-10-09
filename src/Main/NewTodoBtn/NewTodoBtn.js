import React from 'react';
import { useSettings } from '../../SettingsContext/SettingsContext';

function NewTodoBtn({ showModal }) {
    const {
        animations,
        highContrast,
        colorBlind,
        spanish,
        darkTheme,} = useSettings();

    return (
        <button 
            type="button" className="new-todo-btn"
            onClick={showModal}
        >
            {spanish? "¡Creá un nuevo To-Do!" : "Create a new To-Do!"}
        </button>
    );
}

export { NewTodoBtn };
