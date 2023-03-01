import React, { useState,  Dispatch, SetStateAction } from 'react';
import { THEMES, FONTS } from './Theme.config'
import { ThemeType, Theme, FontType, Font } from './Theme.model';

interface ThemeContextProps {
    themeType: string,
    theme: Theme,
    setCurrentTheme: Dispatch<SetStateAction<ThemeType>>,
    fontType: FontType,
    font: Font,
    setCurrentFont: Dispatch<SetStateAction<FontType>>
  }

export const ThemeContext = React.createContext<ThemeContextProps>({
    themeType: 'light',
    theme: THEMES['light'],
    fontType: 'nanum',
    font: FONTS['nanum'],
} as ThemeContextProps);

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState<ThemeType>('light');
    const [currentFont, setCurrentFont] = useState<FontType>('nanum')

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