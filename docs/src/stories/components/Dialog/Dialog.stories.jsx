import React from 'react'
import clsx from 'clsx'

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
  // find the focusable element
  var dialog = document.getElementsByTagName('modal-dialog')[0]
  // set focus on the element
  dialog.focus()
}


export const DialogTemplate = ({title, description, buttons, variant, href, noUnderline, focusElement, focusAllElements}) => (
  <div class="modal-dialog-backdrop">
    <modal-dialog width="xlarge" height="auto" role="dialog" aria-labelledby="react-aria8832355892-4" aria-describedby="react-aria8832355892-5" data-focus-trap="active" open>
      <header>
        <div class="header-container">
          <div class="header-container-title">
            <h1 id={`dialog-`} class="title">{title}</h1>
            {description &&
              <h2 id="<%= @description_id %>" class="subtitle">{description}</h2>
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
        <footer>
          <button class="btn"><span>Continue</span></button>
          {/*
          <% buttons.each do |button| %>
            <%= button %>
          <% end %>
          */}
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
