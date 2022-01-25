# Button and Link component APIs
Button and Link has been discussed in a number of issues and discussions over past few years. I went through the list below, took note of their purpose and started compiling a new API spec. This doc is is meant to be collaborative and accompany Storybook docs while we work through a final API recommendation. Once we have a solid plan, this can move into an issue and be delegated across frameworks.

Existing issues
- https://github.com/github/primer/issues/141
  -- Accessory button component, should reconcile with reaction button (sister component to Button)
- https://github.com/github/primer/issues/220
  -- Tracking issue, mentions Button in the context of API consistency
- https://github.com/github/primer/issues/253
  -- Button audit, anatomy spec, design considerations, some button link discussion, icon buttons (this issue is very informative!)
- https://github.com/github/primer/issues/263
  -- More design discussion, particularly focused on outline button
- https://github.com/github/primer/issues/272
  -- Make icon only buttons square
- https://github.com/github/primer/issues/321
  -- Super specific button use case?
- https://github.com/github/primer/issues/350
  -- a11y audit with task list for PVC
- https://github.com/github/primer/issues/382
  -- React button refactor
- https://github.com/github/primer/issues/468
  -- Visual bugs (colors, state)
- https://github.com/github/primer/discussions/87
  -- Discussion about accessory buttons
- https://github.com/github/primer/discussions/211
  -- Open ended discussion about primary button as dropdown
- https://github.com/github/primer/discussions/459
  -- Allie's thoughts on limiting icon only buttons and working towards encouraging visual labels
- https://github.com/github/primer/discussions/477
  -- Buttons styled as links, links styled as buttons
- https://github.com/github/primer/issues/65
  -- Segmented control, pressed state discussion

## Specific notes from previous bugs to keep in mind
- [ ]  Check all button variants have shadow present
- [ ]  Ensure icon colors are consistent in hover states
- [ ]  Ensure icon colors are consistent with variants in all states
- [ ]  Ensure disabled colors are consistent across frameworks

## Component list
A few discussions were about naming and prop drilling (source here). We found that for Button to handle all of its use cases, we would need a large number of props– some conditional and dependent on one another. When that happens, it's typically a sign that the logic should be separated into another component.

| Component | Description |
| -- | -- |
| Button | standard `button` with variants, size, visual slots |
| IconButton | `button` with icon only (square) and required `aria-label` |
| ReactionButton | `button` snowflake with specific styles/interaction design (round) potentially a variant |
| ButtonGroup | wrapper to handle grouping buttons |
| Link | `a` with variants, optional trailing visuals |
| LinkStyledAsButton | `a` with button variants, required trailing visual |

## Component API breakdown

### Button

| prop | type | options | default | notes |
| -- | -- | -- | -- | -- |
| `variant` | one-of string | `primary` `secondary` `danger` `invisible` | `secondary` | |
| `size` | one-of string | `small` `default` `large` | `default` | |
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
| `variant` | one-of string | `primary` `secondary` `danger` `invisible` | `secondary` | |
| `size` | one-of string | `small` `default` `large` | `default` | |
| `label` | string | button description | null | |
| `leadingVisual` | children (slot) | octicon | null | |
| `trailingVisual` | children (slot) | octicon | null | |
| `showTrailingAction` | arrow octicon | `true/false` | true? | show trailingVisual icon to indicate linkyness |
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
| `showTrailingAction` | boolean | specific octicon for new tab or new page (or anchor?) | null | |

### ButtonGroup

| prop | type | options | default | notes |
| -- | -- | -- | -- | -- |
| `children` | child slot | | | |

## Next review session
- [ ]  Help refine transition animations + tokenize
- [ ]  Icon colors- same as button text, or specific?
- [ ]  for `LinkStyledAsButton` should `trailingAction` slot be reserved for the > chevron indicating this is a link and not a button? Or is it more of a `trailingVisual`?
- [ ]  What color should `invisible` button variant be? Blue or grey?
- [ ]  No aria-label for `LinkStyledAsButton`
- [ ]  Do we like `fullWidth` or `block` as a prop for width behavior?
- [ ]  Should `ButtonGroup` offer an option with gaps (more of a layout tool)
- [ ]  Should `Button` proper handle a `pressed` (formerly selected) state, or should we create a new component `SegmentedControl` that uses `Button` and provides specific design (color, shadows)?
