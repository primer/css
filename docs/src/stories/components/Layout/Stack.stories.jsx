import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Components/Layout/Stack',
  excludeStories: ['StackTemplate'],
  argTypes: {

    // Debug

    _debug: {
      control: {
        type: 'boolean',
      },
      table: {
        category: 'Debug'
      },
    },

    _height: {
      control: {
        type: 'number',
      },
      table: {
        category: 'Debug'
      },
    },

    _width: {
      control: {
        type: 'number',
      },
      table: {
        category: 'Debug'
      },
    },

    // Direction

    direction: {
      options: ['inline', 'block'],
      control: {
        type: 'inline-radio',
      },
      description: 'Sets how elements inside `Stack` are placed, either horizontally (`inline`) or vertically (`block`). This property follows the writing mode.',
      table: {
        category: 'Properties',
        defaultValue: {
          summary: 'block',
        }
      }
    },
    narrow_direction: {
      options: ['inherit', 'inline', 'block'],
      control: {
        type: 'inline-radio',
      },
      description: 'Override `direction` on narrow viewports',
      table: {
        category: 'Narrow viewport properties',
        defaultValue: {
          summary: 'inherit'
        }
      },
    },

    // Gap

    gap: {
      options: ['none', 'condensed', 'normal', 'spacious', 'custom'],
      control: {
        type: 'inline-radio',
      },
      description: `Sets the spacing gap between items. All sizes are rendered in \`rem\` units.
- \`none\`: 0
- \`condensed\`: 8px
- \`normal\`: 16px (default)
- \`spacious\`: 24px (on regular viewports, otherwise 16px on narrow viewports)
- \`custom\`: set a custom size. In ViewComponent or React, a custom value can be passed directly.
 `,
      table: {
        category: 'Properties',
        defaultValue: {
          summary: 'normal',
        }
      }
    },
    narrow_gap: {
      options: ['inherit', 'none', 'condensed', 'normal', 'custom'],
      control: {
        type: 'inline-radio',
      },
      description: 'Override `gap` on narrow viewports',
      table: {
        category: 'Narrow viewport properties',
        defaultValue: {
          summary: 'inherit'
        }
      },
    },
    gap_custom: {
      control: {
        type: 'text'
      },
      description: 'A custom value to `gap`. Refer to [Primer Primitives](https://primer.style/primitives/spacing) for other spacing tokens. Example: `var(--base-size-12, 12px)`.',
      table: {
        category: 'Properties',
      },
    },
    narrow_gap_custom: {
      control: {
        type: 'text'
      },
      description: 'Override a custom value for `gap` for narrow viewports',
      table: {
        category: 'Narrow viewport properties'
      },
    },

    align: {
      options: ['stretch', 'start', 'center', 'end', 'baseline'],
      control: {
        type: 'inline-radio'
      },
      description: `Sets the alignment between items in the cross-axis of the specified direction. For example:
- If \`direction\` is set to \`block\` (stacks vertically), it controls the horizontal aligment (left, center, right).
- If \`direction\` is set to \`inline\` (stacks horizontally), it controls the vertical alignment (top, center, bottom).

This property behavior is equivalent to the \`align-items\` Flexbox property.`,
      table: {
        category: 'Properties',
        defaultValue: {
          summary: 'stretch',
        }
      }
    },
    narrow_align: {
      options: ['inherit', 'stretch', 'start', 'center', 'end', 'baseline'],
      control: {
        type: 'inline-radio'
      },
      table: {
        category: 'Narrow viewport properties',
        defaultValue: {
          summary: 'inherit',
        }
      },
    },

    // Align wrap

    alignWrap: {
      options: ['start', 'center', 'end', 'distribute', 'distributeEvenly'],
      control: {
        type: 'inline-radio'
      },
      description: 'Sets how stack lines are distributed, if they `wrap` into multiple lines. This has equivalent behavior to the `align-content` Flexbox property.',
      table: {
        category: 'Properties',
        defaultValue: {
          summary: 'start',
        }
      }
    },

    narrow_alignWrap: {
      options: ['inherit', 'start', 'center', 'end', 'distribute', 'distributeEvenly'],
      control: {
        type: 'inline-radio'
      },
      table: {
        category: 'Narrow viewport properties',
        defaultValue: {
          summary: 'inherit',
        }
      },
    },

    // Spread

    spread: {
      options: ['start', 'center', 'end', 'distribute', 'distributeEvenly'],
      control: {
        type: 'inline-radio',
      },
      description: 'Sets how items will be distributed in the stacking direction.', 
      table: {
        category: 'Properties',
        defaultValue: {
          summary: 'start',
        },
      },
    },

    narrow_spread: {
      options: ['inherit', 'start', 'center', 'end', 'distribute', 'distributeEvenly'],
      control: {
        type: 'inline-radio',
      },
      table: {
        category: 'Narrow viewport properties',
        defaultValue: {
          summary: 'inherit'
        }
      },
    },

    // Wrap

    wrap: {
      options: ['wrap', 'nowrap'],
      control: {
        type: 'inline-radio'
      },
      description: 'Sets whether items are forced onto one line or can wrap onto multiple lines.',
      table: {
        category: 'Properties',
        defaultValue: {
          summary: 'nowrap',
        }
      }
    },
    narrow_wrap: {
      options: ['inherit', 'wrap', 'nowrap'],
      control: {
        type: 'inline-radio'
      },
      table: {
        category: 'Narrow viewport properties',
        defaultValue: {
          summary: 'inherit'
        }
      },
    },

    // Divider

    showDividers: {
      control: {
        type: 'boolean'
      },
      description: `Whether a divider between items is shown or not.

_Note: the presence of a divider duplicates the \`gap\` between items._`,
      table: {
        category: 'Properties',
        defaultValue: {
          summary: 'false',
        }
      }
    },
    dividerAriaRole: {
      options: ['presentation', 'separator', 'none'],
      control: {
        type: 'inline-radio'
      },
      description: 'Sets which ARIA role will be used for the divider.',
      table: {
        category: 'Properties',
        defaultValue: {
          summary: 'presentation',
        }
      }
    },
    narrow_showDividers: {
      control: {
        type: 'boolean'
      },
      table: {
        category: 'Narrow viewport properties',
        defaultValue: {
          summary: 'inherit'
        }
      },
    },

    // Children
    children: {
      description: 'A slot for children elements.',
      table: {
        category: 'HTML'
      }
    }
  },
};

export const StackTemplate = ({
  _debug,
  _height,
  _width,
  direction,
  gap,
  gap_custom,
  align,
  alignWrap,
  spread,
  wrap,
  showDividers,
  dividerAriaRole,

  narrow_direction,
  narrow_gap,
  narrow_gap_custom,
  narrow_align,
  narrow_alignWrap,
  narrow_spread,
  narrow_wrap,
  narrow_showDividers,

  children
}) => {

  let custom_styles  = {};

  // Default values
  direction = direction ?? 'block';
  gap = gap ?? 'normal';
  alignWrap = alignWrap ?? 'start';
  dividerAriaRole = dividerAriaRole ?? 'presentation';

  // Default narrow values
  narrow_direction = narrow_direction ?? 'inherit';
  narrow_gap = narrow_gap ?? 'inherit';
  narrow_align = narrow_align ?? 'inherit';
  narrow_alignWrap = narrow_alignWrap ?? 'inherit';
  narrow_spread = narrow_spread ?? 'inherit';
  narrow_wrap = narrow_wrap ?? 'inherit';
  narrow_showDividers = narrow_showDividers ?? 'inherit';

  // Gap
  if (gap === 'custom') {
    custom_styles['--Stack-gap'] = gap_custom;
  }
  if (narrow_gap === 'custom') {
    custom_styles['--Stack-gap-whenNarrow'] = narrow_gap_custom;
  }

  // Null value for states that don't require a modifier class
  align = align === 'stretch' ? null : align;
  alignWrap = alignWrap === 'start' ? null : alignWrap;
  spread = spread === 'start' ? null : spread;
  wrap = wrap === 'nowrap' ? null : wrap;
  gap = gap === 'normal' ? null : gap;

  // Null value for inherit responsive values
  narrow_direction = narrow_direction === 'inherit' ? direction : narrow_direction;
  narrow_gap = narrow_gap === 'inherit' ? gap : narrow_gap;
  narrow_align = narrow_align === 'inherit' ? align : narrow_align;
  narrow_alignWrap = narrow_alignWrap === 'inherit' ? alignWrap : narrow_alignWrap;
  narrow_spread = narrow_spread === 'inherit' ? spread : narrow_spread;
  narrow_wrap = narrow_wrap === 'inherit' ? wrap : narrow_wrap;
  narrow_showDividers = narrow_showDividers === 'inherit' ? showDividers : narrow_showDividers;

  // Dividers logic
  showDividers = wrap === 'wrap' ? false : showDividers;
  narrow_showDividers = narrow_wrap === 'wrap' ? false : narrow_showDividers;

  const hasDividers = showDividers || narrow_showDividers;

  return (
    <>
      <div
        className={clsx(
          'Stack',
          direction && 'Stack--dir-' + `${direction}-whenRegular`,
          narrow_direction && 'Stack--dir-' + `${narrow_direction}-whenNarrow`,

          gap && 'Stack--gap-' + `${gap}-whenRegular`,
          narrow_gap && 'Stack--gap-' + `${narrow_gap}-whenNarrow`,

          align && 'Stack--align-' + `${align}-whenRegular`,
          narrow_align && 'Stack--align-' + `${narrow_align}-whenNarrow`,

          alignWrap && 'Stack--alignWrap-' + `${alignWrap}-whenRegular`,
          narrow_alignWrap && 'Stack--alignWrap-' + `${narrow_alignWrap}-whenNarrow`,
          
          spread && 'Stack--spread-' + `${spread}-whenRegular`,
          narrow_spread && 'Stack--spread-' + `${narrow_spread}-whenNarrow`,

          wrap && 'Stack--' + `${wrap}-whenRegular`,
          narrow_wrap && 'Stack--' + `${narrow_wrap}-whenNarrow`,

          showDividers && 'Stack--showDividers-whenRegular',
          narrow_showDividers && 'Stack--showDividers-whenNarrow',

        )}
        style={custom_styles}
      >
        {children}
        
        {!children && (
          <>
            <div className="_debug _debug-item-1">1</div>
            {hasDividers && ( <><hr className="Stack-divider" role={dividerAriaRole} /></> )}
            <div className="_debug _debug-item-2">2</div>
            {hasDividers && ( <><hr className="Stack-divider" role={dividerAriaRole} /></> )}
            <div className="_debug _debug-item-3">3</div>
            {hasDividers && ( <><hr className="Stack-divider" role={dividerAriaRole} /></> )}
            <div className="_debug _debug-item-4">4</div>
            {hasDividers && ( <><hr className="Stack-divider" role={dividerAriaRole} /></> )}
            <div className="_debug _debug-item-5">5</div>
            {hasDividers && ( <><hr className="Stack-divider" role={dividerAriaRole} /></> )}
            <div className="_debug _debug-item-6">6</div>
          </>
        )}
      </div>

      {_debug && (
        <>
          <style type="text/css">{`
            .Stack {
              background: beige;
              ${_height ? 'height: '+ _height + 'px;': ''}
              ${_width ? 'width: '+ _width + 'px;': ''}
            }
            .Stack ._debug {
              padding: 8px;
              border-radius: 6px;
            }
            .Stack ._debug-item-1 {
              background: lightblue;
              min-inline-size: 6ch;
              font-size: 1rem;
            }
            .Stack ._debug-item-2 {
              background: coral;
              min-inline-size: 9ch;
              font-size: 1.25rem;
            }
            .Stack ._debug-item-3 {
              background: darkseagreen;
              inline-size: 8ch;
              font-size: 1rem;
            }
            .Stack ._debug-item-4 {
              background: khaki;
              inline-size: 7ch;
              font-size: 1.25rem;
            }
            .Stack ._debug-item-5 {
              background: lightpink;
              inline-size: 10ch;
              font-size: 1rem;
            }
            .Stack ._debug-item-6 {
              background: lightsalmon;
              inline-size: 6ch;
              font-size: 1.25rem;
            }
          `}</style>
        </>
      )}
    </>
  );
};

export const Playground = StackTemplate.bind({})
Playground.args = {
  _debug: true,
  direction: "block",
  gap: "normal",
  gap_custom: undefined,
  align: "stretch",
};