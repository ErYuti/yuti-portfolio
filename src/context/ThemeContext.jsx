import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [accentColor, setAccentColor] = useState("#1DB954"); // Default Green

    // Hex to RGB helper for CSS variables
    const hexToRgb = (hex) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `${r}, ${g}, ${b}`;
    };

    const toggleThemeMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const changeAccentColor = (color) => {
        setAccentColor(color);
    };

    useEffect(() => {
        // Apply Dark/Light Mode
        document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");

        // Apply Accent Color Variable
        document.documentElement.style.setProperty("--primary-rgb", hexToRgb(accentColor));
    }, [isDarkMode, accentColor]);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleThemeMode, accentColor, changeAccentColor }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);