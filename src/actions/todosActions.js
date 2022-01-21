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

function updateTodo(payload) {
    return (
        {
            type: 'UPDATE_TODO',
            payload,
        }
    );
};

function cancelUpdate() {
    return (
        {
            type: 'CANCEL_UPDATE',
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

function reorderUncompletedTodos(payload) {
    return (
        {
            type: 'REORDER_UNCOMPLETED_TODOS',
            payload,
        }
    );
};

function reorderCompletedTodos(payload) {
    return (
        {
            type: 'REORDER_COMPLETED_TODOS',
            payload,
        }
    );
};

export { createNewTodo, 
         completeTodo, 
         editTodo, 
         updateTodo,
         cancelUpdate,
         deleteTodo,
         reorderUncompletedTodos,
         reorderCompletedTodos };
