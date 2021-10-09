import React from 'react';
import { useSettings } from '../../SettingsContext/SettingsContext';

function TodoItem({ description, id, completed, markCompleted, priority, deleteTodo, deleteCompletedTodo, editTodo, draggableProvided }) {
    const {
        animations,
        highContrast,
        spanish,
        darkTheme,} = useSettings();

    const [openDropdown, setOpenDropdown] = React.useState(false);
    
    function toggleDropdown() {
        setOpenDropdown(prevState => !prevState);
    }

    return (
        <li 
            className={`
                todo-item 
                ${completed && "completed-todo"}
                ${(priority === "low") && "todo-item--low"}
                ${(priority === "medium") && "todo-item--medium"}
                ${(priority === "high") && "todo-item--high"}
            `}
            {...draggableProvided.draggableProps}
            ref={draggableProvided.innerRef}
            {...draggableProvided.dragHandleProps}
        >

            {!completed && <button 
                className="todo-item__btn" type="button"
                onClick={() => markCompleted(id)} 
            >
                <span className="icon check-icon"></span>
            </button>}

            <p className="todo-item__text">
                {description}
            </p>

            {completed &&  
                <button onClick={() => deleteCompletedTodo(id)} className="todo-item__btn" type="button">
                        <span className="icon x-icon"></span>
                </button>
            }
            
            {!completed && 
                <> 
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
                            <span>
                                {spanish? "Editar" : "Edit"}
                            </span>
                        </button>
                        <button 
                            className="todo-item__btn todo-item__dropdown-option todo-item__dropdown-option--delete" 
                            onClick={() => deleteTodo(id)}
                        >
                            <span>
                                {spanish? "Descartar" : "Delete"}
                            </span>
                        </button>
                    </div>
                </> 
            }
        </li>
    );
}

export { TodoItem };
