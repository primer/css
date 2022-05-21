import React from 'react'
import clsx from 'clsx'
import {OverlayTemplate} from '../../ui-patterns/Overlay/Overlay.stories'

export default {
  title: 'Components/Dialog',
  parameters: {
    layout: 'padded'
  },

  excludeStories: ['DialogTemplate'],
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
      defaultValue: true,
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

export const Playground = OverlayTemplate.bind({})
Playground.args = {
  ...OverlayTemplate.args,
  title: 'Dialog title',
  description: 'Optional dialog description',
  role: 'dialog',
  width: 2,
  height: 3,
  ariaLabelledby: 'title-id',
  ariaDescribedby: 'description-id',
  dataFocusTrap: 'active',
  footerContentAlign: 2,
  showCloseButton: true,
  headerVariant: 0,
  bodyPaddingVariant: 0,
  motion: 1,
  descriptionId: 'description-id',
  titleId: 'title-id',
  showFooterDivider: false,
  children: <p>Dialog body</p>,
  headerRegion: true,
  variantNarrow: 3,
  variantRegular: 0
}
