"use client";

import { createContext, useState, useContext } from "react";
import { ThemeProvider } from "@emotion/react";
import getDynamicTheme from "../theme/DarkLightTheme";

const ThemeContext = createContext();
export default function CustomThemeProvider({ children }) {
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  const theme = getDynamicTheme(mode);
  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useCustomTheme = () => useContext(ThemeContext);
