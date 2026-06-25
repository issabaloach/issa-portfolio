import { useEffect } from "react";

export function useKeyboard(key, callback, modifiers = {}) {
  useEffect(() => {
    function handler(e) {
      const matchesMeta = modifiers.meta ? e.metaKey || e.ctrlKey : true;
      if (matchesMeta && e.key.toLowerCase() === key.toLowerCase()) {
        e.preventDefault();
        callback();
      }
    }

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [key, callback, modifiers]);
}
