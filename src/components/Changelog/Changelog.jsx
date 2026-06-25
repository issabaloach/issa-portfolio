"use client";

import { useState, useMemo } from "react";
import { ENTRIES } from "../../data/entries";
import { PROJECTS } from "../../data/projects";
import FilterBar from "./FilterBar";
import Entry from "./Entry";

const FILTERS = [
  { id: "all", label: "all", match: () => true },
  { id: "shipped", label: "shipped", match: (e) => e.typ === "shipped" },
  { id: "feature", label: "features", match: (e) => e.typ === "feature" },
  { id: "milestone", label: "milestones", match: (e) => e.typ === "milestone" },
  { id: "journal", label: "writing", match: (e) => e.typ === "journal" },
];

export default function Changelog({ openProjectId }) {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const counts = useMemo(
    () => Object.fromEntries(FILTERS.map((f) => [f.id, ENTRIES.filter(f.match).length])),
    [],
  );

  const filtered = useMemo(() => {
    const activeFilter = FILTERS.find((f) => f.id === filter);
    const q = query.toLowerCase();

    return ENTRIES.filter((e) => {
      if (!activeFilter.match(e)) return false;
      if (q && !`${e.title} ${e.body || ""} ${e.ver}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [filter, query]);

  return (
    <section id="changelog" className="section page">
      <div className="section-head">
        <h2>Engineering <em>changelog.</em></h2>
        <p className="sub">
          A reverse-chronological log of every release of a software engineer.
          Versioned semantically because that's how I think about my work.
        </p>
      </div>

      <FilterBar
        filters={FILTERS}
        activeFilter={filter}
        counts={counts}
        query={query}
        onFilterChange={setFilter}
        onQueryChange={setQuery}
      />

      <div className="entries">
        {filtered.map((e) => (
          <Entry
            key={e.ver}
            entry={e}
            project={e.project ? PROJECTS[e.project] : null}
            defaultOpen={e.project === openProjectId}
          />
        ))}
        {filtered.length === 0 && (
          <div style={{
            padding: 60,
            textAlign: "center",
            color: "var(--muted)",
            fontFamily: "var(--font-mono)",
            fontSize: 12,
          }}>
            no releases match — try a different filter.
          </div>
        )}
      </div>
    </section>
  );
}
