# Button and Link component APIs
Button and Link has been discussed in a number of issues and discussions over past few years. I went through the list below, took note of their purpose and started compiling a new API spec. This doc is is meant to be collaborative and accompany Storybook docs while we work through a final API recommendation. Once we have a solid plan, this can move into an issue and be delegated across frameworks.

Existing issues
[x] https://github.com/github/primer/issues/141
- Accessory button component, should reconcile with reaction button (sister component to Button)
[x] https://github.com/github/primer/issues/220
- Tracking issue, mentions Button in the context of API consistency
[x] https://github.com/github/primer/issues/253
- Button audit, anatomy spec, design considerations, some button link discussion, icon buttons (this issue is very informative!)
[x] https://github.com/github/primer/issues/263
- More design discussion, particularly focused on outline button
[x] https://github.com/github/primer/issues/272
- Make icon only buttons square
[x] https://github.com/github/primer/issues/321
- Super specific button use case?
[x] https://github.com/github/primer/issues/350
- a11y audit with task list for PVC
[x] https://github.com/github/primer/issues/382
- React button refactor
[x] https://github.com/github/primer/issues/468
- Visual bugs (colors, state)
[x] https://github.com/github/primer/discussions/87
- Discussion about accessory buttons
[x] https://github.com/github/primer/discussions/211
- Open ended discussion about primary button as dropdown
[x] https://github.com/github/primer/discussions/459
- Allie's thoughts on limiting icon only buttons and working towards encouraging visual labels
[x] https://github.com/github/primer/discussions/477
- Buttons styled as links, links styled as buttons

## Specific notes from previous bugs to keep in mind
[] Check all button variants have shadow present
[] Ensure icon colors are consistent in hover states
[] Ensure icon colors are consistent with variants in all states
[] Ensure disabled colors are consistent across frameworks

## Component list
A few discussions were about naming and prop drilling (source here). We found that for Button to handle all of its use cases, we would need a large number of props– some conditional and dependent on one another. When that happens, it's typically a sign that the logic should be separated into another component.

| Component | Description |
| -- | -- |
| Button | standard `button` with variants, size, visual slots |
| IconButton | `button` with icon only (square) and required `aria-label` |
| ButtonStyledAsLink | `button` that visually looks like a link |
| ReactionButton | `button` snowflake with specific styles/interaction design |
| ButtonGroup | wrapper to handle grouping buttons |
| Link | `a` with variants, optional trailing visuals |
| LinkStyledAsButton | `a` with button variants, required trailing visuals |

## Component API breakdown

### Button

| prop | type | options | default | notes |
| -- | -- | -- | -- | -- |
| `variant` | one-of string | `primary` `secondary` `danger` `outline`? | `secondary` | |
| `size` | one-of string | `small` `default` `large` | `default | |
| `label` | string | button description | null | |
| `aria-label` | string | button description for screen readers | null | |
| `aria-pressed` | boolean | `true/false` | `false` | |
| `leadingVisual` | children (slot) | octicon | null | |
| `trailingVisual` | children (slot) | octicon | null | |
| `trailingAction` | children (slot) | octicon | null | slot for caret to maintain leading/trailing visuals if they exist |
| `fullWidth` | boolean | `true/false` | `false` | |
| `visualPosition` | one-of string | `fixed` `some-other-word` | `fixed` | lock icon to the text label or to the button container |


### LinkStyledAsButton

| prop | type | options | default | notes |
| -- | -- | -- | -- | -- |
| `variant` | one-of string | `primary` `secondary` `danger` `outline`? | `secondary` | |
| `size` | one-of string | `small` `default` `large` | `default | |
| `label` | string | button description | null | |
| `leadingVisual` | children (slot) | octicon | null | |
| `trailingVisual` | children (slot) | octicon | null | |
| `trailingAction` | children (slot) | octicon | null | slot for caret to maintain leading/trailing visuals if they exist |
| `fullWidth` | boolean | `true/false` | `false` | |
| `visualPosition` | one-of string | `fixed` `some-other-word` | `fixed` | lock icon to the text label or to the button container |

### IconButton

| prop | type | options | default | notes |
| -- | -- | -- | -- | -- |
| `variant` | one-of string | `primary` `secondary` `danger` `outline`? | `secondary` | |
| `size` | one-of string | `small` `default` `large` | `default | |
| `aria-label` | string | button description for screen readers (required) | null | |
| `visual` | children (slot) | octicon | null | |
| `aria-pressed` | boolean | `true/false` | `false` | |

### Link

| prop | type | options | default | notes |
| -- | -- | -- | -- | -- |
| `variant` | one-of string | ?? we need to work on this (subtle and or muted) | |
| `label` | string | button description | null | |
| `showTrailingVisual` | boolean | specific octicon for new tab or new page (or anchor?) | null | |

### ButtonStyledAsLink

| prop | type | options | default | notes |
| -- | -- | -- | -- | -- |
| `variant` | one-of string | see above confusion | `secondary` | |
| `size` | one-of string | `small` `default` `large` | `default | |
| `label` | string | button description | null | |
| `aria-label` | string | button description for screen readers | null | |
| `aria-pressed` | boolean | `true/false` | `false` | |
| `leadingVisual` | children (slot) | octicon | null | |
| `trailingVisual` | children (slot) | octicon | null | |
| `fullWidth` | boolean | `true/false` | `false` | |
| `visualPosition` | one-of string | `fixed` `some-other-word` | `fixed` | I think this should be fixed for link styles (so maybe we dont need this prop) |

### ButtonGroup

| prop | type | options | default | notes |
| -- | -- | -- | -- | -- |
| | | | |

## Notes
[] Should Button have a `secondary` variant, or should it be the default with no additional class?
[] How granular should icon positioning be?
- If both trailingVisual and trailingAction exist, and visualPosition is `fixed`, the trailingVisual will "lock" to the trailingAction (unless we are more granular and specify different lock scenarios as props)
- One idea would be to always lock trailingAction (always affix it to the right of a button which will only be visible on full width) and maintain visualPosition prop _only_ for visuals
[] Thoughts on buttons with trailingAction having less margin-right?
[] Should we think about underlining links with this work, or is that scope creep?
[] Button styled as link is trickiest, and we need to decide how much logic that component can have compared to Button
