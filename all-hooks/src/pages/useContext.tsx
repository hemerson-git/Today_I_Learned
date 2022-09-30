import { createContext, useContext, useState } from "react";
import { GoBack } from "../components/GoBack";
import "./styles/useContext.css";

interface ThemeContextProps {
  mode: "dark" | "light";
  toggleMode: () => void;
}

const ThemeContext = createContext({ mode: "dark" } as ThemeContextProps);

export function UseContextExample() {
  const [mode, setMode] = useState<"dark" | "light">("dark");

  function handleToggleTheme() {
    if (mode === "dark") setMode("light");
    if (mode === "light") setMode("dark");
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleMode: handleToggleTheme }}>
      <GoBack />
      <Button />
    </ThemeContext.Provider>
  );
}

function Button() {
  const { mode, toggleMode } = useContext(ThemeContext);

  return (
    <button onClick={toggleMode} className={mode}>
      {mode}
    </button>
  );
}
