import React from 'react';

const SettingsContext = React.createContext();
const SettingsUpdateContext = React.createContext();

function useSettings() {
    return React.useContext(SettingsContext);
}

function useSettingsUpdate() {
    return React.useContext(SettingsUpdateContext);
}

function SettingsProvider(props) {
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
        <SettingsContext.Provider
            value={{
                animations,
                highContrast,
                spanish,
                darkTheme,
            }}
        >
            <SettingsUpdateContext.Provider
                value={{
                    toggleAnimations,
                    toggleHighContrast,
                    toggleSpanish,
                    toggleDarkTheme,
                }}
            >
                {props.children}
            </SettingsUpdateContext.Provider>
        </SettingsContext.Provider>
    );
}

export {  useSettings, useSettingsUpdate, SettingsProvider };