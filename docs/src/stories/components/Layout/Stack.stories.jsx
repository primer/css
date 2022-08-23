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

    // Gap
    gap: {
      options: ['none', 'condensed', 'normal', 'spacious'],
      control: {
        type: 'inline-radio',
      },
      description: `Sets the spacing gap between items. All sizes are rendered in \`rem\` units.
- \`none\`: 0
- \`condensed\`: \`var(--primer-stack-gap-condensed, 8px)\`,
- \`normal\`: \`var(--primer-stack-gap-normal, 16px)\` (default)
- \`spacious\`: \`var(--primer-stack-gap-spacious, 24px)\` (on regular viewports, otherwise it appears as \`normal\` on narrow viewports)
<!-- - \`custom\`: set a custom size. When using with a framework such as ViewComponent or React, a custom value can be passed directly to the property. -->
 `,
      table: {
        category: 'Properties',
        defaultValue: {
          summary: 'normal',
        }
      }
    },
    // gap_custom: {
    //   control: {
    //     type: 'text'
    //   },
    //   description: 'A custom value to `gap`. Refer to [Primer Primitives](https://primer.style/primitives/spacing) for other spacing tokens. Example: `var(--base-size-12, 12px)`.',
    //   table: {
    //     category: 'Properties',
    //   },
    // },

    // Align
    align: {
      options: ['stretch', 'start', 'center', 'end', 'baseline'],
      control: {
        type: 'inline-radio'
      },
      description: `Sets the alignment between items in the cross-axis of the specified direction. For example:
- If \`direction\` is set to \`block\` (stacks vertically), it controls the horizontal alignment (left, center, right).
- If \`direction\` is set to \`inline\` (stacks horizontally), it controls the vertical alignment (top, center, bottom).

This property behavior is equivalent to the \`align-items\` Flexbox property.`,
      table: {
        category: 'Properties',
        defaultValue: {
          summary: 'stretch',
        }
      }
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
      options: ['presentation', 'separator'],
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

    // Responsive properties / narrow

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

    narrow_gap: {
      options: ['inherit', 'none', 'condensed', 'normal'],
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

    // narrow_gap_custom: {
    //   control: {
    //     type: 'text'
    //   },
    //   description: 'Override a custom value for `gap` for narrow viewports',
    //   table: {
    //     category: 'Narrow viewport properties'
    //   },
    // },

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

    // Responsive properties / wide

    wide_direction: {
      options: ['inherit', 'inline', 'block'],
      control: {
        type: 'inline-radio',
      },
      description: 'Override `direction` on wide viewports',
      table: {
        category: 'wide viewport properties',
        defaultValue: {
          summary: 'inherit'
        }
      },
    },

    wide_gap: {
      options: ['inherit', 'none', 'condensed', 'normal', 'spacious'],
      control: {
        type: 'inline-radio',
      },
      description: 'Override `gap` on wide viewports',
      table: {
        category: 'wide viewport properties',
        defaultValue: {
          summary: 'inherit'
        }
      },
    },

    // wide_gap_custom: {
    //   control: {
    //     type: 'text'
    //   },
    //   description: 'Override a custom value for `gap` for wide viewports',
    //   table: {
    //     category: 'wide viewport properties'
    //   },
    // },

    wide_align: {
      options: ['inherit', 'stretch', 'start', 'center', 'end', 'baseline'],
      control: {
        type: 'inline-radio'
      },
      table: {
        category: 'wide viewport properties',
        defaultValue: {
          summary: 'inherit',
        }
      },
    },

    wide_alignWrap: {
      options: ['inherit', 'start', 'center', 'end', 'distribute', 'distributeEvenly'],
      control: {
        type: 'inline-radio'
      },
      table: {
        category: 'wide viewport properties',
        defaultValue: {
          summary: 'inherit',
        }
      },
    },

    wide_spread: {
      options: ['inherit', 'start', 'center', 'end', 'distribute', 'distributeEvenly'],
      control: {
        type: 'inline-radio',
      },
      table: {
        category: 'wide viewport properties',
        defaultValue: {
          summary: 'inherit'
        }
      },
    },

    wide_wrap: {
      options: ['inherit', 'wrap', 'nowrap'],
      control: {
        type: 'inline-radio'
      },
      table: {
        category: 'wide viewport properties',
        defaultValue: {
          summary: 'inherit'
        }
      },
    },

    wide_showDividers: {
      control: {
        type: 'boolean'
      },
      table: {
        category: 'wide viewport properties',
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
  //gap_custom,
  align,
  alignWrap,
  spread,
  wrap,
  showDividers,
  dividerAriaRole,

  narrow_direction,
  narrow_gap,
  //narrow_gap_custom,
  narrow_align,
  narrow_alignWrap,
  narrow_spread,
  narrow_wrap,
  narrow_showDividers,

  wide_direction,
  wide_gap,
  //wide_gap_custom,
  wide_align,
  wide_alignWrap,
  wide_spread,
  wide_wrap,
  wide_showDividers,

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

  // Default wide values
  wide_direction = wide_direction ?? 'inherit';
  wide_gap = wide_gap ?? 'inherit';
  wide_align = wide_align ?? 'inherit';
  wide_alignWrap = wide_alignWrap ?? 'inherit';
  wide_spread = wide_spread ?? 'inherit';
  wide_wrap = wide_wrap ?? 'inherit';
  wide_showDividers = wide_showDividers ?? 'inherit';

  // Custom gap - not available
  // if (gap === 'custom') {
  //   custom_styles['--Stack-gap-whenRegular'] = gap_custom;
  // }
  // if (narrow_gap === 'custom') {
  //   custom_styles['--Stack-gap-whenNarrow'] = narrow_gap_custom;
  // }
  // if (wide_gap === 'custom') {
  //   custom_styles['--Stack-gap-whenWide'] = wide_gap_custom;
  // }

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

  wide_direction = wide_direction === 'inherit' ? null : wide_direction;
  wide_gap = wide_gap === 'inherit' ? null : wide_gap;
  wide_align = wide_align === 'inherit' ? null : wide_align;
  wide_alignWrap = wide_alignWrap === 'inherit' ? null : wide_alignWrap;
  wide_spread = wide_spread === 'inherit' ? null : wide_spread;
  wide_wrap = wide_wrap === 'inherit' ? null : wide_wrap;
  wide_showDividers = wide_showDividers === 'inherit' ? null : wide_showDividers;

  // Dividers logic
  showDividers = wrap === 'wrap' ? false : showDividers;
  narrow_showDividers = narrow_wrap === 'wrap' ? false : narrow_showDividers;
  wide_showDividers = wide_wrap === 'wrap' ? false : wide_showDividers;

  const hasDividers = showDividers || narrow_showDividers || wide_showDividers;

  return (
    <>
      <div
        className={clsx(
          'Stack',
          direction && `Stack--dir-${direction}-whenRegular`,
          narrow_direction && 'Stack--dir-' + `${narrow_direction}-whenNarrow`,
          wide_direction && 'Stack--dir-' + `${wide_direction}-whenWide`,

          gap && 'Stack--gap-' + `${gap}-whenRegular`,
          narrow_gap && 'Stack--gap-' + `${narrow_gap}-whenNarrow`,
          wide_gap && 'Stack--gap-' + `${wide_gap}-whenWide`,

          align && 'Stack--align-' + `${align}-whenRegular`,
          narrow_align && 'Stack--align-' + `${narrow_align}-whenNarrow`,
          wide_align && 'Stack--align-' + `${wide_align}-whenWide`,

          alignWrap && 'Stack--alignWrap-' + `${alignWrap}-whenRegular`,
          narrow_alignWrap && 'Stack--alignWrap-' + `${narrow_alignWrap}-whenNarrow`,
          wide_alignWrap && 'Stack--alignWrap-' + `${wide_alignWrap}-whenWide`,
          
          spread && 'Stack--spread-' + `${spread}-whenRegular`,
          narrow_spread && 'Stack--spread-' + `${narrow_spread}-whenNarrow`,
          wide_spread && 'Stack--spread-' + `${wide_spread}-whenWide`,

          wrap && 'Stack--' + `${wrap}-whenRegular`,
          narrow_wrap && 'Stack--' + `${narrow_wrap}-whenNarrow`,
          wide_wrap && 'Stack--' + `${wide_wrap}-whenWide`,

          showDividers && 'Stack--showDividers-whenRegular',
          narrow_showDividers && 'Stack--showDividers-whenNarrow',
          wide_showDividers && 'Stack--showDividers-whenWide',

        )}
        //style={custom_styles}
      >
        {children}
        
        {!children && (
          <>
            <div className="Stack-item _debug _debug-item-1">1</div>
            {hasDividers && ( <hr className="Stack-divider" role={dividerAriaRole} /> )}
            <div className="Stack-item _debug _debug-item-2">2</div>
            {hasDividers && ( <hr className="Stack-divider" role={dividerAriaRole} /> )}
            <div className="Stack-item _debug _debug-item-3">3</div>
            {hasDividers && ( <hr className="Stack-divider" role={dividerAriaRole} /> )}
            <div className="Stack-item _debug _debug-item-4">4</div>
            {hasDividers && ( <hr className="Stack-divider" role={dividerAriaRole} /> )}
            <div className="Stack-item _debug _debug-item-5">5</div>
            {hasDividers && ( <hr className="Stack-divider" role={dividerAriaRole} /> )}
            <div className="Stack-item _debug _debug-item-6">6</div>
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
  align: "stretch",
};