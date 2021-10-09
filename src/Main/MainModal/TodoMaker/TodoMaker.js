import React from 'react';
import { useSettings } from '../../../SettingsContext/SettingsContext';

function TodoMaker({ hideModal, createNewTodo, formValue, setFormValue, editedTodoId }) {
    const {
        animations,
        highContrast,
        spanish,
        darkTheme,} = useSettings();

    const [todoPriority, setTodoPriority] = React.useState('');
    const [formCompleted, setFormCompleted] = React.useState(false);

    React.useEffect(
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
            className="todo-maker modal"
            onSubmit={(submitEvent) => createNewTodo(submitEvent, formValue, todoPriority, editedTodoId)} 
        >
            <button 
                type="buttton"
                className="modal__close-btn" 
                onClick={hideModal}
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

            <div className="modal__bottom-btns">
                <button 
                    type="submit"
                    className={`submit-btn ${formCompleted && 'fill-btn'}`} 
                >
                    {spanish? !editedTodoId && "¡Crear To-Do!" : !editedTodoId && "Create To-Do!"}
                    {spanish? editedTodoId && "Editar To-Do" : editedTodoId && "Edit To-Do"}
                </button>
                <button 
                    type="button"
                    className="cancel-btn" 
                    onClick={hideModal}
                >
                    {spanish? "Cancelar" : "Cancel"}
                </button>
            </div>
        </form>
    );
}

export { TodoMaker };