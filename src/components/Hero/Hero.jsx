"use client";

const STATS = [
  { lab: "products shipped", val: "8", delta: "across 2 years" },
  { lab: "production uptime", val: "99.9%", delta: "across all deploys" },
  { lab: "stack", val: "Full Stack · NestJS · Py", delta: "Software Engineer - Full Stack Developer" },
  { lab: "since", val: "2022", delta: "first commit, BS CS" },
];

export default function Hero({ latestEntry, latestProject }) {
  return (
    <header className="hero page">
      <div className="hero-grid">
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="pulse-wrap" />
            <span>currently shipping · v3.7 in production</span>
          </div>

          <h1 className="hero-name">
            Muhammad<br />
            <em>Issa</em><span className="ampersand">.</span>
          </h1>

          <p className="hero-tagline">
            Software engineer building{" "}
            <em>the unflashy parts of the internet</em> — multi-tenant SaaS,
            real-time pipelines, the kind of backends people only notice when
            they break.
          </p>

          <div className="hero-meta">
            <span><b>karachi</b> · pk</span>
            <span className="sep">/</span>
            <span><b>Software Engineer - Full Stack Developer</b></span>
            <span className="sep">/</span>
            <span>open to remote</span>
            <span className="sep">/</span>
            <span><b>~24h</b> reply</span>
          </div>
        </div>

        <LatestReleaseCard
          entry={latestEntry}
          project={latestProject}
        />
      </div>

      <div className="hero-stats">
        {STATS.map((s) => (
          <div className="item" key={s.lab}>
            <div className="lab">{s.lab}</div>
            <div className="val">{s.val}</div>
            <div className="delta">{s.delta}</div>
          </div>
        ))}
      </div>
    </header>
  );
}

function LatestReleaseCard({ entry, project }) {
  return (
    <div className="latest-card">
      <div className="label-bar">
        <span>↳ latest release</span>
        <span className="pill-live">live</span>
      </div>
      <div className="body">
        <div className="version-line">
          <b>{entry.ver}</b>
          <span>·</span>
          <span>{entry.date}</span>
          <span className="type-tag">{entry.typ}</span>
        </div>
        <h3>{project ? project.name : entry.title}</h3>
        <p>{project ? project.tagline : entry.body}</p>
        {project && (
          <div className="stack-row">
            {project.stack.slice(0, 5).map((s) => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        )}
        <div className="cta-row">
          {project && <a className="btn btn-ghost" href={project.link || "#"} target="_blank" rel="noopener noreferrer">visit live ↗</a>}
        </div>
      </div>
    </div>
  );
}
