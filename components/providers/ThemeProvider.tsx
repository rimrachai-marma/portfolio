"use client";

import React from "react";

const THEME_COOKIE_NAME = "theme";
const THEME_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

const applyTheme = (theme: Theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.cookie = `${THEME_COOKIE_NAME}=${theme}; path=/; max-age=${THEME_COOKIE_MAX_AGE}`;
};

export type Theme = "light" | "dark";
export type ThemePreference = Theme | null;

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

interface Props {
  children: React.ReactNode;
  initialTheme: ThemePreference;
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

const ThemeProvider: React.FC<Props> = ({ children, initialTheme }) => {
  const [theme, setTheme] = React.useState<Theme>(initialTheme ?? "light");

  React.useEffect(() => {
    if (
      !initialTheme &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      applyTheme("dark");
      setTheme("dark");
    }
  }, [initialTheme]);

  const toggleTheme = () => {
    const newTheme: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
