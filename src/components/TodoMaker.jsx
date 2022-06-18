import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { toggleTodoModal, toggleTodoAnimationModal, toggleSuccessBanner } from '../actions/modalActions';
import closeModal from './helpers/closeModal';
import { createNewTodo, cancelUpdate, updateTodo } from '../actions/todosActions';
import { v4 as uuidv4 } from 'uuid';
import '../scss/components/TodoMaker.scss';

function TodoMaker(props) {
    const { toggleTodoModal, 
            createNewTodo, 
            currentTodo,
            updateTodo, 
            cancelUpdate,
            spanish,
            animations,
            toggleTodoAnimationModal,
            toggleSuccessBanner, } = props;

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

    function handleSuccessBanner(newTodoProperty) {
        toggleSuccessBanner(newTodoProperty);
                 
        setTimeout(() => {
            toggleSuccessBanner(newTodoProperty);
        }, 4000);
    }

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
            handleSuccessBanner({ newTodo: false });
            closeModal(animations, toggleTodoModal);
            
        } else {
            createNewTodo(
                {
                    description: description, 
                    priority: priority, 
                    id: uuidv4(), 
                    completed: false,
                }
            );
            
            if(animations) {
                toggleTodoModal();

                const modal = document.getElementById('modal');
                toggleTodoAnimationModal();
                
                setTimeout(() => {
                    toggleTodoAnimationModal();
                    modal.classList.remove('modal--dropdown');
                }, 3600);
            
            } else {
                handleSuccessBanner({ newTodo: true });
                closeModal(animations, toggleTodoModal);
            };
        };
    };

    function handleDefaultCheck(inputPriority) {
        if(editingTodo && currentTodo.priority.toString() === inputPriority) {
            return true;
        } else {
            return false;
        };
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

    function handleEscKey(e) {
        if(e.key === 'Escape') {
            e.preventDefault();
            closeModal(animations, toggleTodoModal, cancelUpdate);
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleEscKey);

        return () => {
            document.removeEventListener('keydown', handleEscKey)
        }
    }, [])

    return (
        <form 
            className="todo-maker modal-content"
            onSubmit={submitEvent => handleSubmit(submitEvent, formValue.description, formValue.priority)} 
        >
            <button 
                aria-label={spanish? "Cerrar menu" : "Close menu"}
                type="buttton"
                className="modal-content__close-btn" 
                onClick={(e) => {e.preventDefault(); closeModal(animations, toggleTodoModal, cancelUpdate);}}
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
                    onClick={() => closeModal(animations, toggleTodoModal, cancelUpdate)}
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
            animations: state.settings.animations,
        }
    );
};

const mapDispatchToProps = {
    toggleTodoModal,
    toggleTodoAnimationModal,
    toggleSuccessBanner,
    createNewTodo,
    cancelUpdate,
    updateTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoMaker);
