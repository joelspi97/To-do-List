const todosInitialState = {
    uncompletedTodos: [],
    completedTodos: [],
    currentTodo: {},
    searchValue: "",
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

        case 'SEARCH_TODO':
            return {
                ...todosState,
                searchValue: action.payload,
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

        case 'REORDER_UNCOMPLETED_TODOS':
            const reorderedUncompletedTodos = [...todosState.uncompletedTodos];
            const [removedUncompletedTodo] = reorderedUncompletedTodos.splice(action.payload.startIndex, 1);
            reorderedUncompletedTodos.splice(action.payload.endIndex, 0, removedUncompletedTodo);
            return {
                ...todosState,           
                uncompletedTodos: reorderedUncompletedTodos,     
            };

        case 'REORDER_COMPLETED_TODOS':
            const reorderedCompletedTodos = [...todosState.completedTodos];
            const [removedCompletedTodo] = reorderedCompletedTodos.splice(action.payload.startIndex, 1);
            reorderedCompletedTodos.splice(action.payload.endIndex, 0, removedCompletedTodo);
            return {
                ...todosState,           
                completedTodos: reorderedCompletedTodos,     
            };
    
        default:
            return todosState;
    };
};

export default todosReducer;
