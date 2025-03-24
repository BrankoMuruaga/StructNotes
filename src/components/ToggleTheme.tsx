import { useEffect, useState } from "react";
import Moon from "@icons/Moon";
import Sun from "@icons/Sun";
import type { ComponentProps } from "@src/types";

function ToggleTheme({ className }: ComponentProps) {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.theme = newMode ? "dark" : "light";
      return newMode;
    });
  };

  return (
    <button
      className={
        "bg-tertiary-light size-6 p-1 m-auto flex justify-center items-center rounded-2xl cursor-pointer hover:bg-secondary-light active:bg-quaternary-light dark:bg-tertiary-dark dark:hover:bg-secondary-dark dark:active:bg-quaternary-dark " +
        className
      }
      onClick={handleToggle}
    >
      {isDarkMode ? <Moon fill="white" size={20} /> : <Sun size={20} />}
    </button>
  );
}

export default ToggleTheme;
