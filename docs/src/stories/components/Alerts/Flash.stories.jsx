import React from 'react'
import clsx from 'clsx'
import {InfoIcon, AlertIcon, StopIcon, CheckIcon, XIcon} from '@primer/octicons-react'

export default {
  title: 'Components/Alerts/Banner',
  parameters: {
    // design: {
    //   type: 'figma',
    //   url: 'https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web?node-id=4371%3A7128'
    // },
    layout: 'padded'
  },

  excludeStories: ['BannerTemplate'],
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['info', 'warning', 'error', 'success'],
    },
    title: {
      control: 'text',
      description: 'The banner title.',
    },
    description: {
      control: 'text',
      description: 'The banner description. Optional.',
    },
    hasVisual: {
      control: {
        type: 'boolean',
      },
    },
    hasDismissButton: {
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

export const BannerTemplate = ({
  variant,
  title,
  description,
  hasVisual,
  hasAction,
  hasDismissButton,
  isFull,
  isFullWhenNarrow,
  visualChildren,
  actionChildren
}) => {

  const defaultTitles = {
    'info': 'This is an info message',
    'warning': 'This is a warning message',
    'error': 'This is an error message',
    'success': 'Your site is published at <a href="#">https://monalisa.github.io/</a>',
  };

  variant = variant ?? 'info';
  title = title ?? defaultTitles[variant];
  hasVisual = hasVisual ?? true;


  return (
    <>
      <div
        tabIndex="0"
        aria-labelledby="Banner-title_id"
        aria-describedby="Banner-description_id"
        className={clsx(
          'Banner',
          variant && `Banner--${variant}`,
          isFull && `Banner--full`,
          isFullWhenNarrow && `Banner--full-whenNarrow`
        )}>
        {hasVisual && (
          <div className={clsx('Banner-visual')}>
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

        <div className={clsx('Banner-message')}>
          <p id="Banner-title_id" className={clsx('Banner-title')} dangerouslySetInnerHTML={{__html: title}}></p>
          {description && (
            <>
              <p id="Banner-description_id" className={clsx('Banner-description')} dangerouslySetInnerHTML={{__html: description}}></p>
            </>
          )}
        </div>

        {hasAction && (
          <div className={clsx('Banner-actions')}>
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

        {hasDismissButton && (
          <div className={clsx('Banner-close')}>
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

export const Playground = BannerTemplate.bind({})

Playground.args = {
  variant: 'info',
  hasVisual: true,
  hasAction: false,
  hasDismissButton: true,
  isFull: false,
  isFullWhenNarrow: false,
};
