const activateDarkMode = () => {
    const darkModeStyles = {
        background: '#121212',
        color: '#FFFFFF',
        // Weitere Anpassungen können hier vorgenommen werden
    };

    Object.assign(document.body.style, darkModeStyles);
    localStorage.setItem('darkMode', 'enabled');
};

const deactivateDarkMode = () => {
    const lightModeStyles = {
        background: '#FFFFFF',
        color: '#000000',
    };

    Object.assign(document.body.style, lightModeStyles);
    localStorage.setItem('darkMode', 'disabled');
};

const toggleDarkMode = () => {
    const currentMode = localStorage.getItem('darkMode');
    if (currentMode === 'enabled') {
        deactivateDarkMode();
    } else {
        activateDarkMode();
    }
};

export { activateDarkMode, deactivateDarkMode, toggleDarkMode };