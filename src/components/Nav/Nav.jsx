"use client";

import { useState } from "react";
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
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-brand" onClick={() => setIsMobileOpen(false)}>
          <span className="bmark">i</span>
          <b>muhammad_issa</b>
          <small>/ engineer</small>
        </Link>

        <div className={`nav-links ${isMobileOpen ? "mobile-open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              href={link.id}
              className={pathname === link.id ? "cur" : ""}
              onClick={() => setIsMobileOpen(false)}
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
          <button 
            className="nav-icon-btn mobile-toggle" 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            title="Toggle menu"
          >
            {isMobileOpen ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
