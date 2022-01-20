function createNewTodo(payload) {
    return (
        {
            type: 'CREATE_TODO',
            payload,
        }
    );
};

function completeTodo(payload) {
    return (
        {
            type: 'COMPLETE_TODO',
            payload,
        }
    );
};

function editTodo(payload) {
    return (
        {
            type: 'EDIT_TODO',
            payload,
        }
    );
};

function deleteTodo(payload) {
    return (
        {
            type: 'DELETE_TODO',
            payload,
        }
    );
};

export { createNewTodo, completeTodo, editTodo, deleteTodo };