import React from 'react';

function TodoItem({ description, id, markCompleted, priority, deleteTodo, editTodo, draggableProvided }) {
    const [openDropdown, setOpenDropdown] = React.useState(false);
    function toggleDropdown() {
        setOpenDropdown(prevState => !prevState);
    }

    return (
        <li 
            className={`
                todo-item 
                ${(priority === "low") && "todo-item--low"}
                ${(priority === "medium") && "todo-item--medium"}
                ${(priority === "high") && "todo-item--high"}
            `}
            {...draggableProvided.draggableProps}
            ref={draggableProvided.innerRef}
            {...draggableProvided.dragHandleProps}
        >
            <button 
                className="todo-item__btn" type="button"
                onClick={() => markCompleted(id)} 
            >
                <span className="icon check-icon"></span>
            </button>
            <p className="todo-item__text">
                {description}
            </p>
            <button 
                className={`
                    todo-item__btn 
                    ${openDropdown && "todo-item__btn--open"}
                `} type="button"
                onClick={() => toggleDropdown()}
            >
                <span 
                    className={`
                        icon 
                        edit-icon 
                        ${openDropdown && "edit-icon--open"}
                    `}></span>
            </button>
            <div className={`
                todo-item__dropdown
                ${openDropdown && "todo-item__dropdown--open"}
            `}>
                <button
                    className="todo-item__btn todo-item__dropdown-option" 
                    onClick={() => {
                        toggleDropdown();
                        editTodo(id);
                    }}
                >
                    <span>Edit</span>
                </button>
                <button 
                    className="todo-item__btn todo-item__dropdown-option todo-item__dropdown-option--delete" 
                    onClick={() => deleteTodo(id)}
                >
                    <span>Delete</span>
                </button>
            </div>
        </li>
    );
}

export { TodoItem };
