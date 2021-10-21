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
    

    /* Load local storage */
    React.useEffect(()=> {
        const savedValue = JSON.parse(localStorage.getItem('spanish'));
        if(savedValue) {
            setSpanish(savedValue);
        }
    }, []);
        
    /* Save in Local Storage */
    React.useEffect(() => {
        localStorage.setItem('spanish', JSON.stringify(spanish));
    }, [spanish]);


    /* High contrast */
    React.useEffect(() => {
        const root = document.documentElement;
        const MAIN_COLOR = '#288000';
        const MAIN_COLOR_HC = "#000000";
        const BG_COLOR_DARK = "#090d1c";
        const WHITE = "#ffffff";

        root.style.setProperty('--main-color', highContrast ? MAIN_COLOR_HC : MAIN_COLOR);
        root.style.setProperty('--footer-color', WHITE);

        root.style.setProperty('--secondary-color', darkTheme ? BG_COLOR_DARK : WHITE);
        root.style.setProperty('--black', darkTheme ? WHITE : BG_COLOR_DARK);

        if(highContrast && darkTheme) {
            root.style.setProperty('--main-color', WHITE);
            root.style.setProperty('--secondary-color', MAIN_COLOR_HC);
            root.style.setProperty('--black', WHITE);
            root.style.setProperty('--footer-color', MAIN_COLOR_HC);
        }
    }, [highContrast, darkTheme])

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
