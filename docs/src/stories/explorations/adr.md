# Discussion: Button and Link APIs

Button and Link has been discussed in a number of issues and discussions over past few years. I went through the list[ref], took note of their purpose and started compiling a new API spec. I've been working on a spec in the Primer CSS Storybook to validate and stress test, and some of these decisions have already been implemented in the new PRC Button component(link).

I'd like to use this discussion to align on API decisions, naming things, and design enhancements for Buttons and Links. Once a decisions has been reached, I'll formalize an ADR which will enable each Primer framework to move forward or plan for these improvements.

## Component list
A few [discussions](https://github.com/github/primer/discussions/477) were about naming and prop drilling. We found that for Button to handle all of its use cases, we would need a large number of props– some conditional and dependent on one another. When that happens, it's typically a sign that the logic should be separated into a separate component.

| Component | Description |
| -- | -- |
| Button | standard `button` with variants, size, visual slots |
| IconButton | `button` with icon only (square) and required `aria-label` |
| ReactionButton | `button` snowflake with specific styles/interaction design |
| ButtonGroup | wrapper to handle grouping buttons |
| Link | `a` with variants, optional trailing visuals |
| LinkStyledAsButton | `a` with button variants, *required* trailing visual |



### Button

| prop | type | options | default | notes |
| -- | -- | -- | -- | -- |
| `variant` | one-of string | `primary` `secondary` `danger` `invisible` | `secondary` | |
| `size` | one-of string | `small` `default` `large` | `default` | |
| `label` | string | button description | null | required |
| `aria-label` | string | button description for screen readers | null | additional button context |
| `aria-pressed` | boolean | `true/false` | `false` | replaces `selected` (not valid) |
| `leadingVisual` | children (slot) | octicon | null | |
| `trailingVisual` | children (slot) | octicon | null | |
| `trailingAction` | children (slot) | octicon | null | slot for caret to maintain leading/trailing visuals if they exist |
| `fullWidth` | boolean | `true/false` | `false` | |
| `alignContent` | one-of string | `center` `start` | `center` | align content center or to start/left of button |

**Visuals**
<details>
  <summary>Click to expand!</summary>
  
  stuff
</details>

**Primitives**
<details>
  <summary>Primitive variables</summary>
  
  | variant | property | token | value |
  | -- | -- | -- | -- |
  | small | `height` | `--gh-control-medium-size` | 32px |
  | small | `padding` | 0 `--gh-control-medium-paddingInline-normal` | 12px |
  | small | `gap` | `--gh-control-medium-gap` |
  | medium | `height` | `--gh-control-medium-size` | 32px |
  | medium | `padding` | 0 `--gh-control-medium-paddingInline-normal` | 12px |
  | medium | `gap` | `--gh-control-medium-gap` |
</details>

### LinkStyledAsButton

Shares props and styled with `Button`, with the exception of: `aria-label` and `aria-pressed`

| prop | type | options | default | notes |
| -- | -- | -- | -- | -- |
| `variant` | one-of string | `primary` `secondary` `danger` `invisible` | `secondary` | |
| `size` | one-of string | `small` `default` `large` | `default` | |
| `label` | string | button description | null | required |
| `leadingVisual` | children (slot) | octicon | null | |
| `trailingVisual` | children (slot) | octicon | null | |
| `trailingAction` | children (slot) | octicon | null | slot for caret to maintain leading/trailing visuals if they exist |
| `fullWidth` | boolean | `true/false` | `false` | |
| `alignContent` | one-of string | `center` `start` | `center` | align content center or to start/left of button |

**Visuals**
<details>
  <summary>Click to expand!</summary>
  
  stuff
</details>

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


## Design refinements

| current | proposed | notes
| -- | -- | -- |

## Accessibility
- aria-labels
- touch target
- color?


* Don't use viewport range names to refer to individual values
  
  ```
  ✅
  narrow: 0 - 768px
  
  ❌
  narrow: 768px
  ```
