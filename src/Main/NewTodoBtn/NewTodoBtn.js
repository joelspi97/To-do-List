import React from 'react';
import { useSettings } from '../../SettingsContext/SettingsContext';
import { useMainContext } from '../../MainContext/MainContext';

function NewTodoBtn() {
    const {
        animations,
        highContrast,
        colorBlind,
        spanish,
        darkTheme,} = useSettings();

    const {showModal} = useMainContext();

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
