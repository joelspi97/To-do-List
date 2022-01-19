const modalsInitialState = {    
    showHeaderModal: false,
    showTodoModal: false,
};

function modalsReducer(modalsState = modalsInitialState, action) {
    switch (action.type) {
        case 'TOGGLE_HEADER_MODAL':
            return {
                ...modalsState,
                showHeaderModal: !modalsState.showHeaderModal,
            };

        case 'TOGGLE_TODO_MODAL':
            return {
                ...modalsState,
                showTodoModal: !modalsState.showTodoModal,
            };

        default:
            return modalsState;
    };
};

export default modalsReducer;