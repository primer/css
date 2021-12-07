// create a "playground" demo page that may set some defaults and allow story to access component controls
import React from 'react'
import clsx from 'clsx'
import {LayoutTemplate} from './LayoutBeta.stories'

export default {
  title: 'Components/Layout/Beta/ContentLayout',
  excludeStories: ['ContentLayoutTemplate'],
  argTypes: {

    // Structure

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
      description: 'Whether to show a divider between `pane` and `content` regions if `responsiveVariant` is set to `stackRegions`. If `pane` appears above `content`, a `(...)-divider` class will be placed in the `pane` region. Otherwise it will be placed in the `content` region.',
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
      description: 'Whether to show a divider below the `header` region if in responsive mode.',
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
      description: 'Whether to show a divider above the `footer` region if in responsive mode.',
      table: {
        category: 'Footer'
      }
    },
  },
};

export const ContentLayoutTemplate = ({
  columnGap,
  rowGap,
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
  footerResponsiveDivider
}) => {
  return (
    <>
      <LayoutTemplate
        wrapperSizing='full'
        outerSpacing='none'
        innerSpacing='none'
        columnGap={columnGap}
        rowGap={rowGap}

        responsiveVariant='stackRegions'
        multiColumnsVariantAt='lg'

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

        contentChildren="content"
        paneChildren="pane"
        headerChildren="header"
        footerChildren="footer"
      />
    </>
  );
};

export const Playground = ContentLayoutTemplate.bind({});
Playground.storyName = 'Playground';
Playground.parameters = {
  layout: 'fullscreen',
};
Playground.args = {
  // Structure
  columnGap: 'normal',
  rowGap: 'normal',

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
  footerResponsiveDivider: 'none'
}