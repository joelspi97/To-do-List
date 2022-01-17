function toggleHeaderModal() {
    document.body.classList.toggle('no-scroll');

    return (
        {
            type: 'TOGGLE_HEADER_MODAL',
        }
    );
};

function toggleTodoModal() {
    document.body.classList.toggle('no-scroll');

    return (
        {
            type: 'TOGGLE_TODO_MODAL',
        }
    );
};

export { toggleHeaderModal, toggleTodoModal };