"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="foot page">
      <div className="colophon">
        Engineered with <b style={{ color: "var(--ink)" }}>Next.js</b> and{" "}
        <b style={{ color: "var(--ink)" }}>NestJS</b>. A{" "}
        <b style={{ color: "var(--ink)" }}>Software Engineer - Full Stack Developer</b> specializing in robust API design and building scalable systems. Built quietly in Karachi.
      </div>

      <div>
        <h6>Index</h6>
        <Link href="/">Changelog</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div>
        <h6>Elsewhere</h6>
        <a href="https://github.com/issabaloach" target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
        <a href="https://linkedin.com/in/muhammadissa" target="_blank" rel="noopener noreferrer">
          LinkedIn ↗
        </a>
      </div>

      <div className="copy">
        <span>© 2026 muhammad issa · karachi</span>
        <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>
          v2026.05 · ↑ back to top
        </a>
      </div>
    </footer>
  );
}
