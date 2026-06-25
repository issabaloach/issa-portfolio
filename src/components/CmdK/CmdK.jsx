import { useState, useEffect, useRef, useMemo } from "react";
import { PROJECTS } from "../../data/projects";
import { ENTRIES } from "../../data/entries";
import SearchIcon from "../ui/SearchIcon";

const GROUP_LABELS = {
  nav: "navigate",
  project: "projects",
  action: "actions",
};

export default function CmdK({ onClose, onJump, onToggleTheme }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const items = useMemo(() => {
    const navItems = [
      { kind: "nav", ico: "↑", name: "Hero", hint: "top of page", action: () => { onJump("top"); onClose(); } },
      { kind: "nav", ico: "◷", name: "Changelog", hint: "all releases", action: () => { onJump("changelog"); onClose(); } },
      { kind: "nav", ico: "@", name: "About", hint: "bio · experience", action: () => { onJump("about"); onClose(); } },
      { kind: "nav", ico: "✉", name: "Contact", hint: "email · github · linkedin", action: () => { onJump("contact"); onClose(); } },
    ];

    const projectItems = Object.entries(PROJECTS).map(([key, p]) => ({
      kind: "project",
      ico: "P",
      name: p.name,
      hint: p.tagline,
      action: () => {
        const entry = ENTRIES.find((e) => e.project === key);
        if (entry) {
          onClose();
          setTimeout(() => {
            document.getElementById(`entry-${entry.ver.replace(/\W/g, "")}`)
              ?.scrollIntoView({ block: "start", behavior: "smooth" });
          }, 50);
        }
      },
    }));

    const actionItems = [
      { kind: "action", ico: "✦", name: "Toggle theme", hint: "light · dark", action: () => { onToggleTheme(); onClose(); } },
      { kind: "action", ico: "↗", name: "Open GitHub", hint: "github.com/muhammadissa", action: () => { window.open("https://github.com/muhammadissa", "_blank"); onClose(); } },
      { kind: "action", ico: "↗", name: "Email Issa", hint: "muhammadissa848@gmail.com", action: () => { window.location.href = "mailto:muhammadissa848@gmail.com"; onClose(); } },
    ];

    return [...navItems, ...projectItems, ...actionItems];
  }, [onClose, onJump, onToggleTheme]);

  const filtered = useMemo(() => {
    if (!query) return items;
    const q = query.toLowerCase();
    return items.filter((i) => `${i.name} ${i.hint}`.toLowerCase().includes(q));
  }, [items, query]);

  const grouped = useMemo(() => {
    return filtered.reduce((acc, item) => {
      (acc[item.kind] ||= []).push(item);
      return acc;
    }, {});
  }, [filtered]);

  useEffect(() => {
    setSelected(0);
  }, [query]);

  function handleKeyDown(e) {
    if (e.key === "Escape") { onClose(); return; }
    if (e.key === "ArrowDown") { e.preventDefault(); setSelected((s) => Math.min(s + 1, filtered.length - 1)); }
    if (e.key === "ArrowUp") { e.preventDefault(); setSelected((s) => Math.max(s - 1, 0)); }
    if (e.key === "Enter") { e.preventDefault(); filtered[selected]?.action(); }
  }

  return (
    <div className="cmdk-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="cmdk-modal" onKeyDown={handleKeyDown}>
        <div className="modal-head">
          <SearchIcon size={16} />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Jump to a section, project, or action..."
          />
          <span className="kbd-mini">esc</span>
        </div>

        <div className="results">
          {Object.entries(grouped).map(([kind, groupItems]) => (
            <div key={kind}>
              <div className="group-label">{GROUP_LABELS[kind]}</div>
              {groupItems.map((item) => {
                const globalIdx = filtered.indexOf(item);
                return (
                  <div
                    key={item.name}
                    className={`item${globalIdx === selected ? " sel" : ""}`}
                    onClick={item.action}
                    onMouseEnter={() => setSelected(globalIdx)}
                  >
                    <span className="ico">{item.ico}</span>
                    <div>
                      <div className="name">{item.name}</div>
                      <div className="hint">{item.hint}</div>
                    </div>
                    <span className="kbd-mini">↵</span>
                  </div>
                );
              })}
            </div>
          ))}
          {filtered.length === 0 && (
            <div style={{
              padding: 30,
              textAlign: "center",
              color: "var(--muted)",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
            }}>
              no matches
            </div>
          )}
        </div>

        <div className="modal-foot">
          <span><span className="kbd-mini">↑</span> <span className="kbd-mini">↓</span> navigate</span>
          <span><span className="kbd-mini">↵</span> select</span>
          <span><span className="kbd-mini">esc</span> close</span>
        </div>
      </div>
    </div>
  );
}
