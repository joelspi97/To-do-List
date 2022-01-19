const settingsInitialState = {
    highContrast: false,
    animations: true,
    spanish: false,
    darkTheme: false,
};

function settingsReducer(settingsState = settingsInitialState, action) {
    switch(action.type) {
        case 'TOGGLE_HIGH_CONTRAST':
            return {
                ...settingsState,
                highContrast: !settingsState.highContrast,
            };
        case 'TOGGLE_ANIMATIONS':
            return {
                ...settingsState,
                animations: !settingsState.animations,
            };

        case 'TOGGLE_SPANISH':
            return {
                ...settingsState,
                spanish: !settingsState.spanish,
            };
        
        case 'TOGGLE_DARK_THEME':
            return {
                ...settingsState,
                darkTheme: !settingsState.darkTheme,
            };
        
        default:
            return settingsState;
    };
};

export default settingsReducer;