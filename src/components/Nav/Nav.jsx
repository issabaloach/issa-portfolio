import Link from "next/link";
import { usePathname } from "next/navigation";
import MoonIcon from "../ui/MoonIcon";

const NAV_LINKS = [
  { id: "/", num: "01", label: "Changelog" },
  { id: "/about", num: "02", label: "About" },
  { id: "/contact", num: "03", label: "Contact" },
];

export default function Nav({ onToggleTheme, onOpenCmdk }) {
  const pathname = usePathname();
  
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-brand">
          <span className="bmark">i</span>
          <b>muhammad_issa</b>
          <small>/ engineer</small>
        </Link>

        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              href={link.id}
              className={pathname === link.id ? "cur" : ""}
            >
              <span className="lab-num">{link.num}</span>
              {link.label}
            </Link>
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
