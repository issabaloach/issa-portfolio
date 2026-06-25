# Issa Portfolio

Portfolio site for Muhammad Issa — software engineer from Karachi. Built as an "engineering changelog" where career milestones are versioned semantically.

## Stack

- **Vite 8** + **React 18** (vanilla JS, no TypeScript)
- **Vanilla CSS** with custom properties (no Tailwind, no CSS-in-JS)
- **Google Fonts**: Fraunces (serif), Inter (sans), JetBrains Mono (mono)

## Commands

```bash
npm run dev      # dev server on localhost:5173
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Architecture

```
src/
├── components/       # Feature-based folders
│   ├── Nav/          # Sticky frosted-glass navbar + scroll spy
│   ├── Hero/         # Name, tagline, latest-release card, stats
│   ├── Changelog/    # FilterBar, Entry, CaseStudy — the main feed
│   ├── About/        # Bio, skills grid, experience timeline
│   ├── Contact/      # CTA + channels card
│   ├── Footer/       # Colophon, links
│   ├── CmdK/         # Cmd+K command palette
│   └── ui/           # Shared: StackList, SearchIcon, MoonIcon
├── data/             # All content — edit here to update portfolio
│   ├── projects.js   # 7 project case studies
│   ├── entries.js    # 13 changelog entries
│   └── about.js      # Skills, jobs, education, contact channels
├── hooks/            # useTheme, useScrollSpy, useKeyboard
├── styles/           # CSS split by section
│   ├── variables.css # Design tokens (single source of truth)
│   ├── base.css      # Reset, utilities, shared components
│   ├── responsive.css # Breakpoints (920px, 600px, 390px)
│   └── [section].css # One file per major section
├── App.jsx           # Root composition
└── main.jsx          # Entry point + CSS imports
```

## CSS Architecture

### Fluid responsive system

Responsive design uses `clamp()` tokens in `variables.css` — not rigid pixel overrides at breakpoints. Key tokens:

| Token | Purpose | Example value |
|---|---|---|
| `--page-px` | Horizontal page padding | `clamp(28px, 7vw, 40px)` |
| `--fs-hero` | Hero name size | `clamp(2.4rem, 7vw + 0.5rem, 7.5rem)` |
| `--fs-h2` | Section headings | `clamp(1.5rem, 3vw + 0.5rem, 2.625rem)` |
| `--fs-tagline` | Hero tagline | `clamp(0.9rem, 1.5vw + 0.4rem, 1.375rem)` |
| `--fs-body` | Body text | `clamp(0.8125rem, 0.5vw + 0.7rem, 0.9375rem)` |
| `--space-section` | Section top padding | `clamp(3rem, 6vw, 6rem)` |
| `--space-grid` | Grid gaps | `clamp(1.5rem, 4vw, 3.75rem)` |

### Critical pattern: `.page` padding

All sections use both `.page` (horizontal padding) and a section class (vertical padding). **Never use `padding` shorthand in section classes** — it zeros out the left/right from `.page`. Always use `padding-top` / `padding-bottom` separately.

```css
/* WRONG — clobbers .page horizontal padding */
.hero { padding: 70px 0 60px; }

/* RIGHT — preserves .page horizontal padding */
.hero { padding-top: 70px; padding-bottom: 60px; }
```

### responsive.css role

`responsive.css` handles **layout shifts only** (grid column changes, element visibility, structural reflows). It does NOT override font sizes or spacing — those scale automatically via `clamp()` tokens.

Breakpoints: 920px (tablet), 600px (mobile), 390px (small mobile).

## Current Status

- Desktop: done
- Mobile: responsive and working — fluid `clamp()` system tested across 375px–428px viewports
- Vite config has `allowedHosts: true` for ngrok testing

## Design Origin

Design was created in Claude Design, exported as a handoff bundle. User chose "W3 — Engineering Changelog" direction from 5 options. Original prototype files are cached locally (see design_origin memory).

## Content Updates

To update Issa's info (new project, job change, etc.), edit files in `src/data/` only. Components read from data — no component changes needed for content updates.
