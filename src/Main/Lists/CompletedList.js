import React from 'react';
import { useDrag } from 'react-dnd'

function CompletedList(props) {
    const drop = e => {
        e.preventDefault();
        const todo_id = e.dataTransfer.getData('todo_id');
        const todo = document.getElementById(todo_id);
        todo.style.display = 'block';
        e.target.appendChild(todo);
    }

    const dragOver = e => {
        e.preventDefault();
    }

    return (
        <section className="list-section">
            <h2>Completed tasks</h2>
            <ul 
                className="list completed-list"
                onDrop={drop}
                onDragOver={dragOver} 
            >
                {props.children}
            </ul>
        </section>
    );
}

export { CompletedList };

