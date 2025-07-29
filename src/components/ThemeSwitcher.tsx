import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
            Chuyển sang {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
    );
};

export default ThemeSwitcher;
