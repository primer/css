import React from 'react'
import clsx from 'clsx'

export default {
  title: 'Components/Layout/Beta',
  excludeStories: ['ComponentTemplateName'],
  argTypes: {

    // Wrapper

    wrapperSizing: {
      options: [0, 1, 2, 3],
      mapping: ['', 'container-md', 'container-lg', 'container-xl'],
      control: {
        type: 'select',
        labels: ['fluid', 'md', 'lg', 'xl']
      },
      description: 'Define the maximum width of the component. `fluid` sets it to full-width. Refer to [container utilities](https://primer.style/css/objects/grid#containers) for reference.',
      table: {
        category: 'Wrapper'
      },
      default: 1
    },
    outerSpacing: {
      options: [0, 1, 2],
      mapping: ['', 'normal', 'condensed'],
      control: {
        type: 'select',
        labels: ['none', 'normal', 'condensed']
      },
      description: 'Defines the wrapper margins surrounding the component and the viewport edges.',
      table: {
        category: 'Wrapper'
      }
    },
    innerSpacing: {
      options: [0, 1, 2],
      mapping: ['', 'normal', 'condensed'],
      control: {
        type: 'select',
        labels: ['none', 'normal', 'condensed']
      },
      description: 'Adds padding to regions individually.',
      table: {
        category: 'Wrapper'
      }
    },
    columnGap: {
      options: [0, 1, 2],
      mapping: ['normal', 'none', 'condensed'],
      control: {
        type: 'select',
        labels: ['normal', 'none', 'condensed']
      },
      table: {
        category: 'Wrapper'
      }
    },
    rowGap: {
      options: [0, 1, 2],
      mapping: ['normal', 'none', 'condensed'],
      control: {
        type: 'select',
        labels: ['normal', 'none', 'condensed']
      },
      table: {
        category: 'Wrapper'
      }
    },


    paneDivider: {
      control: { type: 'boolean' },
      description: 'true/false toggle to show a pane divider',
      table: {
        category: 'Wrapper'
      }
    },

    headerDivider: {
      control: { type: 'boolean' },
      description: 'true/false toggle to show a header divider',
      table: {
        category: 'Wrapper'
      }
    },

    footerDivider: {
      control: { type: 'boolean' },
      description: 'true/false toggle to show a footer divider',
      table: {
        category: 'Wrapper'
      }
    },

    // Responsive

    // `flowHorizontal` should be set automatically depending on viewport size
    // according to `responsiveBehaviorAt`. This manual property is here to
    // emulate responsive behavior while this isn't hooked up.

    flowHorizontal: {
      control: { type: 'boolean' },
      description: "TEMPORARY way to toggle between mobile-friendly and desktop-friendly behaviors. This should be automatically defined according to the viewport size based on `responsiveBehaviorAt`.",
      table: {
        category: 'Responsive'
      }
    },

    responsiveBehavior: {
      options: [0, 1],
      mapping: ['flowVertical', 'splitAsPages'],
      control: {
        type: 'select',
        labels: ['flowVertical', 'splitAsPages']
      },
      description: '`responsiveBehavior` defines how the layout component adapts to smaller viewports. `flowVertical` presents the content in a vertical flow, with `pane` and `content` vertically arranged. `splitAsPages` presents `pane` and `content` as different pages on smaller viewports.',
      table: {
        category: 'Responsive'
      }
    },
    responsiveBehaviorAt: {
      options: [0, 1, 2, 3],
      mapping: ['xs', 'sm', 'md', 'lg'],
      control: {
          type: 'select',
          labels: ['xs', 'sm', 'md', 'lg']
      },
      description: 'Defines in which breakpoint the responsive behavior will kick in',
      table: {
        category: 'Responsive'
      }
    },
    responsiveShowPaneFirst: {
      control: { type: 'boolean' },
      description: 'Defines if the pane should be shown first in the responsive layout. If `responsiveBehavior` is set to `flowVertical`, `pane` appears above `content`. If set to `splitAsPages`, `pane` will appear as a landing page. Use only in the first page of the section.',
      table: {
        category: 'Responsive'
      }
    },

    // Pane

    panePosition: {
      options: [0, 1],
      mapping: ['start', 'end'],
      control: {
      type: 'radio',
      labels: ['start', 'end']
      },
      table: {
      category: 'Pane'
      }
    },
    paneWidth: {
      options: [0, 1, 2],
      mapping: ['', 'narrow', 'wide'],
      control: {
      type: 'radio',
      labels: ['default', 'narrow', 'wide']
      },
      table: {
      category: 'Pane'
      }
    },

    // Content

    contentWidth: {
      options: [0, 1, 2, 3],
      mapping: ['', 'md', 'lg', 'xl'],
      control: {
      type: 'select',
      labels: ['Fluid', 'md', 'lg', 'xl']
      },
      table: {
      category: 'Content'
      }
    },

    // Children

    hasHeader: {
      control: { type: 'boolean' },
      table: {
        category: 'Children'
      }
    },

    hasFooter: {
      control: { type: 'boolean' },
      table: {
        category: 'Children'
      }
    },

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
  }
}

const layoutClassName = 'LayoutBeta';

// Component output sample

/*

<div class="Layout"
     data-spacing-behavior="wrapper"
     data-spacing-density="condensed"

     data-pane-position="end"

     data-flow-horizontal="true"
     data-responsive-behavior="splitAsPages"
     data-responsive-behavior-at="md"
     data-responsive-show-pane-first="true"
>

</div>



*/

// build every component case here in the template (private api)
export const ComponentTemplateName = ({

  // Wrapper
  wrapperSizing,


  // Spacing and borders
  outerSpacing,
  innerSpacing,
  columnGap,
  rowGap,
  paneDivider,
  headerDivider,
  footerDivider,

  // Region
  panePosition,
  paneWidth,
  contentWidth,

  // Responsive
  flowHorizontal,
  responsiveBehavior,
  responsiveBehaviorAt,

  // Pending options
  // - divider styles on mobile (including shallow)
  // - optional header/footer dividers
  // - content/pane light gray backgrounds

  // Children
  hasHeader,
  hasFooter,

  // Children
  headerChildren,
  contentChildren,
  paneChildren,
  footerChildren
}) => (
  <div
  // use clsx for multiple classnames
  className={clsx(
    layoutClassName,
    flowHorizontal && layoutClassName + '--flow-horizontal',

    outerSpacing && layoutClassName + '--outer-spacing-' + `${outerSpacing}`,
    innerSpacing && layoutClassName + '--inner-spacing-' + `${innerSpacing}`,
    columnGap && layoutClassName + '--column-gap-' + `${columnGap}`,
    rowGap && layoutClassName + '--row-gap-' + `${rowGap}`,

    paneDivider && layoutClassName + '--pane-divider',
    headerDivider && layoutClassName + '--header-divider',
    footerDivider && layoutClassName + '--footer-divider',

    responsiveBehavior && layoutClassName + '--responsive-' + `${responsiveBehavior}`,
    panePosition && layoutClassName + '--pane-position-' + `${panePosition}`,
    paneWidth && layoutClassName + '--pane-width-' + `${paneWidth}`,

    hasHeader && layoutClassName + '--has-header',
    hasFooter && layoutClassName + '--has-footer'
  )}

  // use undefined for values that shouldn't be set if false
  // aria-hidden={hasDivider ? 'true' : undefined}
  >
  {/* use {children} for wrapper component templates */}
  <>
    <div className={clsx(
      layoutClassName + '-regions',
      wrapperSizing && wrapperSizing
    )}>

      {/* Header */}
      {hasHeader ? (
        <>
          <div className={layoutClassName + '-header'}>
            {headerChildren}
          </div>
        </>
      ) : ''}

      {/* content */}
      <div className={layoutClassName + '-content'}>
        {contentWidth ? (
        <>
          <div className={layoutClassName + '-content-centered-' + contentWidth}>
            <div className={'container-' + contentWidth}>
              {contentChildren}
            </div>
          </div>
        </>
        ) : (
        <>
          {contentChildren}
        </>
        )}
      </div>

      {/* pane */}
      <div className={layoutClassName + '-pane'}>{paneChildren}</div>

      {/* footer */}
      {hasFooter ? (
        <>
          <div className={layoutClassName + '-footer'}>
            {footerChildren}
          </div>
        </>
      ) : ''}
    </div>
    </>
  </div>
)

const panePlaceholder =
  <>
  <div style={
    {
    width: '100%',
    height: '100%',
    backgroundColor: '#DDF4FF',
    border: '1px solid #80CCFF',
    padding: '16px',
    borderRadius: '6px'
    }
  }>
    pane
  </div>
  </>;

const contentPlaceholder =
  <>
  <div style={
    {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFEFF7',
    border: '1px solid #FFADDA',
    padding: '16px',
    borderRadius: '6px'
    }
  }>
    content
  </div>
  </>;

// create a "playground" demo page that may set some defaults and allow story to access component controls

export const Playground = ComponentTemplateName.bind({});
Playground.parameters = {
  layout:'fullscreen',
};
Playground.args = {
  flowHorizontal: true,

  // Wrapper
  wrapperSizing: 0, // fluid

  outerSpacing: 0, // none
  innerSpacing: 0, // none
  columnGap: 0, // normal

  // Responsive
  responsiveBehavior: 1, // splitAsPages
  responsiveBehaviorAt: 0, // md

  // Children
  hasHeader: false,
  hasFooter: false,
  contentChildren: 'content',
  paneChildren: 'pane',
  headerChildren: 'header',
  footerChildren: 'footer'
}

export const Default = ComponentTemplateName.bind({});
Default.parameters = {
  layout:'fullscreen',
};
Default.args = {
  flowHorizontal: true,

  // Wrapper
  wrapperSizing: 3, // xl

  outerSpacing: 1, // normal
  innerSpacing: 0, // none
  columnGap: 0, // normal

  panePosition: 1, // end
  paneWidth: 0, // default

  // Responsive
  responsiveBehavior: 0, // flowVertical
  responsiveBehaviorAt: 0, // md

  // Children
  hasHeader: false,
  hasFooter: false,
  contentChildren: 'content',
  paneChildren: 'pane',
  headerChildren: 'header',
  footerChildren: 'footer'
}

export const SplitView = ComponentTemplateName.bind({});
SplitView.parameters = {
  layout:'fullscreen',
};
SplitView.args = {
  flowHorizontal: true,

  // Wrapper
  wrapperSizing: 0, // fluid

  outerSpacing: 0, // none
  innerSpacing: 1, // normal
  columnGap: 1, // none

  panePosition: 0, // start
  paneWidth: 2, // wide

  // Responsive
  responsiveBehavior: 0, // flowVertical
  responsiveBehaviorAt: 0, // md

  // Children
  hasHeader: false,
  hasFooter: false,
  contentChildren: 'content',
  paneChildren: 'pane',
  headerChildren: 'header',
  footerChildren: 'footer'
}