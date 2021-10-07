import React from 'react';

function PendingList(props) {
    return (
        <section className="list-section">
            <h2>Pending tasks</h2>
            <ul 
                className="list"
                {...props.dropableProvided.droppableProps}
                ref={props.dropableProvided.innerRef}
            >
                {props.children}
                {props.dropableProvided.placeholder}
            </ul>
        </section>
    );
}

export { PendingList };
