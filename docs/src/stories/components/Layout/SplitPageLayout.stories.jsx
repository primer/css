// create a "playground" demo page that may set some defaults and allow story to access component controls
import React from 'react'
import clsx from 'clsx'
import {LayoutTemplate} from './LayoutBeta.stories'

export default {
  title: 'Components/Layout/Beta/SplitPageLayout',
  excludeStories: ['SplitPageLayoutTemplate'],
  argTypes: {
    // Structure

    padding: {
      options: ['normal', 'condensed', 'none'],
      control: {
        type: 'inline-radio'
      },
      description:
        'Sets padding to regions individually. `normal` sets padding to 16px, with the `content` region getting 24px horizontal padding on `lg` breakpoints and above. `condensed` keeps the padding always at `16px`.',
      table: {
        category: 'Structure'
      }
    },

    primaryRegion: {
      options: ['content', 'pane'],
      control: {
        type: 'inline-radio'
      },
      description: 'Defines which region appears first on small viewports. `content` is default.',
      table: {
        category: 'Responsive'
      }
    },

    // Pane

    hasPane: {
      control: {type: 'boolean'},
      table: {
        category: 'Pane'
      }
    },

    paneWidth: {
      options: ['default', 'narrow', 'wide'],
      control: {
        type: 'inline-radio'
      },
      description: 'Defines the width of the pane.',
      table: {
        category: 'Pane'
      }
    },

    // Content

    contentWidth: {
      options: ['full', 'sm', 'md', 'lg', 'xl'],
      control: {
        type: 'inline-radio'
      },
      description:
        'Defines the maximum width of the content region. `full` sets it to full-width. Other values follow container widths from `sm` to `xl`. With smaller widths, the content region will try to stay centered to the viewport area.',
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

    // Footer

    hasFooter: {
      control: { type: 'boolean' },
      table: {
        category: 'Footer'
      }
    },    

    // HTML

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
    }
  }
}

export const SplitPageLayoutTemplate = ({
  _debug,
  padding,
  primaryRegion,
  hasPane,
  paneWidth,
  paneIsSticky,
  contentWidth,
  hasHeader,
  hasFooter,
  contentChildren,
  paneChildren,
  headerChildren,
  footerChildren
}) => {
  return (
    <>
      <LayoutTemplate
        _debug={_debug}
        containerWidth="full"
        outerSpacing="none"
        innerSpacing={padding}
        columnGap="none"
        rowGap="none"
        responsiveVariant="separateRegions"
        primaryRegion={primaryRegion}
        hasPane={hasPane}
        paneWidth={paneWidth}
        paneIsSticky={paneIsSticky}
        panePosition="start"
        hasPaneDivider={true}
        contentWidth={contentWidth}
        hasHeader={hasHeader}
        hasHeaderDivider={true}
        hasFooter={hasFooter}
        hasFooterDivider={true}
        contentChildren={contentChildren}
        paneChildren={paneChildren}
        headerChildren={headerChildren}
        footerChildren={footerChildren}
      />
    </>
  )
}

export const Playground = SplitPageLayoutTemplate.bind({})
Playground.storyName = 'Playground'
Playground.parameters = {
  layout: 'fullscreen'
}
Playground.args = {
  _debug: true,

  // Structure
  padding: 'normal',

  // Responsive
  primaryRegion: 'content',

  // Pane
  hasPane: true,
  paneWidth: 'wide',

  // Content
  contentWidth: 'full',

  // Header
  hasHeader: false,

  // Footer
  hasFooter: false,

  // Children
  contentChildren: 'content',
  paneChildren: 'pane',
  headerChildren: 'header',
  footerChildren: 'footer',
}
