import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { toggleTodoModal } from '../actions/modalActions';
import { createNewTodo } from '../actions/todosActions';
import { useMainContext } from '../contexts/MainContext';
import { v4 as uuidv4 } from 'uuid';
import '../scss/components/TodoMaker.scss';

function TodoMaker({ toggleTodoModal, createNewTodo, spanish }) {
    const { editedTodoId, }= useMainContext();

    // const [todoPriority, setTodoPriority] = useState(false);
    // const [formCompleted, setFormCompleted] = useState(false);
    // useEffect(
    //     () => {
    //         if (formValue.description > 0 && todoPriority) {
    //             setFormCompleted(true);
    //         } else {
    //             setFormCompleted(false);
    //         }
    //     },
    //     [formValue, todoPriority]
    // );
    
    const [formValue, setFormValue] = useState(
        {
            description: '',
            priority: '',
        }
    );

    function handleInput(event) {
        setFormValue(
            {
                ...formValue,
                [event.target.name]: [event.target.value],
            }
        );
    };

    function handleNewTodo(submitEvent, description, priority) {
        submitEvent.preventDefault();
        createNewTodo(
            {
                description: description, 
                priority: priority, 
                id: uuidv4(), 
                completed: false,
            }
        );
        toggleTodoModal();
    };


    return (
        <form 
            className="todo-maker modal-content"
            onSubmit={submitEvent => handleNewTodo(submitEvent, formValue.description, formValue.priority)} 
        >
            <button 
                type="buttton"
                className="modal-content__close-btn" 
                onClick={toggleTodoModal}
            >
                <span className="icon x-icon"></span>
            </button>
            <div className="todo-maker__description-wrapper">
                <label htmlFor="description">
                    {spanish? "Describí la tarea" : "Describe the task:"}
                </label>
                <textarea 
                    className="todo-maker__textarea"
                    id="description" 
                    placeholder={spanish? "Por ejemplo: Cortar el pasto..." : "e.g. Mow the lawn..."} 
                    required
                    value={formValue.description}
                    name="description"
                    onChange={event => handleInput(event)}
                ></textarea>
            </div>
            
            <div>
                <h2>
                    {spanish? "¿Cuán urgente es?" : "How urgent is it?"}
                </h2>
                <div 
                    className="todo-maker__radio-wrapper"
                    onChange={event => handleInput(event)}
                >
                    <label>
                        {spanish? "No muy urgente" : "Not that urgent"}
                        <input type="radio" name="priority" value="low" required />
                    </label>
                    <label>
                        {spanish? "Algo urgente" : "Mildly urgent"}
                        <input type="radio" name="priority" value="medium" required />
                    </label>
                    <label>
                        {spanish? "Muy urgente" : "Very urgent"}
                        <input type="radio" name="priority" value="high" required />
                    </label>
                </div>
            </div>

            <div className="modal-content__bottom-btns">
                <button 
                    type="submit"
                    className={(formValue.description > 0 && formValue.priority > 0) ? 'fill-btn' : undefined} 
                >
                    {spanish? !editedTodoId && "¡Crear To-Do!" : !editedTodoId && "Create To-Do!"}
                    {spanish? editedTodoId && "Editar To-Do" : editedTodoId && "Edit To-Do"}
                </button>
                <button 
                    type="button"
                    onClick={toggleTodoModal}
                >
                    {spanish? "Cancelar" : "Cancel"}
                </button>
            </div>
        </form>
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
    createNewTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoMaker);
