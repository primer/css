import clsx from 'clsx'
import React from 'react'
import ConditionalWrapper from '../../helpers/ConditionalWrapper'
import {PatternFullBleed} from '../ActionList/ActionListFeatures.stories.jsx'
const variant = {}
export default {
  title: 'UI Patterns/Overlay',
  parameters: {
    layout: 'padded'
  },
  excludeStories: ['OverlayTemplate'],
  argTypes: {

    // Header

    title: {
      name: 'title',
      type: {name: 'string', required: true},
      description: 'The heading element of the overlay',
      defaultValue: 'Title',
      table: {
        category: 'Header'
      }
    },
    description: {
      name: 'description',
      type: 'string',
      description: 'The sub-heading element of the overlay',
      defaultValue: '',
      table: {
        category: 'Header'
      }
    },
    headerVariant: {
      options: ['medium', 'large'],
      defaultValue: 'medium',
      control: {
        type: 'inline-radio',
      },
      description: 'medium (default), large header/description font-size + spacing',
      table: {
        category: 'Header'
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

    // Properties

    width: {
      options: ['auto', 'small', 'medium', 'large', 'xlarge', 'xxlarge'],
      control: {
        type: 'inline-radio',
      },
      description: 'Width options: small: 256px, medium: 320px, large: 480px, xlarge: 640px, xxlarge: 960px',
      table: {
        category: 'Properties'
      }
    },
    height: {
      options: ['auto', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'],
      control: {
        type: 'inline-radio',
      },
      description: 'Height options: auto: adjusts to content, xsmall: 192px, small: 256px, medium: 320px, large: 432px, xlarge: 600px',
      table: {
        category: 'Properties'
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

    // Variant

    variant: {
      options: ['center', 'anchor', 'side', 'full'],
      type: {
        name: 'select',
        required: true,
      },
      description: '',
      table: {
        category: 'Variant'
      }
    },
    variantWhenNarrow: {
      options: ['inherit', 'center', 'anchor', 'side', 'full'],
      defaultValue: 'inherit',
      type: {
        name: 'select',
        required: false,
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
      description: 'Positions overlay for regular viewport range',
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
        category: 'Header'
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
      options: ['auto', 'none', 'scaleFade', 'slide', 'slideFade'],
      control: {
        type: 'inline-radio',
      },
      description: 'Animation options for show/hide overlay',
      table: {
        category: 'Properties'
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
        category: 'Footer'
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
  variantWhenNarrow,
  variant,
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
  placementNarrow,
  placementRegular
}) => {

  // Default values
  width = width ?? 'auto';
  height = height ?? 'auto';
  motion = motion ?? 'auto';
  variant = variant ?? 'center';
  variantWhenNarrow = variantWhenNarrow ?? 'inherit';

  // Inherit values
  variantWhenNarrow = variantWhenNarrow === 'inherit' ? variant : variantWhenNarrow;

  return (
  <>
    <button class="btn" onClick={toggleDialog}>
      <span>Open overlay</span>
    </button>
    <div
      id="overlay-backdrop"
      className={clsx(
        toggleOverlay     && 'Overlay--hidden',
        variant           && `Overlay-backdrop--${variant}`,
        variantWhenNarrow && `Overlay-backdrop--${variantWhenNarrow}-whenNarrow`,
        placementRegular  && `${placementRegular}`,
        placementNarrow   && `${placementNarrow}`,
      )}
    >
      <div
        className={clsx(
          'Overlay',
          width && `Overlay--width-${width}`,
          height && `Overlay--height-${height}`,
          motion && `Overlay--motion-${motion}`,
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
  );
};

export const Playground = OverlayTemplate.bind();
Playground.storyName = 'Playground';
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
  width: 'small',
  height: 'small',
  headerVariant: 0,
  headerRegion: true,
  footerRegion: true,
  showFooterDivider: false,
  showHeaderDivider: false,
  role: '',
  ariaDescribedby: '',
  dataFocusTrap: ''
};

export const Dialog = OverlayTemplate.bind();
Dialog.storyName = 'Dialog';
Dialog.args = {
  variant: 'center',
  title: 'Dialog title',
  description: 'This is the subtitle of the dialog',
  motion: 'auto',
  footerContentAlign: 2,
  showCloseButton: true,
  showFooterButton: false,
  headerContentSlot: '',
  actionContentSlot: '',
  headerVariant: 0,
  bodyPaddingVariant: 0,
  width: 'medium',
  height: 'small',
  headerVariant: 0,
  headerRegion: true,
  footerRegion: true,
  showFooterDivider: false,
  showHeaderDivider: false,
  role: '',
  ariaDescribedby: '',
  dataFocusTrap: '',
  children: (
    <>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  )
};