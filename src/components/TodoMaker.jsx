import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { toggleTodoModal } from '../actions/modalActions';
import { useMainContext } from '../contexts/MainContext';
import '../scss/components/TodoMaker.scss';

function TodoMaker({ toggleTodoModal, spanish }) {
    const {
        createNewTodo,
        formValue,
        setFormValue,
        editedTodoId,}= useMainContext();

    const [todoPriority, setTodoPriority] = useState('');
    const [formCompleted, setFormCompleted] = useState(false);

   useEffect(
        () => {
            if (formValue.length > 0 && todoPriority) {
                setFormCompleted(true);
            } else {
                setFormCompleted(false);
            }
        },
        [formValue, todoPriority]
    );

    return (
        <form 
            className="todo-maker modal-content"
            onSubmit={(submitEvent) => (createNewTodo(submitEvent, formValue, todoPriority, editedTodoId), toggleTodoModal)} 
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
                    value={formValue}
                    onChange={event => setFormValue(event.target.value)}
                ></textarea>
            </div>
            
            <div>
                <h2>
                    {spanish? "¿Cuán urgente es?" : "How urgent is it?"}
                </h2>
                <div 
                    className="todo-maker__radio-wrapper"
                    onChange={event => setTodoPriority(event.target.value)}
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
                    className={formCompleted? 'fill-btn' : undefined} 
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
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoMaker);
