const activateDarkMode = () => {
    const darkModeStyles = {
        backgroundColor: '#121212',
        color: '#FFFFFF',
        // Further adjustments can be made here
    };

    Object.assign(document.body.style, darkModeStyles);
    localStorage.setItem('darkMode', 'enabled');
};

const deactivateDarkMode = () => {
    const lightModeStyles = {
        backgroundColor: '#FFFFFF',
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

const initializeDarkMode = () => {
    if (localStorage.getItem('darkMode') === null) {
        localStorage.setItem('darkMode', 'disabled');
    } else if (localStorage.getItem('darkMode') === 'enabled') {
        activateDarkMode();
    }
};

initializeDarkMode();

export { activateDarkMode, deactivateDarkMode, toggleDarkMode };