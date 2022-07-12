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

    // Direction

    direction: {
      options: ['inline', 'block'],
      control: {
        type: 'inline-radio',
      },
      table: {
        defaultValue: {
          summary: 'block',
        }
      }
    },
    narrow_direction: {
      options: ['inline', 'block'],
      control: {
        type: 'inline-radio',
      },
      table: {
        category: 'Narrow viewport'
      },
    },

    // Gap

    gap: {
      options: ['none', 'condensed', 'normal', 'spacious', 'custom'],
      control: {
        type: 'inline-radio',
      },
      table: {
        defaultValue: {
          summary: 'normal',
        }
      }
    },
    narrow_gap: {
      options: ['none', 'condensed', 'normal', 'custom'],
      control: {
        type: 'inline-radio',
      },
      table: {
        category: 'Narrow viewport'
      },
    },
    gap_custom: {
      control: {
        type: 'text'
      },
    },
    narrow_gap_custom: {
      control: {
        type: 'text'
      },
      table: {
        category: 'Narrow viewport'
      },
    },

    // Align

    align: {
      options: ['normal', 'start', 'center', 'end'],
      control: {
        type: 'inline-radio'
      },
      table: {
        defaultValue: {
          summary: 'normal',
        }
      }
    },
    narrow_align: {
      options: ['start', 'center', 'end'],
      control: {
        type: 'inline-radio'
      },
      table: {
        category: 'Narrow viewport'
      },
    },

    // Wrap

    wrap: {
      options: ['wrap', 'nowrap'],
      control: {
        type: 'inline-radio'
      },
      table: {
        defaultValue: {
          summary: 'nowrap',
        }
      }
    },
    narrow_wrap: {
      options: ['wrap', 'nowrap'],
      control: {
        type: 'inline-radio'
      },
      table: {
        category: 'Narrow viewport'
      },
    },

    // Divider

    divider: {
      control: {
        type: 'boolean'
      },
      table: {
        defaultValue: {
          summary: 'false',
        }
      }
    },
    divider_role: {
      options: ['presentation', 'separator', 'none'],
      control: {
        type: 'inline-radio'
      },
      table: {
        defaultValue: {
          summary: 'presentation',
        }
      }
    },
    narrow_divider: {
      control: {
        type: 'boolean'
      },
      table: {
        category: 'Narrow viewport'
      },
    },
  },
};

export const StackTemplate = ({
  _debug,
  direction,
  gap,
  gap_custom,
  align,
  wrap,
  divider,

  narrow_direction,
  narrow_gap,
  narrow_gap_custom,
  narrow_align,
  narrow_wrap,
  narrow_divider
}) => {

  let custom_styles  = {};

  // Gap
  if (gap === 'custom') {
    custom_styles['--Stack-gap'] = gap_custom;
  }
  if (narrow_gap === 'custom') {
    custom_styles['--Stack-gap-whenNarrow'] = narrow_gap_custom;
  }

  // Null values for states that don't require a modifier class
  align = align === 'normal' ? null : align

  return (
    <>
      <div
        className={clsx(
          'Stack',
          direction && 'Stack--dir-' + `${direction}`,
          narrow_direction && 'Stack--dir-' + `${narrow_direction}-whenNarrow`,

          gap && 'Stack--gap-' + `${gap}`,
          narrow_gap && 'Stack--gap-' + `${narrow_gap}-whenNarrow`,

          align && 'Stack--align-' + `${align}`,
          narrow_align && 'Stack--align-' + `${narrow_align}-whenNarrow`,

          wrap && 'Stack--' + `${wrap}`,
          narrow_wrap && 'Stack--' + `${narrow_wrap}-whenNarrow`,

          divider && 'Stack--showDividers',
          narrow_divider && 'Stack--showDividers-whenNarrow' // Todo: how about hide dividers when narrow?

        )}
        style={custom_styles}
      >
        <div className="_debug _debug-item-1">1</div>
        {divider && ( <><hr className="Stack-divider" role="presentation" /></> )}
        <div className="_debug _debug-item-2">2</div>
        {divider && ( <><hr className="Stack-divider" role="presentation" /></> )}
        <div className="_debug _debug-item-3">3</div>
        {divider && ( <><hr className="Stack-divider" role="presentation" /></> )}
        <div className="_debug _debug-item-4">4</div>
        {divider && ( <><hr className="Stack-divider" role="presentation" /></> )}
        <div className="_debug _debug-item-5">5</div>
        {divider && ( <><hr className="Stack-divider" role="presentation" /></> )}
        <div className="_debug _debug-item-6">6</div>
      </div>

      {_debug && (
        <>
          <style type="text/css">{`
            .Stack {
              background: beige;
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
  align: "normal",
};