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
      options: ['info', 'warn', 'error', 'success'],
    },
    message: {
      control: 'text',
      description: 'The message to alert',
    },
    hasIcon: {
      control: {
        type: 'boolean',
      },
    },
    hasCloseButton: {
      control: 'boolean',
    },
    isFullWidth: {
      control: 'boolean',
    },
    inTray: {
      control: 'boolean',
    }
  },
}

export const FlashTemplate = ({
  variant,
  message,
  hasIcon,
  hasAction,
  hasCloseButton,
  isFullWidth,
  inTray,
}) => {

  const defaultMessages = {
    'info': 'This is an info message',
    'warn': 'This is a warning message',
    'error': 'This is an error message',
    'success': 'Your site is published at <a href="#">https://monalisa.github.io/</a>',
  };

  variant = variant ?? 'info';
  message = message ?? defaultMessages[variant];

  return (
    <>
      <div className={clsx('flash', variant && `flash-${variant}`, isFullWidth && `flash-full`, inTray && `flash-tray`)}>
        {hasIcon && (
          <>
            {variant === 'info' && (<InfoIcon />)}
            {variant === 'warn' && (<AlertIcon />)}
            {variant === 'error' && (<StopIcon />)}
            {variant === 'success' && (<CheckIcon />)}
          </>
        )}

        <span dangerouslySetInnerHTML={{__html: message}}></span>

        {hasAction && (
          <button class="btn flash-action" type="submit">Action</button>
        )}

        {hasCloseButton && (
          <button class="flash-close js-flash-close" type="button" aria-label="Close">
            <XIcon />
          </button>
        )}
      </div>
    </>
  )
}

export const Playground = FlashTemplate.bind({})

Playground.args = {
  variant: 'info',
  hasIcon: true,
  hasAction: false,
  hasCloseButton: true,
  isFullWidth: false,
};
