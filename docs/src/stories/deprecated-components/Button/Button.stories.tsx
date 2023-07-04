import React from 'react'

export default {
  title: 'Deprecated/Button',
}

export const Default = () => {
  return (
    <>
      <button className="btn" type="button">
        Button
      </button>
    </>
  )
}

export const Primary = () => {
  return (
    <>
      <button className="btn btn-primary" type="button">
        Button
      </button>
    </>
  )
}

export const Outline = () => {
  return (
    <>
      <button className="btn btn-outline" type="button">
        Button
      </button>
    </>
  )
}

export const Danger = () => {
  return (
    <>
      <button className="btn btn-danger" type="button">
        Button
      </button>
    </>
  )
}

export const Link = () => {
  return (
    <>
      <button className="btn-link" type="button">
        Link button
      </button>
    </>
  )
}

export const Invisible = () => {
  return (
    <>
      <button className="btn btn-invisible" type="button">
        Cancel
      </button>
      <button className="btn" type="button">
        Submit
      </button>
    </>
  )
}

export const Selected = () => {
  return (
    <>
      <div className="BtnGroup d-block mb-2">
        <button className="BtnGroup-item btn" type="button">
          Button
        </button>
        <button className="BtnGroup-item btn" type="button" aria-selected="true">
          Button
        </button>
        <button className="BtnGroup-item btn btn-danger" type="button">
          Danger
        </button>
      </div>

      <div className="BtnGroup d-block mb-2 ml-0">
        <button className="BtnGroup-item btn btn-outline" type="button">
          Button
        </button>
        <button className="BtnGroup-item btn btn-outline" type="button" aria-selected="true">
          Button
        </button>
        <button className="BtnGroup-item btn btn-outline" type="button">
          Button
        </button>
      </div>
    </>
  )
}

export const Disabled = () => {
  return (
    <>
      <button className="btn mr-2" type="button" aria-disabled="true">
        Disabled
      </button>
      <button className="btn btn-primary mr-2" type="button" aria-disabled="true">
        Disabled
      </button>
      <button className="btn btn-outline mr-2" type="button" aria-disabled="true">
        Disabled
      </button>
      <button className="btn btn-danger" type="button" aria-disabled="true">
        Disabled
      </button>
    </>
  )
}

export const Sizes = () => {
  return (
    <>
      <button className="btn btn-sm mr-2" type="button">
        Small
      </button>
      <button className="btn mr-2" type="button">
        Default
      </button>
      <button className="btn btn-large" type="button">
        Large
      </button>
    </>
  )
}

export const Block = () => {
  return (
    <>
      <button className="btn btn-block mb-2" type="button">
        Block button
      </button>
      <button className="btn btn-sm btn-block" type="button">
        Small block button
      </button>
    </>
  )
}

export const HiddenText = () => {
  return (
    <>
      <span className="hidden-text-expander">
        <button type="button" className="ellipsis-expander" aria-expanded="false">
          &hellip;
        </button>
      </span>
    </>
  )
}

export const WithIcons = () => {
  return (
    <>
      <button className="btn mr-2" type="button">
        <svg className="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"
          ></path>
        </svg>
      </button>

      <button className="btn btn-primary mr-2" type="button">
        <svg className="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"
          ></path>
        </svg>
        <span>Clone</span>
        <span className="dropdown-caret"></span>
      </button>

      <button className="btn btn-danger mr-2" type="button">
        <svg className="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"
          ></path>
        </svg>
        <span>Delete</span>
      </button>

      <button className="btn btn-outline mr-2" type="button">
        <svg className="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.75 2.5h12.5a.25.25 0 01.25.25v7.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25v-7.5a.25.25 0 01.25-.25zM14.25 1H1.75A1.75 1.75 0 000 2.75v7.5C0 11.216.784 12 1.75 12h3.727c-.1 1.041-.52 1.872-1.292 2.757A.75.75 0 004.75 16h6.5a.75.75 0 00.565-1.243c-.772-.885-1.193-1.716-1.292-2.757h3.727A1.75 1.75 0 0016 10.25v-7.5A1.75 1.75 0 0014.25 1zM9.018 12H6.982a5.72 5.72 0 01-.765 2.5h3.566a5.72 5.72 0 01-.765-2.5z"
          ></path>
        </svg>
        <span>Open in Desktop</span>
      </button>

      <button className="btn" type="button" aria-label="Pencil icon">
        <svg className="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"
          ></path>
        </svg>
      </button>
    </>
  )
}

export const IconOnly = () => {
  return (
    <>
      <button className="btn-octicon" type="button" aria-label="Desktop icon">
        <svg className="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M1.75 2.5h12.5a.25.25 0 01.25.25v7.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25v-7.5a.25.25 0 01.25-.25zM14.25 1H1.75A1.75 1.75 0 000 2.75v7.5C0 11.216.784 12 1.75 12h3.727c-.1 1.041-.52 1.872-1.292 2.757A.75.75 0 004.75 16h6.5a.75.75 0 00.565-1.243c-.772-.885-1.193-1.716-1.292-2.757h3.727A1.75 1.75 0 0016 10.25v-7.5A1.75 1.75 0 0014.25 1zM9.018 12H6.982a5.72 5.72 0 01-.765 2.5h3.566a5.72 5.72 0 01-.765-2.5z"
          ></path>
        </svg>
      </button>

      <button className="btn-octicon" type="button" aria-label="Pencil icon">
        <svg className="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"
          ></path>
        </svg>
      </button>

      <button className="btn-octicon btn-octicon-danger" type="button" aria-label="Trashcan icon">
        <svg className="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"
          ></path>
        </svg>
      </button>

      <button className="btn-octicon" type="button" aria-label="Kebab icon">
        <svg className="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
        </svg>
      </button>
    </>
  )
}

export const CloseButton = () => {
  return (
    <>
      <button className="close-button" type="button">
        <svg className="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
          <path
            fill-rule="evenodd"
            d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
          ></path>
        </svg>
      </button>
    </>
  )
}

export const ButtonWithCounts = () => {
  return (
    <>
      <div className="mb-2">
        <a className="btn btn-sm btn-with-count" href="#url" role="button">
          <svg className="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
            <path
              fill-rule="evenodd"
              d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"
            ></path>
          </svg>
          <span>Watch</span>
        </a>
        <a className="social-count" href="#url">
          6
        </a>
      </div>
      <button className="btn mr-2" type="button">
        Button <span className="Counter">12</span>
      </button>

      <button className="btn btn-primary mr-2" type="button">
        Button <span className="Counter">12</span>
      </button>

      <button className="btn btn-danger mr-2" type="button">
        Button <span className="Counter">12</span>
      </button>

      <button className="btn btn-outline" type="button">
        Button <span className="Counter">12</span>
      </button>
    </>
  )
}
