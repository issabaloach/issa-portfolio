export default function Footer({ onJump }) {
  return (
    <footer className="foot page">
      <div className="colophon">
        Set in <b style={{ color: "var(--ink)" }}>Fraunces</b> and{" "}
        <b style={{ color: "var(--ink)" }}>Inter</b>, with{" "}
        <b style={{ color: "var(--ink)" }}>JetBrains Mono</b> for the engineering
        chatter. Built quietly in Karachi. The whole site is, in spirit, just one
        long release log.
      </div>

      <div>
        <h6>Index</h6>
        <a onClick={() => onJump("changelog")}>Changelog</a>
        <a onClick={() => onJump("about")}>About</a>
        <a onClick={() => onJump("contact")}>Contact</a>
      </div>

      <div>
        <h6>Elsewhere</h6>
        <a href="https://github.com/muhammadissa" target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
        <a href="https://linkedin.com/in/muhammadissa" target="_blank" rel="noopener noreferrer">
          LinkedIn ↗
        </a>
      </div>

      <div className="copy">
        <span>© 2026 muhammad issa · karachi</span>
        <a onClick={() => onJump("top")} style={{ cursor: "pointer" }}>
          v2026.05 · ↑ back to top
        </a>
      </div>
    </footer>
  );
}
