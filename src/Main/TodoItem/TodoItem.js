import React from 'react';
import { useSettings } from '../../SettingsContext/SettingsContext';
import { useMainContext } from '../../MainContext/MainContext';

function TodoItem({ description, id, completed, priority, draggableProvided }) {
    const {
        animations,
        highContrast,
        colorBlind,
        spanish,
        darkTheme,} = useSettings();

    const {
        markCompleted,
        deleteTodo,
        editTodo,
        deleteCompletedTodo,}= useMainContext();

    const [openDropdown, setOpenDropdown] = React.useState(false);
    
    function toggleDropdown() {
        setOpenDropdown(prevState => !prevState);
    }

    function todoItemClass() {
        if(completed) return "completed-todo";
        if(priority === "low") return "todo-item--low";
        if(priority === "medium") return "todo-item--medium";
        if(priority === "high") return "todo-item--high";
    }

    return (
        <li 
            className={`todo-item ${todoItemClass()}`}
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
                            ${openDropdown? "todo-item__btn--open" : ""}
                        `} type="button"
                        onClick={() => toggleDropdown()}
                    >
                        <span 
                            className={`
                                icon 
                                edit-icon 
                                ${openDropdown? "edit-icon--open" : ""}
                            `}></span>
                    </button>
                    <div className={`
                        todo-item__dropdown
                        ${openDropdown? "todo-item__dropdown--open" : ""}
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
