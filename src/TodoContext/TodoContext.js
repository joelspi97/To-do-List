import React from 'react';

const TodoContext = React.createContext();

function useTodoContext() {
    return React.useContext(TodoContext);
}

function TodoProvider(props) {
    return (
        <TodoContext.Provider
            value= {{
                
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );
}

export { useTodoContext, TodoProvider };
