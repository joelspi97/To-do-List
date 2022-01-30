const modalsInitialState = {    
    showHeaderModal: false,
    showTodoModal: false,
    showTodoAnimationModal: false,
    showSuccessBanner: false,
    newTodoMessage: false,
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

            if(action.payload.newTodo) {
                return {
                    ...modalsState,
                    showSuccessBanner: !modalsState.showSuccessBanner,
                    newTodoMessage: !modalsState.newTodoMessage,
                };    
            }; 

            return {
                ...modalsState,
                showSuccessBanner: !modalsState.showSuccessBanner,
            };

        default:
            return modalsState;
    };
};

export default modalsReducer;