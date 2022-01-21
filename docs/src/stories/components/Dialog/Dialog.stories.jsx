import React from 'react'
// import clsx from 'clsx'

export default {
  title: 'Components/Dialog',
  parameters: {
    layout: 'padded'
  },

  excludeStories: ['DialogTemplate'],
  argTypes: {
    title: {
      name: 'title',
      type: { name: 'string', required: false },
      description: 'The heading element of the dialog',
      defaultValue: "",
      table: {
        category: 'HTML'
      }
    },
    description: {
      name: 'description',
      type: 'string',
      description: 'The sub-heading element of the dialog',
      defaultValue: "",
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
  }
}

const focusMethod = function getFocus() {
  var dialog = document.getElementsByTagName('modal-dialog')[0]
  dialog.focus()
}


export const DialogTemplate = ({title, description, focusElement}) => (
  <div class="modal-dialog-backdrop">
    <modal-dialog class="modal-dialog" width="xlarge" height="auto" role="dialog" aria-labelledby="react-aria8832355892-4" aria-describedby="react-aria8832355892-5" data-focus-trap="active" open>
      <header class="dialog-header">
        <div class="header-container">
          <div class="header-container-title">
            <h1 id={`dialog-title`} class="title">{title}</h1>
            {description &&
              <h2 id={`dialog-description`} class="subtitle">{description}</h2>
            }
          </div>
          <button class="close-button" aria-label="Close">
            <svg aria-hidden="true" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style={{"display": "inline-block", "user-select": "none", "vertical-align": "text-bottom", "overflow": "visible"}}>
              <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
            </svg>
          </button>
        </div>
      </header>
      <div class="dialog-body">
        This is the body of the dialog
      </div>
      <footer class="dialog-footer">
        <button class="btn"><span>Continue</span></button>
      </footer>
    </modal-dialog>
    {focusElement && focusMethod()}
  </div>
)

export const Playground = DialogTemplate.bind({})
Playground.args = {
  title: 'This is the title of the dialog',
  description: 'This is the subtitle of the dialog',
  focusElement: false,
}
