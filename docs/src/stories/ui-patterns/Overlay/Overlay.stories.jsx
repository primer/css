import clsx from 'clsx'
import React from 'react'
import ConditionalWrapper from '../../helpers/ConditionalWrapper'
const variant = {}
export default {
  title: 'UI Patterns/Overlay',
  parameters: {
    layout: 'padded'
  },
  excludeStories: ['OverlayTemplate'],
  argTypes: {
    title: {
      name: 'title',
      type: {name: 'string', required: false},
      description: 'The heading element of the dialog',
      defaultValue: '',
      table: {
        category: 'HTML'
      }
    },
    description: {
      name: 'description',
      type: 'string',
      description: 'The sub-heading element of the dialog',
      defaultValue: '',
      table: {
        category: 'HTML'
      }
    },
    toggleOverlay: {
      control: {type: 'boolean'},
      description: 'show/hide overlay',
      defaultValue: false,
      table: {
        category: 'Demo'
      }
    },
    showCloseButton: {
      control: {type: 'boolean'},
      description: 'show/hide close button',
      defaultValue: false,
      table: {
        category: 'Demo'
      }
    },
    showFooterButton: {
      control: {type: 'boolean'},
      description: 'show/hide footer button',
      defaultValue: false,
      table: {
        category: 'Demo'
      }
    },
    width: {
      options: [0, 1, 2, 3, 4, 5], // iterator
      mapping: [
        'Overlay--width-auto',
        'Overlay--width-small',
        'Overlay--width-medium',
        'Overlay--width-large',
        'Overlay--width-xlarge',
        'Overlay--width-xxlarge'
      ], // values
      control: {
        type: 'inline-radio',
        labels: ['auto', 'small', 'medium', 'large', 'xlarge', 'xxlarge']
      },
      description: 'Width options: small: 256px, medium: 320px, large: 480px, xlarge: 640px, xxlarge: 960px',
      table: {
        category: 'CSS'
      }
    },
    height: {
      options: [0, 1, 2, 3, 4, 5], // iterator
      mapping: [
        'Overlay--height-auto',
        'Overlay--height-xsmall',
        'Overlay--height-small',
        'Overlay--height-medium',
        'Overlay--height-large',
        'Overlay--height-xlarge'
      ], // values
      control: {
        type: 'inline-radio',
        labels: ['auto', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']
      },
      description:
        'Height options: auto: adjusts to content, xsmall: 192px, small: 256px, medium: 320px, large: 432px, xlarge: 600px',
      table: {
        category: 'CSS'
      }
    },
    headerVariant: {
      options: [0, 1], // iterator
      mapping: ['', 'Overlay-header--large'], // values
      control: {
        type: 'inline-radio',
        labels: ['medium (default)', 'large']
      },
      description: 'medium (default), large header/description font-size + spacing',
      table: {
        category: 'CSS'
      }
    },
    bodyPaddingVariant: {
      options: [0, 1, 2], // iterator
      mapping: ['', 'Overlay-body--paddingCondensed', 'Overlay-body--paddingNone'], // values
      control: {
        type: 'inline-radio',
        labels: ['normal (default)', 'condensed', 'none']
      },
      description: 'body spacing',
      table: {
        category: 'CSS'
      }
    },
    variantNarrow: {
      options: [0, 1, 2, 3], // iterator
      mapping: [
        'Overlay-backdrop--center-whenNarrow',
        'Overlay-backdrop--anchor-whenNarrow',
        'Overlay-backdrop--side-whenNarrow',
        'Overlay-backdrop--full-whenNarrow'
      ], // values
      control: {
        type: 'inline-radio',
        labels: ['center', 'anchored', 'side', 'full']
      },
      description: '',
      table: {
        category: 'Variant'
      }
    },
    variantRegular: {
      options: [0, 1, 2, 3], // iterator
      mapping: [
        'Overlay-backdrop--center',
        'Overlay-backdrop--anchor',
        'Overlay-backdrop--side',
        'Overlay-backdrop--full'
      ], // values
      control: {
        type: 'inline-radio',
        labels: ['center', 'anchored', 'side', 'full']
      },
      description: '',
      table: {
        category: 'Variant'
      }
    },
    placementNarrow: {
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      mapping: [
        'Overlay-backdrop--placement-top-whenNarrow',
        '',
        '',
        '',
        'Overlay-backdrop--placement-bottom-whenNarrow',
        '',
        '',
        '',
        'Overlay-backdrop--placement-right-whenNarrow',
        '',
        '',
        '',
        'Overlay-backdrop--placement-left-whenNarrow',
        '',
        '',
        '',
        ''
      ],
      control: {
        type: 'inline-radio',
        labels: [
          'top',
          'top-start',
          'top-center',
          'top-end',
          'bottom',
          'bottom-start',
          'bottom-center',
          'bottom-end',
          'right',
          'right-start',
          'right-center',
          'right-end',
          'left',
          'left-start',
          'left-center',
          'left-end',
          'reset'
        ]
      },
      description: 'Positions overlay for narrow viewport range',
      table: {
        category: 'Placement'
      }
    },
    placementRegular: {
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      mapping: [
        'Overlay-backdrop--placement-top',
        '',
        '',
        '',
        'Overlay-backdrop--placement-bottom',
        '',
        '',
        '',
        'Overlay-backdrop--placement-right',
        '',
        '',
        '',
        'Overlay-backdrop--placement-left',
        '',
        '',
        '',
        ''
      ],
      control: {
        type: 'inline-radio',
        labels: [
          'top',
          'top-start',
          'top-center',
          'top-end',
          'bottom',
          'bottom-start',
          'bottom-center',
          'bottom-end',
          'right',
          'right-start',
          'right-center',
          'right-end',
          'left',
          'left-start',
          'left-center',
          'left-end',
          'reset'
        ]
      },
      description: 'Positions overlay for narrow viewport range',
      table: {
        category: 'Placement'
      }
    },
    headerRegion: {
      control: {type: 'boolean'},
      description:
        'A header region may be used to provide context to the user by displaying a title, description, and offering an easy-to-escape route with a Close button. Headers may also provide ways for the user to interact with the content, such as with search and tabs.',
      defaultValue: true,
      table: {
        category: 'Demo'
      }
    },
    footerRegion: {
      control: {type: 'boolean'},
      description:
        'The footer region may be used to show confirmation actions, navigation links, or other important elements that should appear outside of the content scrolling region.',
      defaultValue: true,
      table: {
        category: 'Demo'
      }
    },
    showFooterDivider: {
      control: {type: 'boolean'},
      defaultValue: false,
      description: 'Show dividers above footer',
      table: {
        category: 'CSS'
      }
    },
    showHeaderDivider: {
      control: {type: 'boolean'},
      defaultValue: false,
      description: 'Show dividers below header',
      table: {
        category: 'CSS'
      }
    },
    headerContentSlot: {
      description: 'Slot for additional header content',
      control: {type: 'string'},
      table: {
        category: 'HTML'
      }
    },
    actionContentSlot: {
      description: 'Slot for additional header action',
      control: {type: 'string'},
      table: {
        category: 'HTML'
      }
    },
    motion: {
      options: [0, 1], // iterator
      mapping: [null, 'Overlay--motion-scaleFade'], // values
      control: {
        type: 'inline-radio',
        labels: ['none', 'scaleFade']
      },
      description: 'Animation options for show/hide overlay',
      table: {
        category: 'CSS'
      }
    },
    footerContentAlign: {
      options: [0, 1, 2], // iterator
      mapping: ['Overlay-footer--alignStart', 'Overlay-footer--alignCenter', 'Overlay-footer--alignEnd'], // values
      control: {
        type: 'inline-radio',
        labels: ['start', 'center', 'end']
      },
      description: 'Align footer contents',
      table: {
        category: 'CSS'
      }
    },
    role: {
      description: 'Semantic role',
      control: {type: 'string'},
      table: {
        category: 'HTML'
      }
    },
    ariaLabelledy: {
      description: 'aria-labelledby',
      control: {type: 'string'},
      table: {
        category: 'HTML'
      }
    },
    ariaDescribedby: {
      description: 'aria-describedby',
      control: {type: 'string'},
      table: {
        category: 'HTML'
      }
    },
    dataFocusTrap: {
      description: 'data-focus-trap',
      control: {type: 'string'},
      table: {
        category: 'HTML'
      }
    },
    titleId: {
      description: 'title id',
      control: {type: 'string'},
      table: {
        category: 'HTML'
      }
    },
    descriptionId: {
      description: 'description id',
      control: {type: 'string'},
      table: {
        category: 'HTML'
      }
    }
  }
}

const focusMethod = function getFocus() {
  const dialog = document.getElementById('overlay-backdrop')[0]
  dialog.focus()
}

const toggleDialog = () => {
  const dialog = document.getElementById('overlay-backdrop')
  dialog.classList.toggle('Overlay--hidden')
  focusMethod()
}

export const OverlayTemplate = ({
  title,
  description,
  toggleOverlay,
  width,
  height,
  showFooterDivider,
  showHeaderDivider,
  headerRegion,
  footerRegion,
  headerContentSlot,
  motion,
  footerContentAlign,
  showCloseButton,
  showFooterButton,
  actionContentSlot,
  headerVariant,
  bodyPaddingVariant,
  role,
  ariaLabelledby,
  ariaDescribedby,
  dataFocusTrap,
  children,
  titleId,
  descriptionId,
  variantNarrow,
  variantRegular,
  placementNarrow,
  placementRegular
}) => (
  <>
    <button class="btn" onClick={toggleDialog}>
      <span>Open overlay</span>
    </button>
    <div
      id="overlay-backdrop"
      className={clsx(
        toggleOverlay && 'Overlay--hidden',
        variantNarrow && `${variantNarrow}`,
        variantRegular && `${variantRegular}`,
        placementNarrow && `${placementNarrow}`,
        placementRegular && `${placementRegular}`
      )}
    >
      <div
        className={clsx(
          'Overlay',
          width && `${width}`,
          height && `${height}`,
          motion && `${motion}`,
          variantNarrow && 'Overlay-whenNarrow'
        )}
        data-focus-trap={dataFocusTrap}
        role={role}
        aria-labelledby={ariaLabelledby}
        aria-describedby={ariaDescribedby}
        open
      >
        {headerRegion && (
          <header
            className={clsx(
              'Overlay-header',
              showHeaderDivider && 'Overlay-header--divided',
              headerVariant && `${headerVariant}`
            )}
          >
            <div className="Overlay-headerContentWrap">
              <div className="Overlay-titleWrap">
                {title && (
                  <h1 id={titleId} className="Overlay-title">
                    {title}
                  </h1>
                )}
                {description && (
                  <h2 id={descriptionId} className="Overlay-description">
                    {description}
                  </h2>
                )}
              </div>
              {showCloseButton && (
                <div className="Overlay-actionWrap">
                  {actionContentSlot && <div dangerouslySetInnerHTML={{__html: actionContentSlot}} />}
                  <button className="Overlay-closeButton" aria-label="Close" onClick={toggleDialog}>
                    <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                      ></path>
                    </svg>
                  </button>
                </div>
              )}
            </div>
            {headerContentSlot && (
              <div className="Overlay-headerContentSlot" dangerouslySetInnerHTML={{__html: headerContentSlot}} />
            )}
          </header>
        )}
        <div className={clsx('Overlay-body', bodyPaddingVariant && `${bodyPaddingVariant}`)}>{children}</div>
        {footerRegion && (
          <footer
            className={clsx(
              'Overlay-footer',
              showFooterDivider && 'Overlay-footer--divided',
              footerContentAlign && `${footerContentAlign}`
            )}
          >
            {showFooterButton && (
              <button class="btn" onClick={toggleDialog}>
                <span>Continue</span>
              </button>
            )}
          </footer>
        )}
      </div>
    </div>
  </>
)

export const Playground = OverlayTemplate.bind({})
Playground.storyName = 'Playground'
Playground.args = {
  title: 'This is the title of the dialog',
  description: 'This is the subtitle of the dialog',
  motion: 1,
  footerContentAlign: 2,
  showCloseButton: true,
  showFooterButton: false,
  headerContentSlot: '',
  actionContentSlot: '',
  headerVariant: 0,
  bodyPaddingVariant: 0,
  width: 1,
  height: 3,
  headerVariant: 0,
  headerRegion: true,
  footerRegion: true,
  showFooterDivider: false,
  showHeaderDivider: false,
  role: '',
  ariaDescribedby: '',
  dataFocusTrap: ''
}
