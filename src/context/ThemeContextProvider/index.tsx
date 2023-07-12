"use Client";
import { darkTheme, lightTheme } from "@/styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useState } from "react";
type ThemeContextType = {
  darkMode?: boolean;
  toggleDarkMode?: () => void;
};
type IThemeContextProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
});

export const ThemeContextProvider = ({ children }: IThemeContextProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  const theme = darkMode ? darkTheme : lightTheme;

  const initialValue: ThemeContextType = {
    darkMode,
    toggleDarkMode,
  };
  console.log("theme props =>", theme);

  return (
    <ThemeContext.Provider value={initialValue}>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
