import React from 'react';

function CompletedList(props) {
    return (
        <section className="list-section">
            <h2>Completed tasks</h2>
            <ul 
                className="list completed-list"
                {...props.dropableProvided.droppableProps}
                ref={props.dropableProvided.innerRef}
            >
                {props.children}
                {props.dropableProvided.placeholder}
            </ul>
        </section>
    );
}

export { CompletedList };
