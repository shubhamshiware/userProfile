import { createContext, useEffect, useState } from 'react';
import { LS_THEME_KEY } from './../constants';

export const ThemeContext = createContext();

// Context Component
// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem(LS_THEME_KEY) === 'true'
  );

  useEffect(() => {
    localStorage.setItem(LS_THEME_KEY, isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
      {isDark && (
        <style>
          {`body {
                background-color: black;
                color: white;
            }`}
        </style>
      )}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
