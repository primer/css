// create a "playground" demo page that may set some defaults and allow story to access component controls
import React from 'react'
import clsx from 'clsx'
import {LayoutTemplate} from './LayoutBeta.stories'

export default {
  title: 'Components/Layout/Beta/PageLayout',
  excludeStories: ['PageLayoutTemplate'],
  argTypes: {

    // Debug

    _debug: {
      control: 'boolean',
      description: 'Show background colors in regions for debugging',
    },

    // Structure

    wrapperSizing: {
      options: ['fluid', 'md', 'lg', 'xl'],
      control: {
        type: 'inline-radio',
        labels: ['fluid', 'md', 'lg', 'xl']
      },
      description: 'Define the maximum width of the component. `fluid` sets it to full-width. Other values center `Layout` horizontally. Refer to [container utilities](https://primer.style/css/objects/grid#containers) for reference.',
      table: {
        category: 'Structure'
      }
    },

    outerSpacing: {
      options: ['normal', 'condensed'],
      control: {
        type: 'inline-radio'
      },
      description: 'Sets wrapper margins surrounding the component to distance itself from the viewport edges. `normal` sets the margin to 16px, and to 24px on `lg` breakpoints and above. `condensed` keeps the margin at 16px.',
      table: {
        category: 'Structure'
      }
    },

    columnGap: {
      options: ['normal', 'condensed'],
      control: {
        type: 'inline-radio'
      },
      description: 'Sets the gap between columns to distance them from each other. `normal` sets the gap to 16px, and to 24px on `lg` breakpoints and above. `condensed` keeps the gap always at 16px.',
      table: {
        category: 'Structure'
      }
    },
    rowGap: {
      options: ['normal', 'condensed'],
      control: {
        type: 'inline-radio'
      },
      description: 'Sets the gap below the header and above the footer. `normal` sets the gap to 16px, and to 24px on `lg` breakpoints and above. `condensed` keeps the gap always at 16px.',
      table: {
        category: 'Structure'
      }
    },

    // Responsive

    responsiveVariant: {
      options: ['stackRegions', 'separateRegions'],
      control: {
        type: 'inline-radio'
      },
      description: '`responsiveVariant` defines how the layout component adapts to smaller viewports. `stackRegions` presents the content in a vertical flow, with `pane` and `content` vertically arranged. `separateRegions` presents `pane` and `content` as different pages on smaller viewports.',
      table: {
        category: 'Responsive'
      }
    },

    responsivePrimaryRegion: {
      options: ['content', 'pane'],
      control: {
        type: 'inline-radio'
      },
      description: 'When `responsiveVariant` is set to `separateRegions`, defines which region appears first on small viewports. `content` is default.',
      table: {
        category: 'Responsive'
      }
    },

    // Pane

    panePosition: {
      options: ['start', 'end'],
      control: {
        type: 'inline-radio'
      },
      description: 'Defines the position of the pane. `start` puts the pane on the left, and `end` puts it on the right.',
      table: {
        category: 'Pane',
      }
    },
    paneResponsivePosition: {
      options: ['inherit', 'start', 'end'],
      control: {
        type: 'inline-radio',
      },
      description: 'If `responsiveVariant` is set to `stackRegions`, defines the position of the pane in the responsive variant. `start` puts the pane above `content`, and `end` puts it below `content`. `inherit` uses the same value from `panePosition`.',
      table: {
        category: 'Pane'
      }
    },
    paneWidth: {
      options: ['default', 'narrow', 'wide'],
      control: {
      type: 'inline-radio'
      },
      description: 'Defines the width of the pane',
      table: {
        category: 'Pane'
      }
    },
    paneDivider: {
      control: { type: 'boolean' },
      description: 'Whether to show a pane line divider.',
      table: {
        category: 'Pane'
      }
    },
    paneResponsiveDivider: {
      options: ['none', 'line', 'filled'],
      control: {
        type: 'inline-radio'
      },
      description: 'Whether to show a divider between `pane` and `content` regions if `responsiveVariant` is set to `stackRegions`. `line` adds a thin line between `content` and `pane` regions. `filled` adds a solid mobile-friendly separator instead. `none` is default.',
      table: {
        category: 'Pane'
      }
    },

    // Content

    contentWidth: {
      options: ['fluid', 'sm', 'md', 'lg', 'xl'],
      control: {
        type: 'inline-radio'
      },
      description: 'Defines the maximum width of the content region. `fluid` sets it to full-width. Other values follow container widths from `sm` to `xl`. With smaller widths, the content region will try to stay centered to the viewport area.',
      table: {
        category: 'Content'
      }
    },

    // Header

    hasHeader: {
      control: { type: 'boolean' },
      table: {
        category: 'Header'
      }
    },

    headerDivider: {
      control: { type: 'boolean' },
      description: 'Whether to show a header divider',
      table: {
        category: 'Header'
      }
    },

    headerResponsiveDivider: {
      options: ['none', 'line', 'filled'],
      control: {
        type: 'inline-radio'
      },
      description: 'Whether to show a divider below the `header` region in responsive variant. `line` adds a thin line between `content` and `pane` regions. `filled` adds a solid mobile-friendly separator instead. `none` is default.',
      table: {
        category: 'Header'
      }
    },

    // Footer

    hasFooter: {
      control: { type: 'boolean' },
      table: {
        category: 'Footer'
      }
    },

    footerDivider: {
      control: { type: 'boolean' },
      description: 'Whether to show a footer divider',
      table: {
        category: 'Footer'
      }
    },

    footerResponsiveDivider: {
      options: ['none', 'line', 'filled'],
      control: {
        type: 'inline-radio'
      },
      description: 'Whether to show a divider above the `footer` region in responsive variant. `line` adds a thin line between `content` and `pane` regions. `filled` adds a solid mobile-friendly separator instead. `none` is default.',
      table: {
        category: 'Footer'
      }
    },

    // HTML

    headerChildren: {
      description: 'creates a slot for header children',
      table: {
        category: 'HTML'
      }
    },
    contentChildren: {
      description: 'creates a slot for content children',
      table: {
        category: 'HTML'
      }
    },
    paneChildren: {
      description: 'creates a slot for pane children',
      table: {
        category: 'HTML'
      }
    },
    footerChildren: {
      description: 'creates a slot for footer children',
      table: {
        category: 'HTML'
      }
    }
  },
};

export const PageLayoutTemplate = ({
  _debug,
  wrapperSizing,
  outerSpacing,
  columnGap,
  rowGap,
  responsiveVariant,
  responsivePrimaryRegion,
  paneWidth,
  panePosition,
  paneResponsivePosition,
  paneDivider,
  paneResponsiveDivider,
  contentWidth,
  hasHeader,
  headerDivider,
  headerResponsiveDivider,
  hasFooter,
  footerDivider,
  footerResponsiveDivider,
  contentChildren,
  paneChildren,
  headerChildren,
  footerChildren
}) => {
  return (
    <>
      <LayoutTemplate
        _debug={_debug}
        wrapperSizing={wrapperSizing}
        outerSpacing={outerSpacing}
        innerSpacing='none'
        columnGap={columnGap}
        rowGap={rowGap}

        responsiveVariant={responsiveVariant}
        responsivePrimaryRegion={responsivePrimaryRegion}

        paneWidth={paneWidth}
        panePosition={panePosition}
        paneResponsivePosition={paneResponsivePosition}
        paneDivider={paneDivider}
        paneResponsiveDivider={paneResponsiveDivider}

        contentWidth={contentWidth}

        hasHeader={hasHeader}
        headerDivider={headerDivider}
        headerResponsiveDivider={headerResponsiveDivider}

        hasFooter={hasFooter}
        footerDivider={footerDivider}
        footerResponsiveDivider={footerResponsiveDivider}

        contentChildren={contentChildren}
        paneChildren={paneChildren}
        headerChildren={headerChildren}
        footerChildren={footerChildren}
      />
    </>
  );
};

export const Playground = PageLayoutTemplate.bind({});
Playground.storyName = 'Playground';
Playground.parameters = {
  layout: 'fullscreen',
};
Playground.args = {
  _debug: true,

  // Structure
  wrapperSizing: 'xl',
  outerSpacing: 'normal',
  columnGap: 'normal',
  rowGap: 'normal',

  // Responsive
  responsiveVariant: 'stackRegions',
  responsivePrimaryRegion: 'content',

  // Pane
  panePosition: 'end',
  paneResponsivePosition: 'inherit',
  paneWidth: 'default',
  paneDivider: false,
  paneResponsiveDivider: 'none',

  // Content
  contentWidth: 'fluid',

  // Header
  hasHeader: false,
  headerDivider: false,
  headerResponsiveDivider: 'none',

  // Footer
  hasFooter: false,
  footerDivider: false,
  footerResponsiveDivider: 'none',

  contentChildren: 'content',
  paneChildren: 'pane',
  headerChildren: 'header',
  footerChildren: 'footer'

}
