import clsx from 'clsx'
import React from 'react'

export default {
  title: 'UI Patterns/Overlay',
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
    focusElement: {
      control: {type: 'boolean'},
      description: 'focus the dialog',
      defaultValue: false,
      table: {
        category: 'Interactive'
      }
    },
    toggleOverlay: {
      control: {type: 'boolean'},
      description: 'show/hide overlay',
      defaultValue: false,
      table: {
        category: 'Interactive'
      }
    },
    width: {
      options: [0, 1, 2, 3, 4], // iterator
      mapping: [
        'Overlay--width-small',
        'Overlay--width-medium',
        'Overlay--width-large',
        'Overlay--width-xlarge',
        'Overlay--width-xxlarge'
      ], // values
      control: {
        type: 'inline-radio',
        labels: ['small', 'medium', 'large', 'xlarge', 'xxlarge']
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
    position: {
      options: [0, 1, 2, 3], // iterator
      mapping: [null, 'Overlay-backdrop--positionCenter', 'Overlay-backdrop--positionBottom'], // values
      control: {
        type: 'inline-radio',
        labels: ['none', 'center', 'bottom', 'side']
      },
      description: 'Positions overlay',
      table: {
        category: 'CSS'
      },
      defaultValue: 'Overlay--position-center'
    },
    headerRegion: {
      control: {type: 'boolean'},
      description:
        'A header region may be used to provide context to the user by displaying a title, description, and offering an easy-to-escape route with a Close button. Headers may also provide ways for the user to interact with the content, such as with search and tabs.',
      defaultValue: true,
      table: {
        category: 'HTML'
      }
    },
    footerRegion: {
      control: {type: 'boolean'},
      description:
        'The footer region may be used to show confirmation actions, navigation links, or other important elements that should appear outside of the content scrolling region.',
      defaultValue: true,
      table: {
        category: 'HTML'
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
    showInputField: {
      control: {type: 'boolean'},
      defaultValue: false,
      description: 'Slot for input field',
      table: {
        category: 'CSS'
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
    }
  }
}

const focusMethod = function getFocus() {
  const dialog = document.getElementsByTagName('modal-dialog')[0]
  dialog.focus()
}

const toggleDialog = () => {
  const dialog = document.getElementById('modal-dialog-backdrop')
  dialog.classList.toggle('modal-hide')
  focusMethod()
}

export const DialogTemplate = ({
  title,
  description,
  focusElement,
  toggleOverlay,
  width,
  height,
  showFooterDivider,
  showHeaderDivider,
  headerRegion,
  footerRegion,
  position,
  showInputField,
  motion,
  footerContentAlign
}) => (
  <>
    <div
      id="modal-dialog-backdrop"
      className={clsx(toggleOverlay && 'Overlay-hidden', 'Overlay-backdrop', position && `${position}`)}
    >
      <div
        className={clsx('Overlay', width && `${width}`, height && `${height}`, motion && `${motion}`)}
        data-focus-trap="active"
        open
      >
        {headerRegion && (
          <header
            className={clsx('Overlay-header', showHeaderDivider && 'Overlay-header--divided', 'Overlay-header--large')}
          >
            <div className="Overlay-header--contentWrap">
              <div className="Overlay-header--titleWrap">
                {title && (
                  <h1 id={`dialog-title`} className="Overlay-title">
                    {title}
                  </h1>
                )}
                {description && (
                  <h2 id={`dialog-description`} className="Overlay-description">
                    {description}
                  </h2>
                )}
              </div>
              <button className="Overlay-closeButton" aria-label="Close" onClick={toggleDialog}>
                <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                  ></path>
                </svg>
              </button>
            </div>
            {showInputField && (
              <div className="Overlay-header-inputField">
                <input className="form-control input-block" />
              </div>
            )}
          </header>
        )}
        <div className="Overlay-body">
          This is the body of the dialogThis is the body of the dialogThis is the body of the dialog This is the body of
          the dialog This is the body of the dialog This is the body of the dialog This is the body of the dialog This
          is the body of the dialog This is the body of the dialog
        </div>
        {footerRegion && (
          <footer
            className={clsx(
              'Overlay-footer',
              showFooterDivider && 'Overlay-footer--divided',
              footerContentAlign && `${footerContentAlign}`
            )}
          >
            <button class="btn" onClick={toggleDialog}>
              <span>Continue</span>
            </button>
          </footer>
        )}
      </div>
      {focusElement && focusMethod()}
    </div>
  </>
)

export const Playground = DialogTemplate.bind({})
Playground.args = {
  title: 'This is the title of the dialog',
  description: 'This is the subtitle of the dialog',
  focusElement: false,
  motion: 1,
  footerContentAlign: 'end',
  position: 'Overlay--position-center'
}
