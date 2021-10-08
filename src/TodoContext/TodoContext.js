import React from 'react';

const TodoContext = React.createContext();

function TodoProvider(props) {
    return (
        <TodoContext>
            {props.children}
        </TodoContext>
    );
}

export { TodoProvider };
