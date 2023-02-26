import React, { useState } from 'react';
import { THEMES, FONTS } from './Theme.config';

export const ThemeContext = React.createContext({
    themeType: 'light',
    theme: THEMES['light'],
    fontType: 'nanum',
    font: FONTS['nanum'],
});

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState('light');
    const [currentFont, setCurrentFont] = useState('nanum')

    return (
        <ThemeContext.Provider value={{
            themeType: currentTheme, 
            theme: THEMES[currentTheme],
            setCurrentTheme,
            fontType: currentFont,
            font: FONTS[currentFont],
            setCurrentFont,
        }}>
            { children }
        </ThemeContext.Provider>
    )
}

export const useTheme = () => React.useContext(ThemeContext);