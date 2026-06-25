import { useState, useCallback } from "react";
import { ENTRIES } from "./data/entries";
import { PROJECTS } from "./data/projects";
import { useTheme } from "./hooks/useTheme";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { useKeyboard } from "./hooks/useKeyboard";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Changelog from "./components/Changelog/Changelog";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import CmdK from "./components/CmdK/CmdK";

export default function App() {
  const { toggleTheme } = useTheme();
  const activeSection = useScrollSpy();
  const [cmdkOpen, setCmdkOpen] = useState(false);

  const toggleCmdk = useCallback(() => setCmdkOpen((o) => !o), []);
  useKeyboard("k", toggleCmdk, { meta: true });

  const jump = useCallback((id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
  }, []);

  const latestShipped =
    ENTRIES.find((e) => e.typ === "shipped" && e.featured) ||
    ENTRIES.find((e) => e.typ === "shipped");
  const latestProject = latestShipped ? PROJECTS[latestShipped.project] : null;

  return (
    <>
      <Nav
        activeSection={activeSection}
        onJump={jump}
        onToggleTheme={toggleTheme}
        onOpenCmdk={() => setCmdkOpen(true)}
      />
      <Hero
        latestEntry={latestShipped}
        latestProject={latestProject}
        onJump={jump}
      />
      <Changelog openProjectId={latestShipped?.project} />
      <About />
      <Contact />
      <Footer onJump={jump} />

      {cmdkOpen && (
        <CmdK
          onClose={() => setCmdkOpen(false)}
          onJump={jump}
          onToggleTheme={toggleTheme}
        />
      )}
    </>
  );
}
