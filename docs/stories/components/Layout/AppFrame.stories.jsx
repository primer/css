import React from 'react'
import clsx from 'clsx'
//import { AppHeaderTemplate as AppHeader } from '../App/AppHeader.stories'

export default {
  title: 'Components/Layout/AppFrame',
  parameters: {
    layout: 'fullscreen'
  },

  excludeStories: ['AppFrameTemplate'],
  argTypes: {

    // Debug

    _debug: {
      control: {
        type: 'boolean',
      }
    },

    a11yNavItems: {
      type: 'array',
    },

    // Children

    headerChildren: {
      description: 'creates a slot for header children',
      table: {
        category: 'HTML'
      }
    },
    subheaderChildren: {
      description: 'creates a slot for subheader children',
      table: {
        category: 'HTML'
      }
    },
    bodyChildren: {
      description: 'creates a slot for body children',
      table: {
        category: 'HTML'
      }
    },
    footerChildren: {
      description: 'creates a slot for footer children',
      table: {
        category: 'HTML'
      }
    },
  },
}

export const AppFrameTemplate = ({
  _debug,
  a11yNavItems,
  headerChildren,
  subheaderChildren,
  bodyChildren,
  footerChildren,
}) => {

  // Default values
  a11yNavItems = a11yNavItems ?? [
    {url: '#start-of-content', label: 'Skip to content'},
    {url: '/', label: 'GitHub homepage'},
  ];

  return (
    <>
      <div className={clsx('AppFrame')}>

        <div className={clsx('AppFrame-a11yNav')}>
          {a11yNavItems.map(link => (
            <a className={clsx('AppFrame-a11yLink')} href={link.url}>{link.label}</a>
          ))}
        </div>

        <div className={clsx('AppFrame-main')}>

          <div className={clsx('AppFrame-header-wrapper')}>

            <div className={clsx('AppFrame-header')}>
              {headerChildren}
            </div>

            <div id="start-of-content"></div>

            {subheaderChildren && (
              <div className={clsx('AppFrame-subheader')}>
                {subheaderChildren}
                </div>
            )}

          </div>
          <div className={clsx('AppFrame-body')}>
            {bodyChildren}
          </div>
        </div>
        <div className={clsx('AppFrame-footer')}>
          {footerChildren}
        </div>
      </div>

      {_debug && (
        <>
          <style type="text/css">{`
            .AppFrame {

            }
            .AppFrame-header,
            .AppFrame-subheader,
            .AppFrame-body,
            .AppFrame-footer {
              padding: 16px;
            }
            .AppFrame-header {
              background: pink;
            }
            .AppFrame-subheader {
              background: lightblue;
            }
            .AppFrame-footer {
              background: pink;
            }
          `}</style>
        </>
      )}
    </>
  );
};

export const Playground = AppFrameTemplate.bind({})

Playground.args = {
  _debug: true,
  headerChildren: "Header slot",
  subheaderChildren: "Subheader slot",
  bodyChildren: "Body slot",
  footerChildren: "Footer slot",
};