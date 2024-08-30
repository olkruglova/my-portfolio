import { createContext } from "react";

export const defaultThemeValue = {
  isDarkTheme: false,
  setIsDarkTheme: (value: boolean) => {}
};

export const ThemeContext = createContext<{
  isDarkTheme: boolean;
  setIsDarkTheme: (value: boolean) => void;
}>(defaultThemeValue);
