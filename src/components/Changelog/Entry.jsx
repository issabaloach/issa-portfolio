"use client";

import { useState } from "react";
import StackList from "../ui/StackList";
import CaseStudy from "./CaseStudy";

export default function Entry({ entry, project, defaultOpen }) {
  const [open, setOpen] = useState(!!defaultOpen);
  const isProject = !!entry.project;

  return (
    <article
      id={`entry-${entry.ver.replace(/\W/g, "")}`}
      className={`entry ${entry.typ}${open ? " open" : ""}`}
    >
      <div className="stamp">
        <div className="ver">{entry.ver}</div>
        <div className="date">{entry.date}</div>
        <span className={`type-badge type-${entry.typ}`}>{entry.typ}</span>
      </div>

      <div className="entry-body">
        <h3
          className={`entry-title${isProject ? " clickable" : ""}`}
          onClick={isProject ? () => setOpen((o) => !o) : undefined}
        >
          {project ? (
            <>Shipped <em>{project.name}</em> — {project.tagline.toLowerCase().replace(/\.$/, "")}.</>
          ) : (
            entry.title
          )}
        </h3>

        <p className="entry-blurb">{entry.body}</p>
        {entry.body2 && <p className="entry-blurb">{entry.body2}</p>}

        {project && (
          <div className="entry-meta-row">
            <span className="domain">→ <a href={project.link || "#"} target="_blank" rel="noopener noreferrer">{project.domain}</a></span>
            <StackList items={project.stack} max={5} />
          </div>
        )}

        {isProject ? (
          <button className="expand-btn" onClick={() => setOpen((o) => !o)}>
            <span className="chev">▸</span>
            <span>{open ? "collapse release notes" : "open release notes"}</span>
          </button>
        ) : entry.href ? (
          <a
            className="expand-btn"
            href={entry.href}
            style={{
              color: "var(--accent)",
              borderColor: "var(--accent)",
              background: "var(--accent-soft)",
            }}
          >
            <span>{entry.hrefLabel || "read more"} →</span>
          </a>
        ) : null}

        {isProject && (
          <div className="case-study" aria-hidden={!open}>
            <div className="case-study-inner">
              {open && <CaseStudy project={project} />}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
