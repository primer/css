import React from 'react'
import clsx from 'clsx'
import {NavWithSubItems} from '../ActionList/ActionListPatterns.stories'
import {Button} from '../Button/Button.stories'

export default {
  title: 'Components/Layout/Beta',
  excludeStories: ['ComponentTemplateName'],
  argTypes: {

    // Preset

    preset: {
      options: [0, 1, 2],
      mapping: ['default', 'splitView', 'nested'],
      control: {
        type: 'inline-radio',
        options: ['default', 'splitView', 'nested']
      },
      description: 'Preset',
      table: {
        category: 'Preset'
      }
    },

    // Structure

    wrapperSizing: {
      options: [0, 1, 2, 3],
      mapping: ['', 'container-md', 'container-lg', 'container-xl'],
      control: {
        type: 'inline-radio',
        labels: ['fluid', 'md', 'lg', 'xl']
      },
      description: 'Define the maximum width of the component. `fluid` sets it to full-width. Other values center `Layout` horizontally. Refer to [container utilities](https://primer.style/css/objects/grid#containers) for reference.',
      table: {
        category: 'Wrapper'
      },
      default: 1
    },
    outerSpacing: {
      options: [0, 1, 2],
      mapping: ['', 'normal', 'condensed'],
      control: {
        type: 'inline-radio',
        labels: ['none', 'normal', 'condensed']
      },
      description: 'Sets wrapper margins surrounding the component to distance itself from the viewport edges. `normal` sets the margin to 16px, and to 24px on `lg` breakpoints and above. `condensed` keeps the margin at 16px. `none` sets the margin to 0.',
      table: {
        category: 'Wrapper'
      }
    },
    innerSpacing: {
      options: [0, 1, 2],
      mapping: ['', 'normal', 'condensed'],
      control: {
        type: 'inline-radio',
        labels: ['none', 'normal', 'condensed']
      },
      description: 'Sets padding to regions individually. `normal` sets padding to 16px, with the `content` region getting 24px horizontal padding on `lg` breakpoints and above. `condensed` keeps the padding always at `16px`. `none` sets the padding to 0.',
      table: {
        category: 'Wrapper'
      }
    },
    columnGap: {
      options: [0, 1, 2],
      mapping: ['normal', 'none', 'condensed'],
      control: {
        type: 'inline-radio',
        labels: ['normal', 'none', 'condensed']
      },
      description: 'Sets the gap between columns to distance them from each other. `normal` sets the gap to 16px, and to 24px on `lg` breakpoints and above. `condensed` keeps the gap always at 16px. `none` sets the gap to 0.',
      table: {
        category: 'Wrapper'
      }
    },
    rowGap: {
      options: [0, 1, 2],
      mapping: ['normal', 'none', 'condensed'],
      control: {
        type: 'inline-radio',
        labels: ['normal', 'none', 'condensed']
      },
      description: 'Sets the gap below the header and above the footer. `normal` sets the gap to 16px, and to 24px on `lg` breakpoints and above. `condensed` keeps the gap always at 16px. `none` sets the gap to 0.',
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
        type: 'inline-radio',
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
          type: 'inline-radio',
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
      type: 'inline-radio',
        labels: ['start', 'end']
      },
      description: 'Defines the position of the pane. `start` puts the pane on the left, and `end` puts it on the right.',
      table: {
        category: 'Pane'
      }
    },
    paneWidth: {
      options: [0, 1, 2],
      mapping: ['', 'narrow', 'wide'],
      control: {
      type: 'inline-radio',
        labels: ['default', 'narrow', 'wide']
      },
      description: 'Defines the width of the pane',
      table: {
        category: 'Pane'
      }
    },
    paneDivider: {
      control: { type: 'boolean' },
      description: 'Whether to show a pane divider.',
      table: {
        category: 'Pane'
      }
    },
    paneIsSticky: {
      control: { type: 'boolean' },
      description: 'Whether to make the pane sticky. Don’t use it in the presence of footer regions.',
      table: {
        category: 'Pane'
      }
    },

    // Content

    contentWidth: {
      options: [0, 1, 2, 3, 4],
      mapping: ['', 'sm', 'md', 'lg', 'xl'],
      control: {
      type: 'inline-radio',
        labels: ['fluid', 'sm', 'md', 'lg', 'xl']
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
  }
}

const layoutClassName = 'LayoutBeta';

// build every component case here in the template (private api)
export const ComponentTemplateName = ({

  // Preset
  preset,
  
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
  paneIsSticky,
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
}) => {

  flowHorizontal = flowHorizontal ?? true;

  if (preset === 'default') {
    wrapperSizing = wrapperSizing ?? 'container-xl';
    outerSpacing = outerSpacing ?? 'normal';
    columnGap = columnGap ?? 'normal';
    panePosition = panePosition ?? 'end';
    responsiveBehavior = responsiveBehavior ?? 'flowVertical';
  } else if (preset === 'splitView') {
    wrapperSizing = wrapperSizing ?? '';
    innerSpacing = outerSpacing ?? 'normal';
    columnGap = columnGap ?? 'none';
    rowGap = columnGap ?? 'none';
    panePosition = panePosition ?? 'start';
    paneWidth = paneWidth ?? 'wide';
    paneDivider = paneDivider ?? true;
    responsiveBehavior = responsiveBehavior ?? 'splitAsPages';
  }


  return (
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
    paneIsSticky && layoutClassName + '--pane-is-sticky',

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
  );
};

// create a "playground" demo page that may set some defaults and allow story to access component controls

export const Playground = ComponentTemplateName.bind({});
Playground.storyName = 'Playground';
Playground.parameters = {
  layout:'fullscreen',
};
Playground.args = {
  preset: 'default',

  hasHeader: true,
  hasFooter: true,

  contentChildren: 'content',
  paneChildren: 'pane',
  headerChildren: 'header',
  footerChildren: 'footer'
}

export const Default = ComponentTemplateName.bind({});
Default.storyName = '[Preset] Default';
Default.parameters = {
  layout:'fullscreen',
};
Default.args = {
  preset: 'default',

  // Children
  contentChildren: 'content',
  paneChildren: 'pane',
  headerChildren: 'header',
  footerChildren: 'footer'
}

export const SplitView = ComponentTemplateName.bind({});
SplitView.storyName = '[Preset] Split view';
SplitView.parameters = {
  layout:'fullscreen',
};
SplitView.args = {
  preset: 'splitView',

  // Children
  contentChildren: 'content',
  paneChildren: 'pane',
  headerChildren: 'header',
  footerChildren: 'footer'
}

export const Settings = ComponentTemplateName.bind({});
Settings.parameters = {
  layout:'fullscreen',
};
Settings.args = {
  preset: 'splitView',
  contentWidth: 2, // md

  // Children
  contentChildren: (
    <>
      <h2 className="f3">General</h2>
      <div className="Box mt-3 p-3">&nbsp;</div>
      <div className="Box mt-3 p-3">&nbsp;</div>
    </>
  ),
  paneChildren: (
    <>
      <NavWithSubItems {...NavWithSubItems.args} />
    </>
  ),
  headerChildren: 'header',
  footerChildren: 'footer'
}