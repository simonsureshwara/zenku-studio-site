# Foundation Baseline (Merged from `design-guide.md` + `design-guide25.md`)

## Conflict Resolution Policy
When both guides disagree, we apply this order:
1. **Implementability first** (clear build spec beats abstract principle).
2. **Token-first consistency** (no one-off values in components).
3. **UX clarity over visual novelty** (scanability and conversion).
4. **Accessibility and performance are non-negotiable**.

## What We Standardized
- Global color tokens: neutral, brand/accent ramps, semantic states.
- Global spacing tokens: 4px/8px ladder with section rhythm.
- Depth tokens: `shadow-depth-1/2/3` + `shadow-recessed`.
- Motion tokens and reduced-motion fallback.
- UI primitives and shared components under `components/ui` and `components/primitives`.

## What to Change per Project
- `--brand`
- `--accent`
- optional font variables in `app/layout.tsx`

Everything else should derive from tokens.

## Non-Negotiables
- No hex values inside JSX/TSX.
- No arbitrary spacing unless justified.
- One primary CTA emphasis per section.
- Readable width for long text (keep copy constrained).
- Visible focus state on interactive elements.
