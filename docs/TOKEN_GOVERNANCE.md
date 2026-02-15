# Token Governance

## Rules
1. No new token without a concrete reuse case.
2. No arbitrary value in JSX when an existing token fits.
3. Keep spacing on the established scale.
4. Prefer semantic tokens over direct color ramps in components.
5. Depth must use `shadow-depth-*` or `shadow-recessed`.
6. Add to docs when introducing a new primitive or token.

## Review Checklist
- Is this value already available as token?
- Does this improve consistency across at least two components?
- Is accessibility preserved (contrast/focus/motion)?
- Is the change documented in `docs/TOKENS.md` or `docs/COMPONENT_RULES.md`?
