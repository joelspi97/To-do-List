const todosInitialState = {
    uncompletedTodos: [],
    completedTodos: [],
    currentTodo: {},
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
            return {
                ...todosState,
                currentTodo: { ...todosState.currentTodo,
                               id: action.payload.id,
                               priority: action.payload.priority,
                               description:action.payload.description,
                               completed: action.payload.completed, },
            };

        case 'UPDATE_TODO': 
            const editedTodoIndex = todosState.uncompletedTodos.findIndex(todo => todo.id === action.payload.id);
            const updatedUncompletedTodos = [...todosState.uncompletedTodos];
            updatedUncompletedTodos[editedTodoIndex].priority = action.payload.priority;
            updatedUncompletedTodos[editedTodoIndex].description = action.payload.description;

            return {
                ...todosState,
                uncompletedTodos: updatedUncompletedTodos,
                currentTodo: {},
            };

        case 'CANCEL_UPDATE':
            return {
                ...todosState,
                currentTodo: {},
            };

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