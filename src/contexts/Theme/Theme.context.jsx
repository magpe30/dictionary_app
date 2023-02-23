import React, { useState } from 'react';
import { THEMES } from './Theme.config';

export const ThemeContext = React.createContext({
    themeType: 'light',
    theme: THEMES['light'],
});

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{
            themeType: currentTheme, 
            theme: THEMES[currentTheme],
            setCurrentTheme
        }}>
            { children }
        </ThemeContext.Provider>
    )
}

export const useTheme = () => React.useContext(ThemeContext);