import React from 'react'

export default {
  title: 'Deprecated/Toast',
}

export const Default = () => {
  return (
    <>
      <div className="p-1">
        <div className="Toast">
          <span className="Toast-icon">
            <svg width="14" height="16" viewBox="0 0 14 16" className="octicon octicon-info" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
              />
            </svg>
          </span>
          <span className="Toast-content">Toast message goes here</span>
        </div>
      </div>
    </>
  )
}

export const Success = () => {
  return (
    <>
      <div className="p-1">
        <div className="Toast Toast--success">
          <span className="Toast-icon">
            <svg width="12" height="16" viewBox="0 0 12 16" className="octicon octicon-check" aria-hidden="true">
              <path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
            </svg>
          </span>
          <span className="Toast-content">Success message goes here.</span>
        </div>
      </div>
    </>
  )
}

export const Alert = () => {
  return (
    <>
      <div className="p-1">
        <div className="Toast Toast--warning">
          <span className="Toast-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" className="octicon octicon-alert" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
              />
            </svg>
          </span>
          <span className="Toast-content">Warning message goes here.</span>
        </div>
      </div>
    </>
  )
}

export const Error = () => {
  return (
    <>
      <div className="p-1">
        <div className="Toast Toast--error">
          <span className="Toast-icon">
            <svg width="14" height="16" viewBox="0 0 14 16" className="octicon octicon-stop" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M10 1H4L0 5v6l4 4h6l4-4V5l-4-4zm3 9.5L9.5 14h-5L1 10.5v-5L4.5 2h5L13 5.5v5zM6 4h2v5H6V4zm0 6h2v2H6v-2z"
              />
            </svg>
          </span>
          <span className="Toast-content">Error message goes here</span>
        </div>
      </div>
    </>
  )
}

export const Dismiss = () => {
  return (
    <>
      <div className="p-1">
        <div className="Toast">
          <span className="Toast-icon">
            <svg width="14" height="16" viewBox="0 0 14 16" className="octicon octicon-info" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
              />
            </svg>
          </span>
          <span className="Toast-content">This toast is dismissable.</span>
          <button className="Toast-dismissButton">
            <svg width="12" height="16" viewBox="0 0 12 16" className="octicon octicon-x" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export const WithLink = () => {
  return (
    <>
      <div className="p-1">
        <div className="Toast">
          <span className="Toast-icon">
            <svg width="14" height="16" viewBox="0 0 14 16" className="octicon octicon-info" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
              />
            </svg>
          </span>
          <span className="Toast-content">
            Toast message goes here<a href="#">Action.</a>
          </span>
        </div>
      </div>
    </>
  )
}

export const AnimationIn = () => {
  return (
    <>
      <div className="p-1">
        <div className="Toast Toast--animateIn">
          <span className="Toast-icon">
            <svg width="14" height="16" viewBox="0 0 14 16" className="octicon octicon-info" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
              />
            </svg>
          </span>
          <span className="Toast-content">Toast message goes here.</span>
        </div>
      </div>
    </>
  )
}

export const Loading = () => {
  return (
    <>
      <div className="p-1">
        <div className="Toast Toast--loading">
          <span className="Toast-icon">
            <svg className="Toast--spinner" viewBox="0 0 32 32" width="18" height="18">
              <path
                fill="#959da5"
                d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"
              />
              <path fill="#ffffff" d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"></path>
            </svg>
          </span>
          <span className="Toast-content">Toast message goes here.</span>
        </div>
      </div>
    </>
  )
}
export const Position = () => {
  return (
    <>
      <div style={{height: '150px'}}>
        <div className="position-fixed bottom-0 left-0 mb-3 ml-3">
          <div className="Toast">
            <span className="Toast-icon">
              <svg width="14" height="16" viewBox="0 0 14 16" className="octicon octicon-info" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
                />
              </svg>
            </span>
            <span className="Toast-content">Toast message goes here.</span>
          </div>
        </div>
      </div>
    </>
  )
}
