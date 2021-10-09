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
    const [settingsChanged, setSettingsChanged] = React.useState(false);

    const [animations, setAnimations] = React.useState(true);
    function toggleAnimations() {
        setSettingsChanged(true);
        setAnimations(prevState => !prevState);
    }

    const [highContrast, setHighContrast] = React.useState(false);
    function toggleHighContrast() {
        setSettingsChanged(true);
        setHighContrast(prevState => !prevState);
    }

    const [colorBlind, setColorBlind] = React.useState(false);
    function toggleColorBlind() {
        setSettingsChanged(true);
        setColorBlind(prevState => !prevState);
    }

    const [spanish, setSpanish] = React.useState(false);
    function toggleSpanish() {
        setSettingsChanged(true);
        setSpanish(prevState => !prevState);
        
        const mainElement = document.querySelector('html');
        if (mainElement.getAttribute('lang') === 'en') {
            mainElement.setAttribute('lang', 'es');
        } else {
            mainElement.setAttribute('lang', 'en');

        }
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
                colorBlind,
                spanish,
                darkTheme,
            }}
        >
            <SettingsUpdateContext.Provider
                value={{
                    toggleAnimations,
                    toggleHighContrast,
                    toggleColorBlind,
                    toggleSpanish,
                    toggleDarkTheme,
                    settingsChanged,
                }}
            >
                {props.children}
            </SettingsUpdateContext.Provider>
        </SettingsContext.Provider>
    );
}

export {  useSettings, useSettingsUpdate, SettingsProvider };
