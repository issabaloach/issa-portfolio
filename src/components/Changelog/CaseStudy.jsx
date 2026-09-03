import { Fragment } from "react";
import StackList from "../ui/StackList";

const TOC_ITEMS = [
  { num: "01", label: "Context" },
  { num: "02", label: "Approach" },
  { num: "03", label: "Tradeoffs" },
  { num: "04", label: "Architecture" },
  { num: "05", label: "Outcomes" },
];

export default function CaseStudy({ project }) {
  if (!project) return null;

  return (
    <div className="case-study-card">
      <div className="case-toc">
        {TOC_ITEMS.map((item) => (
          <span className="item" key={item.num}>
            <span className="num">{item.num}</span> {item.label}
          </span>
        ))}
      </div>

      <div className="case-grid">
        <div>
          <div className={`case-screenshot ${project.image ? "has-image" : "no-image"}`}>
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.name} screenshot`}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            ) : (
              <span>{project.name} screenshot</span>
            )}
          </div>

          <div className="case-section" style={{ marginTop: 26 }}>
            <h4>Context</h4>
            <p>{project.context}</p>
          </div>

          <div className="case-section">
            <h4>Approach</h4>
            <ul>
              {project.approach.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="case-section">
            <h4>Tradeoffs</h4>
            <ul>
              {project.tradeoffs.map((item, i) => (
                <li key={i} className="minus">{item}</li>
              ))}
            </ul>
          </div>

          <div className="case-section">
            <h4>Architecture</h4>
            <ArchDiagram nodes={project.arch} />
          </div>

          <div className="case-section">
            <h4>Outcomes</h4>
            <Outcomes metrics={project.metrics} />
          </div>
        </div>

        <CaseSidebar project={project} />
      </div>
    </div>
  );
}

function ArchDiagram({ nodes }) {
  return (
    <div className="arch-diagram">
      {nodes.map((node, i) => (
        <Fragment key={node}>
          <span className="node">{node}</span>
          {i < nodes.length - 1 && <span className="arrow">→</span>}
        </Fragment>
      ))}
    </div>
  );
}

function Outcomes({ metrics }) {
  return (
    <div className="outcomes">
      {metrics.map(([label, value]) => (
        <div className="outcome" key={label}>
          <div className="lab">{label}</div>
          <div className="val">{value}</div>
        </div>
      ))}
    </div>
  );
}

function CaseSidebar({ project }) {
  return (
    <div className="case-side">
      <div className="group">
        <h5>Role</h5>
        <div className="val">{project.role}</div>
      </div>
      <div className="group">
        <h5>Year</h5>
        <div className="val">{project.year}</div>
      </div>
      <div className="group">
        <h5>Domain</h5>
        <div className="val mono" style={{ fontSize: 12.5 }}>{project.domain}</div>
      </div>
      <div className="group">
        <h5>Stack</h5>
        <StackList items={project.stack} />
      </div>
      <div className="group">
        <h5>Links</h5>
        <div className="links">
          <a href={project.link || "#"} target="_blank" rel="noopener noreferrer">
            <span>Visit live</span>
            <span style={{ color: "var(--accent)" }}>↗</span>
          </a>
          <a href="https://github.com/issabaloach" target="_blank" rel="noopener noreferrer">
            <span>GitHub Profile</span>
            <span style={{ color: "var(--accent)" }}>↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}
