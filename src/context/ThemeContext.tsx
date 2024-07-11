import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';
import Colors, { ColorsInterface } from '../styles/Colors';

interface ThemeContextType {
    theme: ColorSchemeName;
    toggleTheme: () => void;
    colors: ColorsInterface;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<ColorSchemeName>(Appearance.getColorScheme());

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    useEffect(() => {
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            setTheme(colorScheme);
        });
        return () => subscription.remove();
    }, []);

    const themeColors = theme === 'light' ? Colors.dark : Colors.light;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, colors: themeColors }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme failed");       
    }

    return context;
}