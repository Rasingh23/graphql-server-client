/*
 * Set page theme using Context
 */

import React from "react";

const themeColours = {
  light: {
    color: "#343434",
    backgroundColor: "#fefefe",
    primraryColor: "#03DAC6"
  },
  dark: {
    color: "#fff",
    backgroundColor: "#3f3f3f",
    primraryColor: "#8739f9"
  }
};

type themeName = "light" | "dark";
type themeContextType = {
  theme: themeName;
  setTheme: (name: themeName) => void;
};
const ThemeContext = React.createContext<themeContextType>(undefined!);

type Props = {
  children: React.ReactNode;
};
export const ThemeProvider = ({ children }: Props) => {
  const [themeName, setThemeName] = React.useState<themeName>("light");

  const setTheme = (name: themeName) => {
    document.body.style.setProperty("--color", themeColours[name].color);
    document.body.style.setProperty(
      "--background-color",
      themeColours[name].backgroundColor
    );
    document.body.style.setProperty(
      "--primary-color",
      themeColours[name].primraryColor
    );
    setThemeName(name);
  };
  React.useEffect(() => {
    const darkOS = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(darkOS ? "dark" : "light");
  }, []);
  return (
    <ThemeContext.Provider value={{ theme: themeName, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
