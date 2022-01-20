const todosInitialState = {
    uncompletedTodos: [],
    completedTodos: [],
};

function todosReducer(todosState = todosInitialState, action) {
    switch (action.type) {
        case 'CREATE_TODO':
            return {
                ...todosState,
                uncompletedTodos: todosState.uncompletedTodos.concat(action.payload),
            };
        
        case 'COMPLETE_TODO':
            return {
                ...todosState,
                completedTodos: todosState.completedTodos.concat(action.payload),
                uncompletedTodos: todosState.uncompletedTodos.filter(todo => todo.id !== action.payload.id),
            };
        
        case 'EDIT_TODO':
            let editedTodoIndex;

            if(!action.payload.completed) {
                editedTodoIndex = todosState.uncompletedTodos.findIndex(todo => todo.id === action.payload.id);
                return {
                    ...todosState,
                };
            } else {
                editedTodoIndex = todosState.completedTodos.findIndex(todo => todo.id === action.payload.id);
                return {
                    ...todosState,
                };
            }

        case 'DELETE_TODO':
            if(!action.payload.completed) {
                return {
                    ...todosState,
                    uncompletedTodos: todosState.uncompletedTodos.filter(todo => todo.id !== action.payload.id),
                };
            } else {
                return {
                    ...todosState,
                    completedTodos: todosState.completedTodos.filter(todo => todo.id !== action.payload.id),
                };
            };

        default:
            return todosState;
    };
};

export default todosReducer;