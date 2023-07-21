import { useState } from "react";

function useThemeSwitch() {
  const [theme, setTheme] = useState("dark");

  const handleSetTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  return { theme, handleSetTheme };
}

export default useThemeSwitch;
