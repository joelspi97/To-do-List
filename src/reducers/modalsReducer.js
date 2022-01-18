const modalsInitialState = {    
    showHeaderModal: false,
    showTodoModal: false,
};

function modalsReducer(state = modalsInitialState, action) {
    switch (action.type) {
        case 'TOGGLE_HEADER_MODAL':
            return {
                ...state,
                showHeaderModal: !state.showHeaderModal,
            };

        case 'TOGGLE_TODO_MODAL':
            return {
                ...state,
                showTodoModal: !state.showTodoModal,
            };

        default:
            return state;
    }
};

export default modalsReducer;