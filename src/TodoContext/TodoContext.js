import React from 'react';

const TodoContext = React.createContext();

function TodoProvider(props) {
    const [animations, setAnimations] = React.useState(true);
    function toggleAnimations() {
        setAnimations(prevState => !prevState);
    }

    const [highContrast, setHighContrast] = React.useState(false);
    function toggleHighContrast() {
        setHighContrast(prevState => !prevState);
    }

    const [spanish, setSpanish] = React.useState(false);
    function toggleSpanish() {
        setSpanish(prevState => !prevState);
    }
    
    const [darkTheme, setDarkTheme] = React.useState(false);
    function toggleDarkTheme() {
        setDarkTheme(prevState => !prevState);
    }

    return (
        <TodoContext.Provider
            value={{
                animations,
                toggleAnimations,
                highContrast,
                toggleHighContrast,
                spanish,
                toggleSpanish,
                darkTheme,
                toggleDarkTheme,
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };
