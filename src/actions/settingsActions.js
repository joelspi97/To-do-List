function toggleHighContrast() {
    return {
        type: 'TOGGLE_HIGH_CONTRAST',
    };
};

function toggleAnimations() {
    return {
        type: 'TOGGLE_ANIMATIONS',
    };
};

function toggleSpanish() {
    return {
        type: 'TOGGLE_SPANISH',
    };
};

function toggleDarkTheme() {
    return {
        type: 'TOGGLE_DARK_THEME',
    };
};

export { toggleHighContrast, toggleAnimations, toggleSpanish, toggleDarkTheme };