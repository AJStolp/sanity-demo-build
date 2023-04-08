import { useEffect, useState } from "react";

interface IToggleTheme {
  setTheme: () => void;
}

function getInitialIsDarkMode() {
  if (
    typeof window !== "undefined" &&
    localStorage?.getItem("color-theme") === "dark"
  ) {
    return true;
  } else if (typeof window === "undefined") {
    return false; // Return the default value when running on the server
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return true; // Use prefers-color-scheme when available
  } else {
    return false;
  }
}

export function useToggleTheme(): IToggleTheme {
  const [isDarkMode, setIsDarkMode] = useState(getInitialIsDarkMode());

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      localStorage.setItem("color-theme", isDarkMode ? "dark" : "light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  function setTheme() {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  }

  return { setTheme };
}
