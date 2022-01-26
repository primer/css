import React from 'react'
import clsx from 'clsx'
import PageLayoutBehavior from '../../helpers/pageLayoutBehavior.jsx'

export default {
  title: 'Components/Layout/Beta',
  excludeStories: ['LayoutTemplate'],
  argTypes: {
    // Debug

    _debug: {
      control: 'boolean',
      description: 'Show background colors in regions for debugging'
    },

    // Structure

    wrapperSizing: {
      options: ['fluid', 'md', 'lg', 'xl'],
      control: {
        type: 'inline-radio',
        labels: ['fluid', 'md', 'lg', 'xl']
      },
      description:
        'Define the maximum width of the component. `fluid` sets it to full-width. Other values center `Layout` horizontally. Refer to [container utilities](https://primer.style/css/utilities/grid#containers) for reference.',
      table: {
        category: 'Structure'
      }
    },
    outerSpacing: {
      options: ['none', 'normal', 'condensed'],
      control: {
        type: 'inline-radio'
      },
      description:
        'Sets wrapper margins surrounding the component to distance itself from the viewport edges. `normal` sets the margin to 16px, and to 24px on `lg` breakpoints and above. `condensed` keeps the margin at 16px. `none` sets the margin to 0.',
      table: {
        category: 'Structure'
      }
    },
    innerSpacing: {
      options: ['none', 'normal', 'condensed'],
      control: {
        type: 'inline-radio'
      },
      description:
        'Sets padding to regions individually. `normal` sets padding to 16px, with the `content` region getting 24px horizontal padding on `lg` breakpoints and above. `condensed` keeps the padding always at `16px`. `none` sets the padding to 0.',
      table: {
        category: 'Structure'
      }
    },
    columnGap: {
      options: ['none', 'normal', 'condensed'],
      control: {
        type: 'inline-radio'
      },
      description:
        'Sets the gap between columns to distance them from each other. `normal` sets the gap to 16px, and to 24px on `lg` breakpoints and above. `condensed` keeps the gap always at 16px. `none` sets the gap to 0.',
      table: {
        category: 'Structure'
      }
    },
    rowGap: {
      options: ['none', 'normal', 'condensed'],
      control: {
        type: 'inline-radio'
      },
      description:
        'Sets the gap below the header and above the footer. `normal` sets the gap to 16px, and to 24px on `lg` breakpoints and above. `condensed` keeps the gap always at 16px. `none` sets the gap to 0.',
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
      description:
        '`responsiveVariant` defines how the layout component adapts to smaller viewports. `stackRegions` presents the content in a vertical flow, with `pane` and `content` vertically arranged. `separateRegions` presents `pane` and `content` as different pages on smaller viewports. Change the preview size from the toolbar to test it.',
      table: {
        category: 'Responsive'
      }
    },
    primaryRegion: {
      options: ['content', 'pane'],
      control: {
        type: 'inline-radio'
      },
      description:
        'When `responsiveVariant` is set to `separateRegions`, defines which region appears first on small viewports. `content` is default.',
      table: {
        category: 'Responsive'
      }
    },

    // Pane

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
    panePosition: {
      options: ['start', 'end'],
      control: {
        type: 'inline-radio'
      },
      description:
        'Defines the position of the pane. `start` renders the pane on the left, and `end` renders it on the right.',
      table: {
        category: 'Pane'
      }
    },
    panePositionNarrow: {
      options: ['inherit', 'start', 'end'],
      control: {
        type: 'inline-radio'
      },
      description:
        'If `responsiveVariant` is set to `stackRegions`, defines the position of the pane in narrow viewports. `start` puts the pane above `content`, and `end` puts it below `content`. `inherit` uses the same value from `panePosition`.',
      table: {
        category: 'Pane'
      }
    },
    hasPaneDivider: {
      control: {type: 'boolean'},
      description: 'Whether to show a pane line divider.',
      table: {
        category: 'Pane'
      }
    },
    paneDividerNarrow: {
      options: ['inherit', 'none', 'line', 'filled'],
      control: {
        type: 'inline-radio'
      },
      description:
        'Whether to show a divider between `pane` and `content` regions if `responsiveVariant` is set to `stackRegions`. `line` shows a single line. `filled` shows a thicker mobile-frienldy divider.',
      table: {
        category: 'Pane'
      }
    },
    paneIsSticky: {
      control: {type: 'boolean'},
      description: 'Whether to make the pane sticky.',
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
      description:
        'Defines the maximum width of the content region. `fluid` sets it to full-width. Other values follow container widths from `sm` to `xl`. With smaller widths, the content region will try to stay centered to the viewport area.',
      table: {
        category: 'Content'
      }
    },

    // Header

    hasHeader: {
      control: {type: 'boolean'},
      table: {
        category: 'Header'
      }
    },

    hasHeaderDivider: {
      control: {type: 'boolean'},
      description: 'Whether to show a header divider.',
      table: {
        category: 'Header'
      }
    },

    headerDividerNarrow: {
      options: ['inherit', 'none', 'line', 'filled'],
      control: {
        type: 'inline-radio'
      },
      description:
        'Defines how the `header` divider should look on narrow viewports. `inherit` renders a `line` if `hasHeaderDivider` is true. `filled` shows a thicker mobile-friendly divider.',
      table: {
        category: 'Header'
      }
    },

    // Footer

    hasFooter: {
      control: {type: 'boolean'},
      table: {
        category: 'Footer'
      }
    },

    hasFooterDivider: {
      control: {type: 'boolean'},
      description: 'Whether to show a footer divider.',
      table: {
        category: 'Footer'
      }
    },

    footerDividerNarrow: {
      options: ['inherit', 'none', 'line', 'filled'],
      control: {
        type: 'inline-radio'
      },
      description:
        'Whether to show a divider above the `footer` region on narrow viewports. `line` shows a single line. `filled` shows a thicker mobile-frienldy divider.',
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

const layoutClassName = 'PageLayout'

// build every component case here in the template (private api)
export const LayoutTemplate = ({
  // Debug
  _debug,

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
  panePositionNarrow,
  hasPaneDivider,
  paneDividerNarrow,
  paneIsSticky,

  // Header
  hasHeader,
  hasHeaderDivider,
  headerDividerNarrow,

  // Footer
  hasFooter,
  hasFooterDivider,
  footerDividerNarrow,

  // Content
  contentWidth,

  // Responsive
  responsiveVariant,
  primaryRegion,

  // Children
  headerChildren,
  contentChildren,
  paneChildren,
  footerChildren
}) => {
  const containerClass = {
    full: '',
    md: 'container-md',
    lg: 'container-lg',
    xl: 'container-xl'
  }

  // Default values
  wrapperSizing = wrapperSizing ?? 'xl'
  outerSpacing = outerSpacing ?? 'normal'
  innerSpacing = innerSpacing ?? 'none'
  columnGap = columnGap ?? 'normal'
  rowGap = rowGap ?? 'normal'
  panePosition = panePosition ?? 'end'
  panePositionNarrow = panePositionNarrow ?? 'inherit'
  responsiveVariant = responsiveVariant ?? 'stackRegions'
  primaryRegion = primaryRegion ?? 'content'

  // Leave `null` values for states that don't require a modifier class
  outerSpacing = outerSpacing === 'none' ? null : outerSpacing
  innerSpacing = innerSpacing === 'none' ? null : innerSpacing
  paneWidth = paneWidth === 'default' ? null : paneWidth
  contentWidth = contentWidth === 'fluid' ? null : contentWidth
  headerDividerNarrow = headerDividerNarrow === 'none' ? null : headerDividerNarrow
  footerDividerNarrow = footerDividerNarrow === 'none' ? null : footerDividerNarrow

  // Inherit value for responsive props
  panePositionNarrow = panePositionNarrow === 'inherit' ? panePosition : panePositionNarrow

  if (hasPaneDivider) {
    paneDividerNarrow = paneDividerNarrow === 'inherit' ? 'line' : paneDividerNarrow
  } else {
    paneDividerNarrow = null
  }

  if (hasHeaderDivider) {
    headerDividerNarrow = headerDividerNarrow === 'inherit' ? 'line' : headerDividerNarrow
  } else {
    headerDividerNarrow = null
  }

  if (hasFooterDivider) {
    footerDividerNarrow = footerDividerNarrow === 'inherit' ? 'line' : footerDividerNarrow
  } else {
    footerDividerNarrow = null
  }

  PageLayoutBehavior()

  return (
    <>
      <div
        className={clsx(
          layoutClassName,

          outerSpacing && layoutClassName + '--outerSpacing-' + `${outerSpacing}`,
          innerSpacing && layoutClassName + '--innerSpacing-' + `${innerSpacing}`,
          columnGap && layoutClassName + '--columnGap-' + `${columnGap}`,
          rowGap && layoutClassName + '--rowGap-' + `${rowGap}`,

          paneWidth && layoutClassName + '--paneWidth-' + `${paneWidth}`,
          panePosition && layoutClassName + '--panePos-' + `${panePosition}`,
          hasPaneDivider && layoutClassName + '--hasPaneDivider',
          paneIsSticky && layoutClassName + '--isPaneSticky',

          layoutClassName + '--responsive-' + `${responsiveVariant}`,
          responsiveVariant === 'separateRegions' && layoutClassName + '--responsive-primary-' + `${primaryRegion}`,
          responsiveVariant === 'stackRegions' &&
            panePositionNarrow &&
            layoutClassName + '--responsive-panePos-' + `${panePositionNarrow}`
        )}
      >
        <div className={clsx(layoutClassName + '-wrapper', wrapperSizing && containerClass[wrapperSizing])}>
          {/* Header */}
          {hasHeader && (
            <div
              className={clsx(
                layoutClassName + '-region',
                layoutClassName + '-header',
                hasHeaderDivider && layoutClassName + '-header--hasDivider',
                headerDividerNarrow && layoutClassName + '-region--dividerNarrow-' + headerDividerNarrow + '-after'
              )}
            >
              {headerChildren}
            </div>
          )}

          <div className={clsx(layoutClassName + '-columns')}>
            {/* pane if rendered first */}
            {panePosition === 'start' && (
              <div
                className={clsx(
                  layoutClassName + '-region',
                  layoutClassName + '-pane',
                  paneDividerNarrow &&
                    layoutClassName +
                      '-region--dividerNarrow-' +
                      paneDividerNarrow +
                      (panePositionNarrow === 'start' ? '-after' : '-before')
                )}
              >
                {paneChildren}
              </div>
            )}

            {/* content */}
            <div className={clsx(layoutClassName + '-region', layoutClassName + '-content')}>
              {contentWidth ? (
                <>
                  <div className={layoutClassName + '-content-centered-' + contentWidth}>
                    <div className={'container-' + contentWidth}>{contentChildren}</div>
                  </div>
                </>
              ) : (
                <>{contentChildren}</>
              )}
            </div>

            {/* pane if rendered last */}
            {panePosition === 'end' && (
              <div
                className={clsx(
                  layoutClassName + '-region',
                  layoutClassName + '-pane',
                  paneDividerNarrow &&
                    layoutClassName +
                      '-region--dividerNarrow-' +
                      paneDividerNarrow +
                      (panePositionNarrow === 'start' ? '-after' : '-before')
                )}
              >
                {paneChildren}
              </div>
            )}
          </div>

          {/* footer */}
          {hasFooter && (
            <div
              className={clsx(
                layoutClassName + '-region',
                layoutClassName + '-footer',
                hasFooterDivider && layoutClassName + '-footer--hasDivider',
                footerDividerNarrow && layoutClassName + '-region--dividerNarrow-' + footerDividerNarrow + '-before'
              )}
            >
              {footerChildren}
            </div>
          )}
        </div>

        {/* debug */}
        {_debug && (
          <style type="text/css">{`
              .PageLayout-header {
                background: lightpink;
              }
              .PageLayout-content {
                background: rgb(255, 197, 253);
              }
              .PageLayout-pane {
                background: rgb(215, 255, 233);
              }
              .PageLayout-footer {
                background: lightyellow;
              }
            `}</style>
        )}
      </div>
    </>
  )
}

export const Playground = LayoutTemplate.bind({})
Playground.storyName = 'Playground'
Playground.parameters = {
  layout: 'fullscreen'
}
Playground.args = {
  _debug: true,
  wrapperSizing: 'xl',
  outerSpacing: 'normal',
  innerSpacing: 'none',
  columnGap: 'normal',
  rowGap: 'normal',

  responsiveVariant: 'stackRegions',
  primaryRegion: 'content',

  paneWidth: 'default',
  panePosition: 'end',
  panePositionNarrow: 'inherit',
  hasPaneDivider: false,
  paneDividerNarrow: 'inherit',
  paneIsSticky: false,

  contentWidth: 'fluid',

  hasHeader: true,
  hasHeaderDivider: false,
  headerDividerNarrow: 'inherit',

  hasFooter: true,
  hasFooterDivider: false,
  footerDividerNarrow: 'inherit',

  contentChildren: 'content',
  paneChildren: 'pane',
  headerChildren: 'header',
  footerChildren: 'footer'
}
