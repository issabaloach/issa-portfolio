import { useState, useEffect, useCallback } from "react";

export function useTheme(initialTheme = "light") {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("portfolio-theme");
      return stored || initialTheme;
    }
    return initialTheme;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggleTheme };
}
