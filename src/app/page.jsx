import Hero from "../components/Hero/Hero";
import Changelog from "../components/Changelog/Changelog";
import { ENTRIES } from "../data/entries";
import { PROJECTS } from "../data/projects";

export default function Home() {
  const latestShipped =
    ENTRIES.find((e) => e.typ === "shipped" && e.featured) ||
    ENTRIES.find((e) => e.typ === "shipped");
  const latestProject = latestShipped ? PROJECTS[latestShipped.project] : null;

  return (
    <main>
      <Hero
        latestEntry={latestShipped}
        latestProject={latestProject}
      />
      <Changelog />
    </main>
  );
}
