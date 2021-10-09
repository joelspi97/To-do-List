import React from 'react';
import { useSettings } from '../../SettingsContext/SettingsContext';

function List(props) {
    const {
        animations,
        highContrast,
        colorBlind,
        spanish,
        darkTheme,} = useSettings();

    return (
        <section className="list-section">
            <h2>
                {props.heading}
            </h2>
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

export { List };
