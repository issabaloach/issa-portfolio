import MoonIcon from "../ui/MoonIcon";

const NAV_LINKS = [
  { id: "changelog", num: "01", label: "Changelog" },
  { id: "about", num: "02", label: "About" },
  { id: "contact", num: "03", label: "Contact" },
];

export default function Nav({ activeSection, onJump, onToggleTheme, onOpenCmdk }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="nav-brand" onClick={() => onJump("top")}>
          <span className="bmark">i</span>
          <b>muhammad_issa</b>
          <small>/ engineer</small>
        </a>

        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              className={activeSection === link.id ? "cur" : ""}
              onClick={() => onJump(link.id)}
            >
              <span className="lab-num">{link.num}</span>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <span className="nav-status">
            <span className="status-dot" />
            open to work
          </span>
          <button className="cmdk-trigger" onClick={onOpenCmdk}>
            <span>search</span>
            <span className="kbd">⌘K</span>
          </button>
          <button className="nav-icon-btn" onClick={onToggleTheme} title="Toggle theme">
            <MoonIcon />
          </button>
        </div>
      </div>
    </nav>
  );
}
