import React from 'react';

function List(props) {
    return (
        <section className="list-section">
            <h2>
                {props.heading}
            </h2>
            <ul 
                {...props.dropableProvided.droppableProps}
                ref={props.dropableProvided.innerRef}
            >
                {props.children}
                {props.dropableProvided.placeholder}
            </ul>
        </section>
    );
}

export { List };
