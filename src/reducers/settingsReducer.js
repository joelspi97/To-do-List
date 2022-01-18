const settingsInitialState = {
    highContrast: false,
    animations: true,
    spanish: false,
    darkTheme: false,
};

function settingsReducer(state = settingsInitialState, action) {
    switch(action.type) {
        case 'TOGGLE_HIGHT_CONTRAST':
            return {
                ...state,
                highContrast: !state.highContrast,
            };
        case 'TOGGLE_ANIMATIONS':
            return {
                ...state,
                highContrast: !state.highContrast,
            };

        case 'TOGGLE_TOGGLE_SPANISH':
            return {
                ...state,
                highContrast: !state.highContrast,
            };
        
        case 'TOGGLE_DARK_THEME':
            return {
                ...state,
                highContrast: !state.highContrast,
            };
        
        default:
            return state;
    };
};

export default settingsReducer;