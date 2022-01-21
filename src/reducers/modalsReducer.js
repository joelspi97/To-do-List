const modalsInitialState = {    
    showHeaderModal: false,
    showTodoModal: false,
};

function modalsReducer(modalsState = modalsInitialState, action) {
    switch (action.type) {
        case 'TOGGLE_HEADER_MODAL':
            document.body.classList.toggle('no-scroll');

            return {
                ...modalsState,
                showHeaderModal: !modalsState.showHeaderModal,
            };

        case 'TOGGLE_TODO_MODAL':
            document.body.classList.toggle('no-scroll');
        
            return {
                ...modalsState,
                showTodoModal: !modalsState.showTodoModal,
            };

        default:
            return modalsState;
    };
};

export default modalsReducer;