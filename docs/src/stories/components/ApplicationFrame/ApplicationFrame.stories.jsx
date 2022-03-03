import React from 'react'
import clsx from 'clsx'
import {ZapIcon} from '@primer/octicons-react'
import { FlashTemplate } from '../Alerts/Flash.stories'

export default {
  title: 'Components/ApplicationFrame',
  parameters: {
    // design: {
    //   type: 'figma',
    //   url: 'https://www.figma.com/file/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web?node-id=4371%3A7128'
    // },
    // layout: 'padded'
    layout: 'fullscreen'
  },

  excludeStories: ['ApplicationFrameTemplate'],
  argTypes: {
    hasServerStats: {
      control: 'boolean',
      description: 'Show hubber-only server stats bar',
    },
    headerTemplate: {
      control: {
        type: 'radio',
        options: ['classic', 'themeable', 'primer'],
      },
    },

    // Alert tray

    alertType: {
      control: 'radio',
      options: ['none', 'info', 'warn', 'error', 'success'],
    },
    alertMessage: {
      control: 'text',
      description: 'The message to alert',
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

export const ApplicationFrameTemplate = ({
  hasServerStats,
  headerTemplate,
  alertType,
  alertMessage,
  headerChildren,
  bodyChildren,
  footerChildren,
}) => (
  <>
    <div className={clsx('ApplicationFrame')}>
      <div className={clsx('ApplicationFrame-main')}>
        <a href="#start-of-content" className={clsx('ApplicationFrame-skip-to-content')}>Skip to content</a>

        <div className={clsx('ApplicationFrame-header-wrapper')}>
          {hasServerStats && (
            <div className={clsx('ApplicationFrame-server-stats')}>
              server stats
            </div>
          )}

          <div className={clsx('ApplicationFrame-header')}>
            {headerTemplate === 'classic' && (
              headerClassic
            )}

            {headerTemplate === 'themeable' && (
              headerThemeable
            )}

            {headerTemplate === 'primer' && (
              headerPrimer
            )}
          </div>
          
          <div id="start-of-content"></div>

          {alertType !== undefined && alertType !== 'none' && (
            <div className={clsx('ApplicationFrame-tray')}>
                <div className="container-md">
                  <FlashTemplate variant={alertType} message={alertMessage} hasIcon={true} hasCloseButton={true} inTray={true} />
                </div>
            </div>
          )}

          {headerChildren}
        </div>
        <div className={clsx('ApplicationFrame-body')}>
          {bodyChildren}
        </div>
      </div>
      <div className={clsx('ApplicationFrame-footer')}>
        {footerChildren}
      </div>
    </div>
  </>
)

const headerClassic =
  <>
    <div className={clsx('Header')}>
      <div className="Header-item">
        <a href="#" className="Header-link f4 d-flex flex-items-center">
          <svg height="32" className="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" fill="#fff"></path></svg>
        </a>
      </div>
      <div className="Header-item Header-item--full">
        {/* Menu */}
      </div>
      <div className="Header-item mr-0">
        <img className="avatar d-block" height="32" alt="@octocat" src="https://github.com/octocat.png" width="32" class="circle" />
      </div>
    </div>
  </>;

const headerThemeable =
  <>
    <div className={clsx('Header', 'Header--matchTheme')}>
      <div className="Header-item">
        <a href="#" className="Header-logo">
          <svg height="32" className="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
        </a>
      </div>
      <div className="Header-item Header-item--full">
        {/* Menu */}
      </div>
      <div className="Header-item mr-0">
        <a href="#" className="Header-user">
          <img className="avatar" height="32" alt="@octocat" src="https://github.com/octocat.png" width="32" class="circle" />
        </a>
      </div>
    </div>
  </>;

const headerPrimer =
<>
  <div className={clsx('Header', 'Header--matchTheme')}>
    <div className="Header-item">
      <a href="#" className="Header-logo">
        <svg height="32" className="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true" style={{'fill': 'var(--color-accent-fg)'}}><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
      </a>
      <h1 className="Header-title">
        <a href="#">Primer</a>
      </h1>
    </div>
    <div className="Header-item Header-item--full">
      {/* Menu */}
    </div>
    <div className="Header-item mr-0">
      <a href="#" className="Header-user">
        <img className="avatar" height="32" alt="@octocat" src="https://github.com/octocat.png" width="32" class="circle" />
      </a>
    </div>
  </div>
</>;


export const Playground = ApplicationFrameTemplate.bind({})

Playground.args = {
  hasServerStats: false,
  headerTemplate: 'classic',
  alertType: 'none',
};
