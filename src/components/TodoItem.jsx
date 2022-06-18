import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleTodoModal } from '../actions/modalActions';
import { completeTodo, deleteTodo, editTodo } from '../actions/todosActions';
import openModal from './helpers/openModal'
import '../scss/components/TodoItem.scss';
import { useEffect } from 'react';

function TodoItem(props) {
    const { description, 
            id, 
            completed, 
            priority, 
            draggableProvided, 
            completeTodo,
            editTodo,
            deleteTodo,
            toggleTodoModal, 
            spanish,
            showTodoModal, 
            showHeaderModal, } = props;

    const currentTodo = {
        description: description,
        id: id,
        completed: completed,
        priority: priority,
    };
    
    const [openDropdown, setOpenDropdown] = useState(false);
    
    function handleEdit() {
        setOpenDropdown(prevState => !prevState);
        editTodo(currentTodo);
        openModal(toggleTodoModal);
    };

    const todoItems = Array.from(document.querySelectorAll('.todo-item'));
    useEffect(() => {
        if (showTodoModal || showHeaderModal) {
            todoItems.forEach(t => {
                t.setAttribute('tabindex', '-1');
            });
        } else {
            todoItems.forEach(t => {
                t.setAttribute('tabindex', '0');
            });
        }
    }, [showTodoModal, showHeaderModal]);

    return (
        <li 
            className={
                completed ? `todo-item completed-todo` : `todo-item todo-item--${priority}`
            }
            {...draggableProvided.draggableProps}
            ref={draggableProvided.innerRef}
            {...draggableProvided.dragHandleProps}
            aria-label={completed
                            ? spanish? "Tarea completada. " + description : "Completed to-do. " + description
                            : spanish? "Tarea pendiente. " + description : "Pending to-do. " + description
                        }
        >

            {!completed && (
                    <button 
                        aria-label={spanish? "Marcar item como completado" : "Mark item as completed"}
                        className="todo-item__btn" type="button"
                        onClick={() => completeTodo({...currentTodo, completed: true})} 
                        disabled={showHeaderModal || showTodoModal}
                    >
                        <span className="icon check-icon"></span>
                    </button>
                )
            }

            <p className="todo-item__text">
                {description}
            </p>

            {completed && ( 
                    <button 
                        aria-label={spanish? "Eliminar item" : "Delete item"}
                        onClick={() => deleteTodo(currentTodo)} 
                        className="todo-item__btn" 
                        type="button"
                        disabled={showHeaderModal || showTodoModal}
                    >
                            <span className="icon x-icon"></span>
                    </button>
                )
            }
            
            {!completed && 
                <> 
                    <button 
                        aria-label={openDropdown
                                        ? spanish? "Cerrar menu de opciones" : "Close settings menu"
                                        : spanish? "Abrir menu de opciones para este item" : "Open settings menu for this item"
                                    }
                        className={`
                            todo-item__btn 
                            ${openDropdown? "todo-item__btn--open" : ""}
                        `} type="button"
                        onClick={() => setOpenDropdown(prevState => !prevState)}
                        disabled={showHeaderModal || showTodoModal}
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
                            onClick={handleEdit}
                            disabled={showHeaderModal || showTodoModal}
                        >
                            <span>
                                {spanish? "Editar" : "Edit"}
                            </span>
                        </button>
                        <button 
                            className="todo-item__btn todo-item__dropdown-option todo-item__dropdown-option--delete" 
                            onClick={() => deleteTodo(currentTodo)}
                            disabled={showHeaderModal || showTodoModal}
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
            showHeaderModal: state.modals.showHeaderModal,
            showTodoModal: state.modals.showTodoModal,
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
