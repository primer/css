import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Navigation', module)
  .add('UnderlineNav', () => (
    <nav className="UnderlineNav">
      <div className="UnderlineNav-items">
        <a href="#"
          className="UnderlineNav-item"
          role="tab"
          title="Overview">
          Overview
        </a>
        <a href="#"
          className="UnderlineNav-item selected"
          role="tab"
          title="Overview">
          Overview
        </a>
        <a href="#"
          className="UnderlineNav-item"
          role="tab"
          title="Overview">
          Overview
        </a>
        <a href="#"
          className="UnderlineNav-item"
          role="tab"
          title="Overview">
          Overview
        </a>
      </div>
    </nav>
  ))
  .add('UnderlineNav--right', () => (
    <nav className="UnderlineNav UnderlineNav--right">
      <div className="UnderlineNav-items">
        <a href="#"
          className="UnderlineNav-item"
          role="tab"
          title="Overview">
          Overview
        </a>
        <a href="#"
          className="UnderlineNav-item selected"
          role="tab"
          title="Overview">
          Overview
        </a>
        <a href="#"
          className="UnderlineNav-item"
          role="tab"
          title="Overview">
          Overview
        </a>
        <a href="#"
          className="UnderlineNav-item"
          role="tab"
          title="Overview">
          Overview
        </a>
      </div>
    </nav>
    ))
    .add('UnderlineNav with Counter', () => (
      <nav className="UnderlineNav" data-pjax role="navigation">
      <div className="UnderlineNav-items">
        <a href="#"
          className="UnderlineNav-item"
          role="tab"
          title="Overview">
          Overview
          <span className="Counter">
              10
           </span>
        </a>
        <a href="#"
          className="UnderlineNav-item selected"
          role="tab"
          title="Overview">
          Overview
        </a>
        <a href="#"
          className="UnderlineNav-item"
          role="tab"
          title="Overview">
          Overview
        </a>
        <a href="#"
          className="UnderlineNav-item"
          role="tab"
          title="Overview">
          Overview
        </a>
        </div>
      </nav>
    ))
  .add('UnderlineNav with octicon', () => (
    <nav className="UnderlineNav" data-pjax role="navigation">
    <div className="UnderlineNav-items">

      <a href="#"
        className="UnderlineNav-item selected"
        role="tab"
        title="Overview">
        <svg className="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
        Overview
      </a>
      <a href="#"
        className="UnderlineNav-item"
        role="tab"
        title="Overview">
        <svg className="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
        Overview
      </a>
      <a href="#"
        className="UnderlineNav-item"
        role="tab"
        title="Overview">
        <svg className="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
        Overview
      </a>
      <a href="#"
        className="UnderlineNav-item"
        role="tab"
        title="Overview">
        <svg className="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
        Overview
      </a>
      </div>
    </nav>
  ))
  .add('UnderlineNav with container', () => (
    <nav className="UnderlineNav UnderlineNav--full" data-pjax role="navigation">
      <div className="container-lg">
        <div className="UnderlineNav-items">
          <a href="#"
            className="UnderlineNav-item selected"
            role="tab"
            title="Overview">
            <svg className="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
            Overview
          </a>
          <a href="#"
            className="UnderlineNav-item"
            role="tab"
            title="Overview">
            <svg className="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
            Overview
          </a>
          <a href="#"
            className="UnderlineNav-item"
            role="tab"
            title="Overview">
            <svg className="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
            Overview
          </a>
          <a href="#"
            className="UnderlineNav-item"
            role="tab"
            title="Overview">
            <svg className="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
            Overview
          </a>
        </div>
        <a className="UnderlineNav-actions">Link</a>
      </div>
    </nav>
  ))
  .add('UnderlineNav with action', () => (
    <div className="container-lg">
    <nav className="UnderlineNav" data-pjax role="navigation">
        <div className="UnderlineNav-items">
          <a href="#"
            className="UnderlineNav-item selected"
            role="tab"
            title="Overview">
            <svg className="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
            Overview
          </a>
          <a href="#"
            className="UnderlineNav-item"
            role="tab"
            title="Overview">
            <svg className="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
            Overview
          </a>
          <a href="#"
            className="UnderlineNav-item"
            role="tab"
            title="Overview">
            <svg className="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
            Overview
          </a>
          <a href="#"
            className="UnderlineNav-item"
            role="tab"
            title="Overview">
            <svg className="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
            Overview
          </a>
        </div>
        <div className="UnderlineNav-actions">
          <a className="btn">Link</a>
        </div>

    </nav>
    </div>
  ))
  .add('UnderlineNav--right with action', () => (

    <nav className="UnderlineNav UnderlineNav--right" data-pjax role="navigation">
      <div className="UnderlineNav-actions">
        <a className="btn">Link</a>
      </div>
        <div className="UnderlineNav-items">
          <a href="#"
            className="UnderlineNav-item selected"
            role="tab"
            title="Overview">
            <svg className="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
            Overview
          </a>
          <a href="#"
            className="UnderlineNav-item"
            role="tab"
            title="Overview">
            <svg className="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
            Overview
          </a>
          <a href="#"
            className="UnderlineNav-item"
            role="tab"
            title="Overview">
            <svg className="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
            Overview
          </a>
          <a href="#"
            className="UnderlineNav-item"
            role="tab"
            title="Overview">
            <svg className="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
            Overview
          </a>
        </div>


    </nav>

  ))
  .add('UnderlineNav--right with action and container', () => (

    <nav className="UnderlineNav UnderlineNav--right UnderlineNav--full" data-pjax role="navigation">
      <div className="container-lg">
        <div className="UnderlineNav-actions">
          <a className="btn">Link</a>
        </div>
        <div className="UnderlineNav-items">
          <a href="#"
            className="UnderlineNav-item selected"
            role="tab"
            title="Overview">
            <svg className="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
            Overview
          </a>
          <a href="#"
            className="UnderlineNav-item"
            role="tab"
            title="Overview">
            <svg className="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
            Overview
          </a>
          <a href="#"
            className="UnderlineNav-item"
            role="tab"
            title="Overview">
            <svg className="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
            Overview
          </a>
          <a href="#"
            className="UnderlineNav-item"
            role="tab"
            title="Overview">
            <svg className="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
            Overview
          </a>
        </div>
      </div>
    </nav>

  ))
