import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { toggleTodoModal } from '../actions/modalActions';
import { createNewTodo, cancelUpdate, updateTodo } from '../actions/todosActions';
import { v4 as uuidv4 } from 'uuid';
import '../scss/components/TodoMaker.scss';

function TodoMaker(props) {
    const { toggleTodoModal, 
            createNewTodo, 
            currentTodo,
            updateTodo, 
            cancelUpdate,
            spanish, } = props;

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

    const editingTodo = Object.keys(currentTodo).length > 0;

    useEffect(() => {
        if(editingTodo) {
            setFormValue({
                description: currentTodo.description,
                priority: currentTodo.priority,
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function handleSubmit(submitEvent, description, priority) {
        submitEvent.preventDefault();

        if(editingTodo) {
            updateTodo(
                {
                    description: description, 
                    priority: priority,
                    id: currentTodo.id,
                }
            ); 
        } else {
            createNewTodo(
                {
                    description: description, 
                    priority: priority, 
                    id: uuidv4(), 
                    completed: false,
                }
            );
        };

        toggleTodoModal();
    };

    function handleDefaultCheck(inputPriority) {
        if(editingTodo && currentTodo.priority.toString() === inputPriority) {
            return true;
        } else {
            return false;
        };
    };

    function closeModal() {
        cancelUpdate();
        toggleTodoModal();
    };

    const [formCompleted, setFormCompleted] = useState(false);
    useEffect(
        () => {
            if (formValue.description.toString().length > 0 && formValue.priority.length > 0) {
                setFormCompleted(true);
            } else {
                setFormCompleted(false);
            }
        },
        [formValue]
    );

    return (
        <form 
            className="todo-maker modal-content"
            onSubmit={submitEvent => handleSubmit(submitEvent, formValue.description, formValue.priority)} 
        >
            <button 
                type="buttton"
                className="modal-content__close-btn" 
                onClick={closeModal}
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
                        <input 
                            type="radio" 
                            name="priority" 
                            value="low" 
                            required 
                            defaultChecked={handleDefaultCheck('low')}
                        />
                    </label>
                    <label>
                        {spanish? "Algo urgente" : "Mildly urgent"}
                        <input 
                            type="radio" 
                            name="priority" 
                            value="medium" 
                            required 
                            defaultChecked={handleDefaultCheck('medium')}
                        />
                    </label>
                    <label>
                        {spanish? "Muy urgente" : "Very urgent"}
                        <input 
                            type="radio" 
                            name="priority" 
                            value="high" 
                            required 
                            defaultChecked={handleDefaultCheck('high')}
                        />
                    </label>
                </div>
            </div>

            <div className="modal-content__bottom-btns">
                <button 
                    type="submit"
                    className={formCompleted ? 'fill-btn' : undefined} 
                >
                    {spanish? !editingTodo && "¡Crear To-Do!" : !editingTodo && "Create To-Do!"}
                    {spanish? editingTodo && "Editar To-Do" : editingTodo && "Edit To-Do"}
                </button>
                <button 
                    type="button"
                    onClick={closeModal}
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
            currentTodo: state.todos.currentTodo,
            spanish: state.settings.spanish,
        }
    );
};

const mapDispatchToProps = {
    toggleTodoModal,
    createNewTodo,
    cancelUpdate,
    updateTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoMaker);
