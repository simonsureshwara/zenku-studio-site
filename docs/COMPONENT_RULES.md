# Component Rules

## Buttons
- Use `components/ui/button.tsx`.
- Variants: `primary`, `secondary`, `ghost`, `destructive`.
- Sizes: `sm`, `md`, `lg`.
- Minimum touch target: 44px.

## Inputs
- Use `components/ui/input.tsx` with label/helper/error support.
- Keep `h-10` height baseline.
- Show clear focus and error states.

## Cards
- Use `components/ui/card.tsx`.
- Default: `shadow-depth-1`.
- Hover: use `ui-elevate` and/or `shadow-depth-2` sparingly.

## Badges
- Use semantic variants where meaning matters.
- Do not use badge colors as decoration.

## Layout Primitives
- `Container`, `Stack`, `Cluster`, `Section`, `Surface`, `Typography`, `FormField`, `Icon`.
- Build sections from primitives first; avoid one-off wrappers.

## Content Rules
- 1 heading + short supporting text + action cluster/list.
- Keep paragraphs compact and scannable.
- One dominant CTA per section.
