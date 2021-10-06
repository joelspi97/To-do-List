import React from 'react';

function CompletedList(props) {
    return (
        <section className="list-section">
            <h2>Completed tasks</h2>
            <ul className="list completed-list">
                {props.children}
            </ul>
        </section>
    );
}

export { CompletedList };
