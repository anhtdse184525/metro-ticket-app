import { createContext, useContext, useState } from "react";
import { themes } from "./theme";

// Create our own ThemeContext
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  const { theme, setTheme } = context;

  const toggleTheme = (isDark) => {
    setTheme(isDark ? themes.dark : themes.light);
  };

  return { theme, toggleTheme };
};
