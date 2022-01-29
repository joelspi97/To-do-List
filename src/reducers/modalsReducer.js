const modalsInitialState = {    
    showHeaderModal: false,
    showTodoModal: false,
    showTodoAnimationModal: false,
    showSuccessBanner: false,
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

        case 'TOGGLE_TODO_ANIMATION_MODAL':
            document.body.classList.toggle('no-scroll');
        
            return {
                ...modalsState,
                showTodoAnimationModal: !modalsState.showTodoAnimationModal,
            };

        case 'TOGGLE_SUCCESS_BANNER':
            return {
                ...modalsState,
                showSuccessBanner: !modalsState.showSuccessBanner,
            };

        default:
            return modalsState;
    };
};

export default modalsReducer;