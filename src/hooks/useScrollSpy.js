import { useState, useEffect } from "react";

const SECTION_IDS = ["changelog", "about", "contact"];
const SCROLL_OFFSET = 200;

export function useScrollSpy() {
  const [active, setActive] = useState("changelog");

  useEffect(() => {
    function onScroll() {
      const scrollPos = window.scrollY + SCROLL_OFFSET;
      let current = SECTION_IDS[0];

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) current = id;
      }

      setActive(current);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return active;
}
