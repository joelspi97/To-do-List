import React from 'react';

function PendingList(props) {
    return (
        <section className="list-section">
            <h2>Pending tasks</h2>
            <ul className="list">
                {props.children}
            </ul>
        </section>
    );
}

export { PendingList };
