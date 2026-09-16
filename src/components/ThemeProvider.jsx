import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // Theme switching still works when browser storage is unavailable.
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: () => setTheme(current => current === "dark" ? "light" : "dark") }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
