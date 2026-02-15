# Zenku Global Design System

## Purpose
This system defines reusable design and motion rules for the whole site:
- consistent spacing and hierarchy
- premium depth and card treatment
- subtle, readable animation behavior

## Core Tokens
Defined in `app/globals.css` under `:root`.

- Spacing:
  - `--space-2xs`, `--space-xs`, `--space-sm`, `--space-md`, `--space-lg`, `--space-xl`
  - `--section-gap` for section rhythm
  - `--hero-metrics-gap` for compact first-screen spacing
- Radius and depth:
  - `--radius-card`
  - `--card-shadow-near`, `--card-shadow-far`
  - `--card-highlight-inset`, `--card-shadow-inset`
- Motion:
  - `--motion-duration-fast`, `--motion-duration-base`, `--motion-duration-slow`
  - `--motion-ease-soft`, `--motion-ease-standard`, `--motion-ease-bounce`
  - `--perspective-card`

## Shared UI Utilities
Defined in `app/globals.css`.

- Typography:
  - `.section-heading`
  - `.section-lead`
- Surface and depth:
  - `.ui-metric-card`
  - `.ui-metric-card--primary`
  - `.ui-metric-card--secondary`
- Motion:
  - `.ui-transition` (global transition shorthand)
  - `.ui-elevate` (micro lift)
  - `.ui-shine` (sweep highlight using pseudo-element)
  - `.ui-3d-stage` + `.ui-3d-card` (subtle 3D depth via perspective/preserve-3d)
- Navigation:
  - `.ui-nav-link` + active underline behavior

## Animation Rules
From the provided animation transcript, only practical UI-safe parts are applied:

1. Use shorthand transitions consistently:
   - one shared transition language (`.ui-transition`)
2. Prefer natural easing:
   - standard cubic-bezier for most UI moves
3. Use layered interaction:
   - transform + shadow changes together
4. Use pseudo-elements for polish:
   - shine/sweep effect (`.ui-shine`)
5. Use 3D with restraint:
   - perspective and preserve-3d only for subtle depth
6. Respect reduced motion:
   - interactions remain readable with minimal movement

## Current Usage
- `app/page.tsx`:
  - Hero CTAs use `.ui-transition .ui-elevate .ui-shine`
  - Metrics section uses `.ui-3d-stage` and `.ui-3d-card`
  - Service/system cards use `.ui-transition .ui-elevate`
  - section spacing uses `--section-gap`
- `components/layout/navbar.tsx`:
  - Desktop and mobile links use `.ui-nav-link`
  - CTA buttons use `.ui-transition .ui-elevate .ui-shine`
- `components/ui/reveal.tsx`:
  - reveal motion uses the same easing language
- `components/primitives/*`:
  - `Container`, `Stack`, `Cluster`, `Section`, `Surface`, `Typography`, `FormField`, `Icon`

## Foundation Docs
- `docs/FOUNDATION_BASELINE.md` (merged decision policy from both guides)
- `docs/TOKENS.md` (token map)
- `docs/COMPONENT_RULES.md` (component usage contracts)
- `docs/TOKEN_GOVERNANCE.md` (change discipline)
- `docs/A11Y.md` (accessibility baseline)

## Guardrails
- Avoid infinite looping animations for core UI.
- Keep motion event-driven (hover, view, click), not constant.
- Keep transform ranges small and readable.
- Keep important text always stable and legible.
