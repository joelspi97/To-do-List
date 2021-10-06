import React from 'react';

function CompletedTodoItem({ description, deleteCompletedTodo, id}) {
    return (
        <li className="todo-item completed-todo">
            <p className="todo-item__text">{description}</p>
            <button onClick={() => deleteCompletedTodo(id)} className="todo-item__btn" type="button">
                <span className="icon x-icon"></span>
            </button>
        </li>
    );
}

export { CompletedTodoItem };
