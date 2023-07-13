import React from 'react'
import {BADGE} from '@geometricpanda/storybook-addon-badges'

export default {
  title: 'Deprecated/SideNav',
  parameters: {
    storyType: 'banner',
    controls: {hideNoControlsWarning: true},
    badges: [BADGE.DEPRECATED],
  },
}

export const Default = () => {
  return (
    <>
      <nav className="SideNav border" style={{maxWidth: '360px'}}>
        <a className="SideNav-item" href="#url">
          Account
        </a>
        <a className="SideNav-item" href="#url" aria-current="page">
          Profile
        </a>
        <a className="SideNav-item" href="#url">
          Emails
        </a>
        <a className="SideNav-item" href="#url">
          Notifications
        </a>
      </nav>
    </>
  )
}

export const Options = () => {
  return (
    <>
      <nav className="SideNav border" style={{maxWidth: '360px'}}>
        <a className="SideNav-item" href="#url">
          Text only
        </a>
        <a className="SideNav-item" href="#url">
          <img
            className="avatar avatar-small mr-2"
            src="https://avatars.githubusercontent.com/hubot?s=40"
            alt="hubot"
            height="20"
            width="20"
          />
          With an avatar
        </a>
        <a className="SideNav-item" href="#url">
          <svg
            className="SideNav-icon octicon octicon-octoface"
            version="1.1"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            {' '}
            <path
              fill-rule="evenodd"
              d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"
            />{' '}
          </svg>
          With an icon
        </a>
        <a className="SideNav-item d-flex flex-items-center flex-justify-between" href="#url">
          With a status icon
          <svg
            version="1.1"
            width="8"
            height="16"
            viewBox="0 0 8 16"
            className="octicon octicon-primitive-dot color-green-5 ml-2 float-right"
            aria-hidden="true"
          >
            <path fill-rule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
          </svg>
        </a>
        <a className="SideNav-item d-flex flex-items-center flex-justify-between" href="#url">
          With a label <span className="Label">label</span>
        </a>
        <a className="SideNav-item d-flex flex-items-center flex-justify-between" href="#url">
          With a counter <span className="Counter ml-1">16</span>
        </a>
        <a className="SideNav-item" href="#url">
          <h5>With a heading</h5>
          <span>and some longer description</span>
        </a>
      </nav>
    </>
  )
}

export const SubItem = () => {
  return (
    <>
      <aside className="color-bg-subtle border p-3" style={{maxWidth: '360px'}}>
        <h5 className="color-fg-muted mb-2 pb-1 border-bottom">Menu</h5>
        <nav className="SideNav">
          <a className="SideNav-subItem" href="#url">
            Account
          </a>
          <a className="SideNav-subItem" href="#url" aria-current="page">
            Profile
          </a>
          <a className="SideNav-subItem" href="#url">
            Emails
          </a>
          <a className="SideNav-subItem" href="#url">
            Notifications
          </a>
        </nav>
      </aside>
    </>
  )
}

export const Nested = () => {
  return (
    <>
      <nav className="SideNav border" style={{maxWidth: '360px'}}>
        <a className="SideNav-item" href="#url">
          <svg
            className="octicon octicon-person SideNav-icon"
            width="12"
            height="16"
            viewBox="0 0 12 16"
            aria-hidden="true"
          >
            {' '}
            <path
              fill-rule="evenodd"
              d="M12 14.002a.998.998 0 0 1-.998.998H1.001A1 1 0 0 1 0 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z"
            />{' '}
          </svg>
          <span>Account</span>
        </a>
        <a className="SideNav-item" href="#url" aria-current="page">
          <svg
            className="octicon octicon-octoface SideNav-icon"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            {' '}
            <path
              fill-rule="evenodd"
              d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"
            />{' '}
          </svg>
          <span>Profile</span>
        </a>
        <nav className="SideNav color-bg-default border-top py-3" style="padding-left: 44px">
          <a className="SideNav-subItem" href="#url" aria-current="page">
            Sub item 1
          </a>
          <a className="SideNav-subItem" href="#url">
            Sub item 2
          </a>
          <a className="SideNav-subItem" href="#url">
            Sub item 3
          </a>
        </nav>
        <a className="SideNav-item" href="#url">
          <svg
            className="octicon octicon-mail SideNav-icon"
            width="14"
            height="16"
            viewBox="0 0 14 16"
            aria-hidden="true"
          >
            {' '}
            <path
              fill-rule="evenodd"
              d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"
            />{' '}
          </svg>
          <span>Emails</span>
        </a>
      </nav>
    </>
  )
}
