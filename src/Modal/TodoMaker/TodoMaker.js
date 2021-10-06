import React from 'react';

function TodoMaker({ hideModal, createNewTodo, formValue, setFormValue, editedTodoId }) {
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
            className="todo-maker project-padding"
            onSubmit={(submitEvent) => createNewTodo(submitEvent, formValue, todoPriority, editedTodoId)} 
        >
            <button 
                className="todo-maker__close-btn" type="buttton"
                onClick={hideModal}
            >
                <span className="icon x-icon"></span>
            </button>
            <div className="todo-maker__description-wrapper">
                <label htmlFor="description">Describe the task:</label>
                <textarea 
                    id="description" placeholder="e.g. Mow the lawn..." required
                    value={formValue}
                    onChange={event => setFormValue(event.target.value)}
                ></textarea>
            </div>
            
            <div>
                <h2>How urgent is it?</h2>
                <div 
                    className="todo-maker__radio-wrapper"
                    onChange={event => setTodoPriority(event.target.value)}
                >
                    <label>
                        Not that urgent
                        <input type="radio" name="priority" value="low" required />
                    </label>
                    <label>
                        Mildly urgent
                        <input type="radio" name="priority" value="medium" required />
                    </label>
                    <label>
                        Very urgent
                        <input type="radio" name="priority" value="high" required />
                    </label>
                </div>
            </div>

            <div className="todo-maker__btns-wrapper">
                <button 
                    type="submit"
                    className={`submit-btn ${formCompleted && 'fill-btn'}`} 
                >
                    {!editedTodoId && "Create To-Do!"}
                    {editedTodoId && "Edit To-Do"}
                </button>
                <button 
                    className="cancel-btn" type="button"
                    onClick={hideModal}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}

export { TodoMaker };
