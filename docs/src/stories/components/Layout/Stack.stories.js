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
        type: 'string'
      },
    },
    narrow_gap_custom: {
      control: {
        type: 'string'
      },
      table: {
        category: 'Narrow viewport'
      },
    },

    // Align

    align: {
      options: ['start', 'center', 'end'],
      control: {
        type: 'inline-radio'
      },
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



  return (
    <>
      <div className={clsx(
          'Stack',
          direction && 'Stack--' + `${direction}`,
          gap && 'Stack--' + `${gap}`,
          align && 'Stack--' + `${align}`,
          wrap && 'Stack--' + `${wrap}`,
        )}
      >
        
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div>

      {_debug && (
        <>
          <style type="text/css">{`
            .Stack {
              background: beige;
            }
            .Stack > * {
              padding: 8px;
              border-radius: 6px;
            }
            .Stack :nth-child(1) {
              background: lightblue;
              width: 6ch;
            }
            .Stack :nth-child(2) {
              background: coral;
              width: 9ch;
            }
            .Stack :nth-child(3) {
              background: darkseagreen;
              width: 8ch;
            }
            .Stack :nth-child(4) {
              background: khaki;
              width: 7ch;
            }
            .Stack :nth-child(5) {
              background: lightpink;
              width: 10ch;
            }
            .Stack :nth-child(6) {
              background: lightsalmon;
              width: 6ch;
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
  align: "start",
};