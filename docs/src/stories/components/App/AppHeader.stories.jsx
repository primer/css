import React from 'react'
import clsx from 'clsx'
import {MarkGithubIcon, BellIcon, PlusIcon} from '@primer/octicons-react'
//import { FlashTemplate } from '../Alerts/Flash.stories'

export default {
  title: 'Components/App/AppHeader',
  parameters: {
    layout: 'fullscreen'
  },
  excludeStories: ['AppHeaderTemplate'],
  argTypes: {

    context: {
      control: 'radio',
      options: ['none', 'info', 'warning', 'error', 'success'],
    },

  },
}

export const AppHeaderTemplate = ({
  context,
}) => (
  <>
    <div className={clsx('AppHeader')}>

      {/*
        * AppHeader-globalBar
        * -----------------
        * The GitHub global bar contains the logo and user avatar, with
        * contextual navigation + actions
        */}
      <div className={clsx('AppHeader-globalBar')}>
        {/*
          * AppHeader-logo
          * -----------------
          * The GitHub interactive logo region
          */}
        <div className="AppHeader-logo">
          {/*
            * The button element can be focusable. Click event opens side sheet
            * with main global menu
            * */}
          <button aria-expanded="false" aria-haspopup="dialog" aria-label="Open main menu">
            <MarkGithubIcon />
          </button>

          {/*
            * The anchor element is not focusable, yet handles mouse pointer
            * events such as ctrl+click, middle click, right-click, for users to
            * handle the homepage URL when interacting with the website logo as
            * they're used to.
            * 
            * See https://codepen.io/team/GitHub/pen/OJQgyqo for interactive
            * example including the expected `mouseup` event listener.
            */}
          <a href="/" tabindex="-1" aria-hidden>GitHub homepage</a>
        </div>

        {/*
          * AppHeader-context
          * -----------------
          * Required region right after the GitHub logo. May be a breadcrumb or
          * page title, placed left-aligned.
          */}
        <div class="AppHeader-context">
          <nav aria-label=""></nav>
        </div>

        <a className="AppHeader-button" href="#">
          <BellIcon />
        </a>

        <a className="AppHeader-button" href="#">
          <PlusIcon />
        </a>

        {/*
          * AppHeader-user
          * --------------
          * Same as the AppHeader-logo structure, with button and anchor
          * elements working together to enable fully accessible interaction
          * with keyboard + mouse
          */}
        <div class="AppHeader-user">
          <button aria-expanded="false" aria-haspopup="dialog" aria-label="Open user menu">
            <img alt="@octocat" src="https://github.com/octocat.png" />
          </button>
          
          <a href="/octocat" tabindex="-1" aria-hidden>octocat profile</a>
        </div>
      </div>

      <div className={clsx('AppHeader-localBar')}>
        local
      </div>
    </div>

      {/* 
      <div className="Header-item">
        <a href="#" className="Header-logo">
          <svg height="32" className="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
        </a>
      </div>
      <div className="Header-item Header-item--full">
        menu
      </div>
      <div className="Header-item mr-0">
        <a href="#" className="Header-user">
          <img className="avatar" height="32" alt="@octocat" src="https://github.com/octocat.png" width="32" class="circle" />
        </a>
      </div> */}
  </>
)

export const Playground = AppHeaderTemplate.bind({})

Playground.args = {
  context: 'none'
};