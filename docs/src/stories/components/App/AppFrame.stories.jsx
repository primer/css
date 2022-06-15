import React from 'react'
import clsx from 'clsx'
import {ZapIcon} from '@primer/octicons-react'
import { AppHeaderTemplate as AppHeader } from '../App/AppHeader.stories'

export default {
  title: 'Components/App/AppFrame',
  parameters: {
    // design: {
    //   type: 'figma',
    //   url: 'https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web?node-id=4371%3A7128'
    // },
    // layout: 'padded'
    layout: 'fullscreen'
  },

  excludeStories: ['AppFrameTemplate'],
  argTypes: {

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
  a11yNavItems,
  headerChildren,
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
          <ul>
            {a11yNavItems.map(link => (
              <li>
                <a className={clsx('AppFrame-a11yLink')} href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>

        </div>

        <div className={clsx('AppFrame-main')}>

          <div className={clsx('AppFrame-header-wrapper')}>

            <div className={clsx('AppFrame-header')}>
              {headerChildren}
            </div>

            <div id="start-of-content"></div>

            {/* Todo: figure out region for banners / custom elements that live before AppFrame-body */}
          </div>
          <div className={clsx('AppFrame-body')}>
            {bodyChildren}
          </div>
        </div>
        <div className={clsx('AppFrame-footer')}>
          {footerChildren}
        </div>
      </div>
    </>
  );
};

export const Playground = AppFrameTemplate.bind({})

Playground.args = {
  headerChildren:
    <>
      <AppHeader localBarChildren={
        <>
          <nav aria-label="Default with nav element" data-view-component="true" class="UnderlineNav">
            <ul data-view-component="true" class="UnderlineNav-body list-style-none">
              <li data-view-component="true" class="d-inline-flex">
                <a href="#" aria-current="page" data-view-component="true" class="UnderlineNav-item">Item 1</a>
              </li>
              <li data-view-component="true" class="d-inline-flex">
                <a href="#" data-view-component="true" class="UnderlineNav-item">Item 2</a>
              </li>
            </ul>
          </nav>
        </>
      } />
    </>
};