import React, { ReactNode, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }): JSX.Element => {
  const [isDarkTheme, setIsDarkThemeState] = useState<boolean>(false);

  const setIsDarkTheme = (value: boolean) => {
    setIsDarkThemeState(value);
  };

  useEffect(() => {
    const userTheme = localStorage.getItem("theme");
    const systemDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (userTheme === "dark" || systemDarkTheme) {
      setIsDarkTheme(true);
    } else if (!userTheme) {
      setIsDarkTheme(true);
    } else {
      setIsDarkTheme(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkTheme]);

  return <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>{children}</ThemeContext.Provider>;
};
