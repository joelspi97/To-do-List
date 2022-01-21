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

export { toggleHeaderModal, toggleTodoModal };