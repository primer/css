import React from 'react'
import clsx from 'clsx'
import {InfoIcon, AlertIcon, StopIcon, CheckIcon, XIcon} from '@primer/octicons-react'

export default {
  title: 'Components/Alerts/Flash',
  parameters: {
    // design: {
    //   type: 'figma',
    //   url: 'https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web?node-id=4371%3A7128'
    // },
    layout: 'padded'
  },

  excludeStories: ['FlashTemplate'],
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['info', 'warning', 'error', 'success'],
    },
    message: {
      control: 'text',
      description: 'The message to alert',
    },
    hasVisual: {
      control: {
        type: 'boolean',
      },
    },
    hasCloseButton: {
      control: 'boolean',
    },
    isFull: {
      control: 'boolean',
    },
    isFullWhenNarrow: {
      control: 'boolean',
    },
    visualChildren: {
      description: 'creates a slot for custom visuals',
    },
    actionChildren: {
      description: 'creates a slot for action buttons',
    }
  },
}

export const FlashTemplate = ({
  variant,
  message,
  hasVisual,
  hasAction,
  hasCloseButton,
  isFull,
  isFullWhenNarrow,
  visualChildren,
  actionChildren
}) => {

  const defaultMessages = {
    'info': 'This is an info message',
    'warning': 'This is a warning message',
    'error': 'This is an error message',
    'success': 'Your site is published at <a href="#">https://monalisa.github.io/</a>',
  };

  variant = variant ?? 'info';
  message = message ?? defaultMessages[variant];
  hasVisual = hasVisual ?? true;


  return (
    <>
      <div className={clsx('Flash', variant && `Flash--${variant}`, isFull && `Flash--full`, isFullWhenNarrow && `Flash--full-whenNarrow`)}>
        {hasVisual && (
          <div className={clsx('Flash-visual')}>
            {visualChildren && (
              <>
                {visualChildren}
              </>
            ) || (
              <>
                {variant === 'info' && (<InfoIcon />)}
                {variant === 'warning' && (<AlertIcon />)}
                {variant === 'error' && (<StopIcon />)}
                {variant === 'success' && (<CheckIcon />)}
              </>
            )}
          </div>
        )}

        <div className={clsx('Flash-message')} dangerouslySetInnerHTML={{__html: message}}></div>

        {hasAction && (
          <div className={clsx('Flash-actions')}>
            {actionChildren && (
              <>
                {actionChildren}
              </>
            ) || (
              <>
                <button className="btn" type="submit">Action</button>
              </>
            )}
          </div>
        )}

        {hasCloseButton && (
          <div className={clsx('Flash-close')}>
            {/* Replace with new IconButton component */}
            <button className="btn btn-octicon p-2" type="button" aria-label="Close">
              <XIcon />
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export const Playground = FlashTemplate.bind({})

Playground.args = {
  variant: 'info',
  hasVisual: true,
  hasAction: false,
  hasCloseButton: true,
  isFull: false,
  isFullWhenNarrow: false,
};
