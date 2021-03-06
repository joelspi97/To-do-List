function toggleHeaderModal() {
    return (
        {
            type: 'TOGGLE_HEADER_MODAL',
        }
    );
};

function toggleTodoModal() {
    return (
        {
            type: 'TOGGLE_TODO_MODAL',
        }
    );
};

function toggleTodoAnimationModal() {
    return (
        {
            type: 'TOGGLE_TODO_ANIMATION_MODAL',
        }
    );
};

function toggleSuccessBanner(payload) {
    return (
        {
            type: 'TOGGLE_SUCCESS_BANNER',
            payload,
        }
    );
};

export { toggleHeaderModal, 
         toggleTodoModal, 
         toggleTodoAnimationModal,
         toggleSuccessBanner };
