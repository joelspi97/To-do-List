import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleTodoModal } from '../actions/modalActions';
import { completeTodo, deleteTodo, editTodo } from '../actions/todosActions';
import '../scss/components/TodoItem.scss';

function TodoItem(props) {
    const { description, 
            id, 
            completed, 
            priority, 
            draggableProvided, 
            completeTodo,
            editTodo,
            deleteTodo, 
            spanish } = props;

    const [openDropdown, setOpenDropdown] = useState(false);
    
    function toggleDropdown() {
        setOpenDropdown(prevState => !prevState);
    }

    const currentTodo = {
        description: description,
        id: id,
        completed: completed,
        priority: priority,
    };

    return (
        <li 
            className={
                completed ? `todo-item completed-todo` : `todo-item todo-item--${priority}`
            }
            {...draggableProvided.draggableProps}
            ref={draggableProvided.innerRef}
            {...draggableProvided.dragHandleProps}
        >

            {!completed && <button 
                className="todo-item__btn" type="button"
                onClick={() => completeTodo({...currentTodo, completed: true})} 
            >
                <span className="icon check-icon"></span>
            </button>}

            <p className="todo-item__text">
                {description}
            </p>

            {completed &&  
                <button onClick={() => deleteTodo(currentTodo)} className="todo-item__btn" type="button">
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
                                editTodo(currentTodo);
                            }}
                        >
                            <span>
                                {spanish? "Editar" : "Edit"}
                            </span>
                        </button>
                        <button 
                            className="todo-item__btn todo-item__dropdown-option todo-item__dropdown-option--delete" 
                            onClick={() => deleteTodo(currentTodo)}
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
};

function mapStateToProps(state) {
    return (
        {
            spanish: state.settings.spanish,
        }
    );
};

const mapDispatchToProps = {
    toggleTodoModal,
    completeTodo,
    deleteTodo,
    editTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
