import React from 'react';

function NewTodoBtn({ showModal }) {
    return (
        <button 
            type="button" className="new-todo-btn"
            onClick={showModal}
        >
            Create your first To-Do!
        </button>
    );
}

export { NewTodoBtn };
