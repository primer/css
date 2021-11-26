import React from 'react'
import clsx from 'clsx'
import {NavWithSubItems} from '../ActionList/ActionListPatterns.stories'

export default {
  title: 'Components/Layout/Beta',
  excludeStories: ['LayoutTemplate'],
  argTypes: {

    // Structure

    wrapperSizing: {
      options: ['fluid', 'md', 'lg', 'xl'],
      control: {
        type: 'inline-radio',
        labels: ['fluid', 'md', 'lg', 'xl']
      },
      description: 'Define the maximum width of the component. `fluid` sets it to full-width. Other values center `Layout` horizontally. Refer to [container utilities](https://primer.style/css/objects/grid#containers) for reference.',
      table: {
        category: 'Wrapper'
      }
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
      mapping: ['none', 'normal', 'condensed'],
      control: {
        type: 'inline-radio',
        labels: ['none', 'normal', 'condensed']
      },
      description: 'Sets the gap between columns to distance them from each other. `normal` sets the gap to 16px, and to 24px on `lg` breakpoints and above. `condensed` keeps the gap always at 16px. `none` sets the gap to 0.',
      table: {
        category: 'Wrapper'
      }
    },
    rowGap: {
      options: [0, 1, 2],
      mapping: ['none', 'normal', 'condensed'],
      control: {
        type: 'inline-radio',
        labels: ['none', 'normal', 'condensed']
      },
      description: 'Sets the gap below the header and above the footer. `normal` sets the gap to 16px, and to 24px on `lg` breakpoints and above. `condensed` keeps the gap always at 16px. `none` sets the gap to 0.',
      table: {
        category: 'Wrapper'
      }
    },

    // Responsive

    responsiveVariant: {
      options: [0, 1],
      mapping: ['stackRegions', 'separateRegions'],
      control: {
        type: 'inline-radio',
        labels: ['stackRegions', 'separateRegions']
      },
      description: '`responsiveBehavior` defines how the layout component adapts to smaller viewports. `stackRegions` presents the content in a vertical flow, with `pane` and `content` vertically arranged. `separateRegions` presents `pane` and `content` as different pages on smaller viewports.',
      table: {
        category: 'Responsive'
      }
    },
    MultiColumnsVariantAt: {
      options: [0, 1],
      mapping: ['md', 'lg'],
      control: {
        type: 'inline-radio',
        labels: ['md', 'lg']
      },
      description: 'Defines in which breakpoint the two-column layout will kick in',
      table: {
        category: 'Responsive'
      }
    },
    responsivePrimaryRegion: {
      options: [0, 1],
      mapping: ['content', 'pane'],
      control: {
        type: 'inline-radio',
        labels: ['content', 'pane']
      },
      description: 'When `responsiveVariant` is set to `separateRegions`, defines which region appears first on small viewports. `content` is default.',
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
        category: 'Pane',
      }
    },
    paneResponsivePosition: {
      options: [0, 1, 2],
      mapping: ['', 'start', 'end'],
      control: {
        type: 'inline-radio',
        labels: ['inherit', 'start', 'end']
      },
      description: 'If `responsiveVariant` is set to `stackRegions`, defines the position of the pane in the responsive variant. `start` puts the pane above `content`, and `end` puts it below `content`. `inherit` uses the same value from `panePosition`.',
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
      description: 'Whether to show a pane line divider.',
      table: {
        category: 'Pane'
      }
    },
    paneResponsiveDivider: {
      options: [0, 1, 2],
      mapping: ['', 'line', 'filled'],
      control: {
        type: 'inline-radio',
        labels: ['none', 'line', 'filled']
      },
      description: 'Whether to show a divider between `pane` and `content` regions if `responsiveVariant` is set to `stackRegions`. If `pane` appears above `content`, a `(...)-divider` class will be placed in the `pane` region. Otherwise it will be placed in the `content` region.',
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

    headerResponsiveDivider: {
      options: [0, 1, 2],
      mapping: ['', 'line', 'filled'],
      control: {
        type: 'inline-radio',
        labels: ['none', 'line', 'filled']
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
      options: [0, 1, 2],
      mapping: ['', 'line', 'filled'],
      control: {
        type: 'inline-radio',
        labels: ['none', 'line', 'filled']
      },
      description: 'Whether to show a divider above the `footer` region if in responsive mode.',
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
export const LayoutTemplate = ({
  
  // Wrapper
  wrapperSizing,

  // Spacing and borders
  outerSpacing,
  innerSpacing,
  columnGap,
  rowGap,
  
  // Pane
  paneWidth,
  panePosition,
  paneResponsivePosition,
  paneDivider,
  paneResponsiveDivider,
  paneIsSticky,

  // Header
  hasHeader,
  headerDivider,
  headerResponsiveDivider,

  // Footer
  hasFooter,
  footerDivider,
  footerResponsiveDivider,

  // Content
  contentWidth,

  // Responsive
  responsiveVariant,
  responsivePrimaryRegion,
  MultiColumnsVariantAt,

  // Pending options
  // - content/pane light gray backgrounds


  // Children
  headerChildren,
  contentChildren,
  paneChildren,
  footerChildren
}) => {

  const containerClass = {
    'full': '',
    'md': 'container-md',
    'lg': 'container-lg',
    'xl': 'container-xl'
  };

  /*
  if (preset === 'default' || !preset) {
    wrapperSizing = wrapperSizing ?? 'xl';
    outerSpacing = outerSpacing ?? 'normal';
    columnGap = columnGap ?? 'normal';
    rowGap = rowGap ?? 'normal';
    panePosition = panePosition ?? 'end';
    responsiveBehavior = responsiveBehavior ?? 'stackRegions';
  } else if (preset === 'splitView') {
    wrapperSizing = wrapperSizing ?? '';
    innerSpacing = innerSpacing ?? 'normal';
    columnGap = columnGap ?? 'none';
    rowGap = rowGap ?? 'none';
    panePosition = panePosition ?? 'start';
    paneWidth = paneWidth ?? 'wide';
    paneDivider = paneDivider ?? true;
    responsiveBehavior = responsiveBehavior ?? 'separateRegions';
  }
  */

  wrapperSizing = wrapperSizing ?? 'xl';
  outerSpacing = outerSpacing ?? 'normal';
  columnGap = columnGap ?? 'normal';
  rowGap = rowGap ?? 'normal';
  panePosition = panePosition ?? 'end';

  responsiveVariant = responsiveVariant ?? 'stackRegions';
  MultiColumnsVariantAt = MultiColumnsVariantAt ?? 'md';


  paneResponsivePosition = (paneResponsivePosition === 'start' || paneResponsivePosition === 'end') ? paneResponsivePosition : panePosition;


  return (
  <div
  // use clsx for multiple classnames
  className={clsx(
    layoutClassName,
    layoutClassName + '--variant-' + `${responsiveVariant}`,
    layoutClassName + '--variant-' + MultiColumnsVariantAt + '-multiColumns',

    responsiveVariant === 'separateRegions' && layoutClassName + '--primary-' + `${responsivePrimaryRegion}`,

    outerSpacing && layoutClassName + '--outer-spacing-' + `${outerSpacing}`,
    innerSpacing && layoutClassName + '--inner-spacing-' + `${innerSpacing}`,
    columnGap && layoutClassName + '--column-gap-' + `${columnGap}`,
    rowGap && layoutClassName + '--row-gap-' + `${rowGap}`,
    
    paneWidth && layoutClassName + '--pane-width-' + `${paneWidth}`,
    panePosition && layoutClassName + '--pane-position-' + `${panePosition}`,
    paneResponsivePosition && layoutClassName + '--stackRegions-pane-position-' + `${paneResponsivePosition}`,
    paneDivider && layoutClassName + '--pane-divider',
    paneIsSticky && layoutClassName + '--pane-is-sticky',

    
    hasHeader && layoutClassName + '--has-header',
    headerDivider && layoutClassName + '--header-divider',

    hasFooter && layoutClassName + '--has-footer',
    footerDivider && layoutClassName + '--footer-divider'
  )}

  // use undefined for values that shouldn't be set if false
  // aria-hidden={hasDivider ? 'true' : undefined}
  >
  {/* use {children} for wrapper component templates */}
  <>

    <div className={clsx(
      layoutClassName + '-wrapper',
      wrapperSizing && containerClass[wrapperSizing]
      )}>
        
      {/* Header */}
      {hasHeader &&
        <div className={clsx(
          layoutClassName + '-header',
          headerResponsiveDivider && layoutClassName + '--divider-after' + (headerResponsiveDivider === 'filled' ? '-filled': ''),
          headerResponsiveDivider && layoutClassName + '--divider-' + responsiveBehaviorAt + '-none'
          /* FIXME - rename region responsive separator class name */
        )}>
          {headerChildren}
        </div>
      }

      <div className={clsx(
        layoutClassName + '-regions'
      )}>

        {/* Pane if rendered first */}
        {panePosition === 'start' &&
          <div className={clsx(
            layoutClassName + '-region',
            layoutClassName + '-pane',
            paneResponsiveDivider && layoutClassName + '--divider-after' + (paneResponsiveDivider === 'filled' ? '-filled': ''),
            paneResponsiveDivider && layoutClassName + '--divider-' + responsiveBehaviorAt + '-none'
          )}>
            {paneChildren}
          </div>
        }

        {/* content */}
        <div className={clsx(
          layoutClassName + '-region',
          layoutClassName + '-content'
        )}>
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

        {/* Pane if rendered last */}
        {panePosition === 'end' &&
        <div className={clsx(
          layoutClassName + '-region',
          layoutClassName + '-pane',
          paneResponsiveDivider && layoutClassName + '--divider-before' + (paneResponsiveDivider === 'filled' ? '-filled': ''),
          paneResponsiveDivider && layoutClassName + '--divider-' + responsiveBehaviorAt + '-none'
        )}>
          {paneChildren}
        </div>}
      </div>

      {/* footer */}
      {hasFooter && <div className={clsx(
        layoutClassName + '-footer',
        footerResponsiveDivider && layoutClassName + '--divider-before' + (footerResponsiveDivider === 'filled' ? '-filled': ''),
        footerResponsiveDivider && layoutClassName + '--divider-' + responsiveBehaviorAt + '-none'
        )}>{footerChildren}</div>}
      </div>
    </>
  </div>
  );
};

export const Playground = LayoutTemplate.bind({});
Playground.storyName = 'Playground';
Playground.parameters = {
  layout: 'fullscreen',
};
Playground.args = {
  hasHeader: true,
  hasFooter: true,

  contentChildren: 'content',
  paneChildren: 'pane',
  headerChildren: 'header',
  footerChildren: 'footer'
}

export const PresetDefault = LayoutTemplate.bind({});
PresetDefault.storyName = 'Presets/Default';
PresetDefault.parameters = {
  layout: 'fullscreen',
};
PresetDefault.args = {
  wrapperSizing: 'xl',
  outerSpacing: 1, // normal
  innerSpacing: 0, // none
  columnGap: 1, // normal
  rowGap: 1, // normal

  responsiveBehavior: 0, // stackRegions
  responsiveBehaviorAt: 2, // md

  panePosition: 1, // end
  paneResponsivePosition: 0, // inherit
  paneWidth: 0, // default
  paneDivider: false,
  paneResponsiveDivider: 0, // none
  paneIsSticky: false,

  contentWidth: 0, // full

  hasHeader: false,
  headerDivider: false,
  headerResponsiveDivider: 0, // none

  hasFooter: false,
  footerDivider: false,
  footerResponsiveDivider: 0, // none

  // Children
  contentChildren: 'content',
  paneChildren: 'pane',
  headerChildren: 'header',
  footerChildren: 'footer'
}

export const PresetSplitView = LayoutTemplate.bind({});
PresetSplitView.storyName = 'Presets/Split view';
PresetSplitView.parameters = {
  layout: 'fullscreen',
};
PresetSplitView.args = {
  //preset: 'splitView', // splitView

  wrapperSizing: 'fluid',
  outerSpacing: 0, // none
  innerSpacing: 1, // normal
  columnGap: 0, // none
  rowGap: 0, // none

  responsiveBehavior: 1, // separateRegions
  responsiveBehaviorAt: 2, // md
  responsivePrimaryRegion: 0, // content

  panePosition: 0, // start
  paneResponsivePosition: 0, // inherit
  paneWidth: 2, // wide
  paneDivider: true,
  paneResponsiveDivider: 0, // none
  paneIsSticky: false,

  contentWidth: 0, // full

  hasHeader: false,
  headerDivider: true,
  headerResponsiveDivider: 0, // none

  hasFooter: false,
  footerDivider: true,
  footerResponsiveDivider: 0, // none

  // Children
  contentChildren: 'content',
  paneChildren: 'pane',
  headerChildren: 'header',
  footerChildren: 'footer'
}

export const Settings = LayoutTemplate.bind({});
Settings.parameters = {
  layout: 'fullscreen',
};
Settings.args = {
  contentWidth: 2, // md

  // Children
  contentChildren: (
    <>
      <h2 className="f3 text-normal">General</h2>
      <div className="Box mt-3 p-3">&nbsp;</div>
      <div className="Box mt-3 p-3">&nbsp;</div>
    </>
  ),
  paneChildren: (
    <>
      <h2 className="f3 ml-2 mr-2">Repository settings</h2>
      <div className="ml-n2 mr-n2">
        <NavWithSubItems {...NavWithSubItems.args} />
      </div>
    </>
  ),
  headerChildren: 'header',
  footerChildren: 'footer'
}