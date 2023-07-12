import React from 'react'

export default {
  title: 'Deprecated/SelectMenu',
}

export const Default = () => {
  return (
    <>
      <details className="details-reset details-overlay" open>
        <summary className="btn" aria-haspopup="true">
          Choose an item
        </summary>
        <div className="SelectMenu">
          <div className="SelectMenu-modal">
            <div className="SelectMenu-list">
              <button className="SelectMenu-item" role="menuitem">
                Item 1
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 2
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 3
              </button>
            </div>
          </div>
        </div>
      </details>

      <div className="d-sm-none" style={{height: '600px'}}></div>
      <div className="d-none d-sm-block" style={{height: '120px'}}></div>
    </>
  )
}

export const RightAligned = () => {
  return (
    <>
      <div className="d-flex flex-justify-end position-relative">
        <details className="details-reset details-overlay" open>
          <summary className="btn" aria-haspopup="true">
            Choose an item
          </summary>
          <div className="SelectMenu right-0">
            <div className="SelectMenu-modal">
              <div className="SelectMenu-list">
                <button className="SelectMenu-item" role="menuitem">
                  Item 1
                </button>
                <button className="SelectMenu-item" role="menuitem">
                  Item 2
                </button>
                <button className="SelectMenu-item" role="menuitem">
                  Item 3
                </button>
              </div>
            </div>
          </div>
        </details>
      </div>

      <div className="d-sm-none" style={{height: '600px'}}></div>
      <div className="d-none d-sm-block" style={{height: '180px'}}></div>
    </>
  )
}

export const SelectedState = () => {
  return (
    <>
      <details className="details-reset details-overlay" open>
        <summary className="btn" aria-haspopup="true">
          Choose an item
        </summary>
        <div className="SelectMenu">
          <div className="SelectMenu-modal">
            <div className="SelectMenu-list">
              <button className="SelectMenu-item" role="menuitemcheckbox" aria-checked="true">
                <svg
                  className="SelectMenu-icon SelectMenu-icon--check octicon octicon-check"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  {' '}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.78 4.22C13.9204 4.36062 13.9993 4.55125 13.9993 4.75C13.9993 4.94875 13.9204 5.13937 13.78 5.28L6.53 12.53C6.38937 12.6704 6.19875 12.7493 6 12.7493C5.80125 12.7493 5.61062 12.6704 5.47 12.53L2.22 9.28C2.08752 9.13782 2.0154 8.94978 2.01882 8.75547C2.02225 8.56117 2.10096 8.37579 2.23838 8.23837C2.37579 8.10096 2.56118 8.02225 2.75548 8.01882C2.94978 8.01539 3.13782 8.08752 3.28 8.22L6 10.94L12.72 4.22C12.8606 4.07955 13.0512 4.00066 13.25 4.00066C13.4487 4.00066 13.6394 4.07955 13.78 4.22Z"
                  ></path>
                </svg>
                Selected state
              </button>
              <button className="SelectMenu-item" role="menuitemcheckbox">
                <svg
                  className="SelectMenu-icon SelectMenu-icon--check octicon octicon-check"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  {' '}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.78 4.22C13.9204 4.36062 13.9993 4.55125 13.9993 4.75C13.9993 4.94875 13.9204 5.13937 13.78 5.28L6.53 12.53C6.38937 12.6704 6.19875 12.7493 6 12.7493C5.80125 12.7493 5.61062 12.6704 5.47 12.53L2.22 9.28C2.08752 9.13782 2.0154 8.94978 2.01882 8.75547C2.02225 8.56117 2.10096 8.37579 2.23838 8.23837C2.37579 8.10096 2.56118 8.02225 2.75548 8.01882C2.94978 8.01539 3.13782 8.08752 3.28 8.22L6 10.94L12.72 4.22C12.8606 4.07955 13.0512 4.00066 13.25 4.00066C13.4487 4.00066 13.6394 4.07955 13.78 4.22Z"
                  ></path>
                </svg>
                Default state
              </button>
              <button className="SelectMenu-item" role="menuitemcheckbox" aria-checked="true">
                <svg
                  className="SelectMenu-icon SelectMenu-icon--check octicon octicon-check"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  {' '}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.78 4.22C13.9204 4.36062 13.9993 4.55125 13.9993 4.75C13.9993 4.94875 13.9204 5.13937 13.78 5.28L6.53 12.53C6.38937 12.6704 6.19875 12.7493 6 12.7493C5.80125 12.7493 5.61062 12.6704 5.47 12.53L2.22 9.28C2.08752 9.13782 2.0154 8.94978 2.01882 8.75547C2.02225 8.56117 2.10096 8.37579 2.23838 8.23837C2.37579 8.10096 2.56118 8.02225 2.75548 8.01882C2.94978 8.01539 3.13782 8.08752 3.28 8.22L6 10.94L12.72 4.22C12.8606 4.07955 13.0512 4.00066 13.25 4.00066C13.4487 4.00066 13.6394 4.07955 13.78 4.22Z"
                  ></path>
                </svg>
                Selected state
              </button>
              <button className="SelectMenu-item" role="menuitemcheckbox">
                <svg
                  className="SelectMenu-icon SelectMenu-icon--check octicon octicon-check"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  {' '}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.78 4.22C13.9204 4.36062 13.9993 4.55125 13.9993 4.75C13.9993 4.94875 13.9204 5.13937 13.78 5.28L6.53 12.53C6.38937 12.6704 6.19875 12.7493 6 12.7493C5.80125 12.7493 5.61062 12.6704 5.47 12.53L2.22 9.28C2.08752 9.13782 2.0154 8.94978 2.01882 8.75547C2.02225 8.56117 2.10096 8.37579 2.23838 8.23837C2.37579 8.10096 2.56118 8.02225 2.75548 8.01882C2.94978 8.01539 3.13782 8.08752 3.28 8.22L6 10.94L12.72 4.22C12.8606 4.07955 13.0512 4.00066 13.25 4.00066C13.4487 4.00066 13.6394 4.07955 13.78 4.22Z"
                  ></path>
                </svg>
                Default state
              </button>
              <button className="SelectMenu-item" role="menuitemcheckbox">
                <svg
                  className="SelectMenu-icon SelectMenu-icon--check octicon octicon-check"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  {' '}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.78 4.22C13.9204 4.36062 13.9993 4.55125 13.9993 4.75C13.9993 4.94875 13.9204 5.13937 13.78 5.28L6.53 12.53C6.38937 12.6704 6.19875 12.7493 6 12.7493C5.80125 12.7493 5.61062 12.6704 5.47 12.53L2.22 9.28C2.08752 9.13782 2.0154 8.94978 2.01882 8.75547C2.02225 8.56117 2.10096 8.37579 2.23838 8.23837C2.37579 8.10096 2.56118 8.02225 2.75548 8.01882C2.94978 8.01539 3.13782 8.08752 3.28 8.22L6 10.94L12.72 4.22C12.8606 4.07955 13.0512 4.00066 13.25 4.00066C13.4487 4.00066 13.6394 4.07955 13.78 4.22Z"
                  ></path>
                </svg>
                Default state
              </button>
            </div>
          </div>
        </div>
      </details>

      <div className="d-sm-none" style={{height: '600px'}}></div>
      <div className="d-none d-sm-block" style={{height: '180px'}}></div>
    </>
  )
}

export const Borderless = () => {
  return (
    <>
      <details className="details-reset details-overlay" open>
        <summary className="btn" aria-haspopup="true">
          Choose an item
        </summary>
        <div className="SelectMenu">
          <div className="SelectMenu-modal">
            <div className="SelectMenu-list SelectMenu-list--borderless">
              <button className="SelectMenu-item" role="menuitem">
                Item 1
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 2
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 3
              </button>
            </div>
          </div>
        </div>
      </details>

      <div className="d-sm-none" style={{height: '600px'}}></div>
      <div className="d-none d-sm-block" style={{height: '180px'}}></div>
    </>
  )
}

export const Header = () => {
  return (
    <>
      <details className="details-reset details-overlay" open>
        <summary className="btn" aria-haspopup="true">
          Choose an item
        </summary>
        <div className="SelectMenu">
          <div className="SelectMenu-modal">
            <header className="SelectMenu-header">
              <h3 className="SelectMenu-title">Title</h3>
              <button className="SelectMenu-closeButton" type="button">
                <svg
                  className="octicon octicon-x"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  {' '}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.72 3.72C3.86062 3.57955 4.05125 3.50066 4.25 3.50066C4.44875 3.50066 4.63937 3.57955 4.78 3.72L8 6.94L11.22 3.72C11.2887 3.64631 11.3715 3.58721 11.4635 3.54622C11.5555 3.50523 11.6548 3.48319 11.7555 3.48141C11.8562 3.47963 11.9562 3.49816 12.0496 3.53588C12.143 3.5736 12.2278 3.62974 12.299 3.70096C12.3703 3.77218 12.4264 3.85702 12.4641 3.9504C12.5018 4.04379 12.5204 4.14382 12.5186 4.24452C12.5168 4.34523 12.4948 4.44454 12.4538 4.53654C12.4128 4.62854 12.3537 4.71134 12.28 4.78L9.06 8L12.28 11.22C12.3537 11.2887 12.4128 11.3715 12.4538 11.4635C12.4948 11.5555 12.5168 11.6548 12.5186 11.7555C12.5204 11.8562 12.5018 11.9562 12.4641 12.0496C12.4264 12.143 12.3703 12.2278 12.299 12.299C12.2278 12.3703 12.143 12.4264 12.0496 12.4641C11.9562 12.5018 11.8562 12.5204 11.7555 12.5186C11.6548 12.5168 11.5555 12.4948 11.4635 12.4538C11.3715 12.4128 11.2887 12.3537 11.22 12.28L8 9.06L4.78 12.28C4.63782 12.4125 4.44977 12.4846 4.25547 12.4812C4.06117 12.4777 3.87579 12.399 3.73837 12.2616C3.60096 12.1242 3.52225 11.9388 3.51882 11.7445C3.51539 11.5502 3.58752 11.3622 3.72 11.22L6.94 8L3.72 4.78C3.57955 4.63938 3.50066 4.44875 3.50066 4.25C3.50066 4.05125 3.57955 3.86063 3.72 3.72Z"
                  ></path>
                </svg>
              </button>
            </header>
            <div className="SelectMenu-list">
              <button className="SelectMenu-item" role="menuitem">
                Item 1
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 2
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 3
              </button>
            </div>
          </div>
        </div>
      </details>

      <div className="d-sm-none" style={{height: '600px'}}></div>
      <div className="d-none d-sm-block" style={{height: '180px'}}></div>
    </>
  )
}

export const ListItems = () => {
  return (
    <>
      <details className="details-reset details-overlay" open>
        <summary className="btn" aria-haspopup="true">
          Choose an item
        </summary>
        <div className="SelectMenu">
          <div className="SelectMenu-modal">
            <header className="SelectMenu-header">
              <h3 className="SelectMenu-title">Title</h3>
              <button className="SelectMenu-closeButton" type="button">
                <svg
                  className="octicon octicon-x"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  {' '}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.72 3.72C3.86062 3.57955 4.05125 3.50066 4.25 3.50066C4.44875 3.50066 4.63937 3.57955 4.78 3.72L8 6.94L11.22 3.72C11.2887 3.64631 11.3715 3.58721 11.4635 3.54622C11.5555 3.50523 11.6548 3.48319 11.7555 3.48141C11.8562 3.47963 11.9562 3.49816 12.0496 3.53588C12.143 3.5736 12.2278 3.62974 12.299 3.70096C12.3703 3.77218 12.4264 3.85702 12.4641 3.9504C12.5018 4.04379 12.5204 4.14382 12.5186 4.24452C12.5168 4.34523 12.4948 4.44454 12.4538 4.53654C12.4128 4.62854 12.3537 4.71134 12.28 4.78L9.06 8L12.28 11.22C12.3537 11.2887 12.4128 11.3715 12.4538 11.4635C12.4948 11.5555 12.5168 11.6548 12.5186 11.7555C12.5204 11.8562 12.5018 11.9562 12.4641 12.0496C12.4264 12.143 12.3703 12.2278 12.299 12.299C12.2278 12.3703 12.143 12.4264 12.0496 12.4641C11.9562 12.5018 11.8562 12.5204 11.7555 12.5186C11.6548 12.5168 11.5555 12.4948 11.4635 12.4538C11.3715 12.4128 11.2887 12.3537 11.22 12.28L8 9.06L4.78 12.28C4.63782 12.4125 4.44977 12.4846 4.25547 12.4812C4.06117 12.4777 3.87579 12.399 3.73837 12.2616C3.60096 12.1242 3.52225 11.9388 3.51882 11.7445C3.51539 11.5502 3.58752 11.3622 3.72 11.22L6.94 8L3.72 4.78C3.57955 4.63938 3.50066 4.44875 3.50066 4.25C3.50066 4.05125 3.57955 3.86063 3.72 3.72Z"
                  ></path>
                </svg>
              </button>
            </header>
            <div className="SelectMenu-list">
              <button className="SelectMenu-item" role="menuitem">
                Text only
                <svg
                  className="SelectMenu-icon octicon octicon-pin"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 1.2V2l.5 1L6 6H2.2c-.44 0-.67.53-.34.86L5 10l-4 5 5-4 3.14 3.14a.5.5 0 00.86-.34V10l3-4.5 1 .5h.8c.44 0 .67-.53.34-.86L10.86.86a.5.5 0 00-.86.34z"
                  ></path>
                </svg>
                With an icon
              </button>
              <button className="SelectMenu-item" role="menuitem">
                <img
                  className="avatar avatar-small mr-2"
                  src="https://avatars.githubusercontent.com/hubot?s=40"
                  alt="hubot"
                  height="20"
                  width="20"
                />
                With an avatar
              </button>
              <button className="SelectMenu-item flex-justify-between" role="menuitem">
                With a status icon
                <svg
                  width="8"
                  height="16"
                  viewBox="0 0 8 16"
                  className="octicon octicon-primitive-dot color-green-5 ml-2"
                  aria-hidden="true"
                >
                  <path fill-rule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
                </svg>
              </button>
              <button className="SelectMenu-item d-block" role="menuitem">
                With a <span className="Label">label</span>
              </button>
              <button className="SelectMenu-item" role="menuitem">
                With a counter <span className="Counter ml-1">16</span>
              </button>
              <button className="SelectMenu-item d-block" role="menuitem">
                <h5>With a heading</h5>
                <span>and some longer description</span>
              </button>
            </div>
          </div>
        </div>
      </details>

      <div className="d-sm-none" style={{height: '600px'}}></div>
      <div className="d-none d-sm-block" style={{height: '180px'}}></div>
    </>
  )
}

export const Divider = () => {
  return (
    <>
      <details className="details-reset details-overlay" open>
        <summary className="btn" aria-haspopup="true">
          Choose an item
        </summary>
        <div className="SelectMenu">
          <div className="SelectMenu-modal">
            <header className="SelectMenu-header">
              <h3 className="SelectMenu-title">Title</h3>
              <button className="SelectMenu-closeButton" type="button">
                <svg
                  className="octicon octicon-x"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.72 3.72C3.86062 3.57955 4.05125 3.50066 4.25 3.50066C4.44875 3.50066 4.63937 3.57955 4.78 3.72L8 6.94L11.22 3.72C11.2887 3.64631 11.3715 3.58721 11.4635 3.54622C11.5555 3.50523 11.6548 3.48319 11.7555 3.48141C11.8562 3.47963 11.9562 3.49816 12.0496 3.53588C12.143 3.5736 12.2278 3.62974 12.299 3.70096C12.3703 3.77218 12.4264 3.85702 12.4641 3.9504C12.5018 4.04379 12.5204 4.14382 12.5186 4.24452C12.5168 4.34523 12.4948 4.44454 12.4538 4.53654C12.4128 4.62854 12.3537 4.71134 12.28 4.78L9.06 8L12.28 11.22C12.3537 11.2887 12.4128 11.3715 12.4538 11.4635C12.4948 11.5555 12.5168 11.6548 12.5186 11.7555C12.5204 11.8562 12.5018 11.9562 12.4641 12.0496C12.4264 12.143 12.3703 12.2278 12.299 12.299C12.2278 12.3703 12.143 12.4264 12.0496 12.4641C11.9562 12.5018 11.8562 12.5204 11.7555 12.5186C11.6548 12.5168 11.5555 12.4948 11.4635 12.4538C11.3715 12.4128 11.2887 12.3537 11.22 12.28L8 9.06L4.78 12.28C4.63782 12.4125 4.44977 12.4846 4.25547 12.4812C4.06117 12.4777 3.87579 12.399 3.73837 12.2616C3.60096 12.1242 3.52225 11.9388 3.51882 11.7445C3.51539 11.5502 3.58752 11.3622 3.72 11.22L6.94 8L3.72 4.78C3.57955 4.63938 3.50066 4.44875 3.50066 4.25C3.50066 4.05125 3.57955 3.86063 3.72 3.72Z"
                  ></path>
                </svg>
              </button>
            </header>
            <div className="SelectMenu-list">
              <button className="SelectMenu-item" role="menuitem">
                Item 1
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 2
              </button>
              <div className="SelectMenu-divider">More options</div>
              <button className="SelectMenu-item" role="menuitem">
                Item 3
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 4
              </button>
              <hr className="SelectMenu-divider" />
              <button className="SelectMenu-item" role="menuitem">
                Item 5
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 6
              </button>
            </div>
          </div>
        </div>
      </details>

      <div className="d-sm-none" style={{height: '600px'}}></div>
      <div className="d-none d-sm-block" style={{height: '180px'}}></div>
    </>
  )
}

export const Footer = () => {
  return (
    <>
      <details className="details-reset details-overlay" open>
        <summary className="btn" aria-haspopup="true">
          Choose an item
        </summary>
        <div className="SelectMenu">
          <div className="SelectMenu-modal">
            <header className="SelectMenu-header">
              <h3 className="SelectMenu-title">Title</h3>
              <button className="SelectMenu-closeButton" type="button">
                <svg
                  className="octicon octicon-x"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  {' '}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.72 3.72C3.86062 3.57955 4.05125 3.50066 4.25 3.50066C4.44875 3.50066 4.63937 3.57955 4.78 3.72L8 6.94L11.22 3.72C11.2887 3.64631 11.3715 3.58721 11.4635 3.54622C11.5555 3.50523 11.6548 3.48319 11.7555 3.48141C11.8562 3.47963 11.9562 3.49816 12.0496 3.53588C12.143 3.5736 12.2278 3.62974 12.299 3.70096C12.3703 3.77218 12.4264 3.85702 12.4641 3.9504C12.5018 4.04379 12.5204 4.14382 12.5186 4.24452C12.5168 4.34523 12.4948 4.44454 12.4538 4.53654C12.4128 4.62854 12.3537 4.71134 12.28 4.78L9.06 8L12.28 11.22C12.3537 11.2887 12.4128 11.3715 12.4538 11.4635C12.4948 11.5555 12.5168 11.6548 12.5186 11.7555C12.5204 11.8562 12.5018 11.9562 12.4641 12.0496C12.4264 12.143 12.3703 12.2278 12.299 12.299C12.2278 12.3703 12.143 12.4264 12.0496 12.4641C11.9562 12.5018 11.8562 12.5204 11.7555 12.5186C11.6548 12.5168 11.5555 12.4948 11.4635 12.4538C11.3715 12.4128 11.2887 12.3537 11.22 12.28L8 9.06L4.78 12.28C4.63782 12.4125 4.44977 12.4846 4.25547 12.4812C4.06117 12.4777 3.87579 12.399 3.73837 12.2616C3.60096 12.1242 3.52225 11.9388 3.51882 11.7445C3.51539 11.5502 3.58752 11.3622 3.72 11.22L6.94 8L3.72 4.78C3.57955 4.63938 3.50066 4.44875 3.50066 4.25C3.50066 4.05125 3.57955 3.86063 3.72 3.72Z"
                  ></path>
                </svg>
              </button>
            </header>
            <div className="SelectMenu-list">
              <button className="SelectMenu-item" role="menuitem">
                Item 1
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 2
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 3
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 4
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 5
              </button>
            </div>
            <footer className="SelectMenu-footer">Footer</footer>
          </div>
        </div>
      </details>

      <div className="d-sm-none" style={{height: '600px'}}></div>
      <div className="d-none d-sm-block" style={{height: '180px'}}></div>
    </>
  )
}

export const Filter = () => {
  return (
    <>
      <details className="details-reset details-overlay" open>
        <summary className="btn" aria-haspopup="true">
          Choose an item
        </summary>
        <div className="SelectMenu SelectMenu--hasFilter">
          <div className="SelectMenu-modal">
            <header className="SelectMenu-header">
              <h3 className="SelectMenu-title">Title</h3>
              <button className="SelectMenu-closeButton" type="button">
                <svg
                  className="octicon octicon-x"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  {' '}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.72 3.72C3.86062 3.57955 4.05125 3.50066 4.25 3.50066C4.44875 3.50066 4.63937 3.57955 4.78 3.72L8 6.94L11.22 3.72C11.2887 3.64631 11.3715 3.58721 11.4635 3.54622C11.5555 3.50523 11.6548 3.48319 11.7555 3.48141C11.8562 3.47963 11.9562 3.49816 12.0496 3.53588C12.143 3.5736 12.2278 3.62974 12.299 3.70096C12.3703 3.77218 12.4264 3.85702 12.4641 3.9504C12.5018 4.04379 12.5204 4.14382 12.5186 4.24452C12.5168 4.34523 12.4948 4.44454 12.4538 4.53654C12.4128 4.62854 12.3537 4.71134 12.28 4.78L9.06 8L12.28 11.22C12.3537 11.2887 12.4128 11.3715 12.4538 11.4635C12.4948 11.5555 12.5168 11.6548 12.5186 11.7555C12.5204 11.8562 12.5018 11.9562 12.4641 12.0496C12.4264 12.143 12.3703 12.2278 12.299 12.299C12.2278 12.3703 12.143 12.4264 12.0496 12.4641C11.9562 12.5018 11.8562 12.5204 11.7555 12.5186C11.6548 12.5168 11.5555 12.4948 11.4635 12.4538C11.3715 12.4128 11.2887 12.3537 11.22 12.28L8 9.06L4.78 12.28C4.63782 12.4125 4.44977 12.4846 4.25547 12.4812C4.06117 12.4777 3.87579 12.399 3.73837 12.2616C3.60096 12.1242 3.52225 11.9388 3.51882 11.7445C3.51539 11.5502 3.58752 11.3622 3.72 11.22L6.94 8L3.72 4.78C3.57955 4.63938 3.50066 4.44875 3.50066 4.25C3.50066 4.05125 3.57955 3.86063 3.72 3.72Z"
                  ></path>
                </svg>
              </button>
            </header>
            <form className="SelectMenu-filter">
              <input className="SelectMenu-input form-control" type="text" placeholder="Filter" aria-label="Filter" />
            </form>
            <div className="SelectMenu-list">
              <button className="SelectMenu-item" role="menuitem">
                Item 1
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 2
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 3
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 4
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 5
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 6
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 7
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 8
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 9
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 10
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 11
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 12
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 13
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 14
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 15
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 16
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 17
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 18
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 19
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 20
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 21
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 22
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 23
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 24
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 25
              </button>
            </div>
            <footer className="SelectMenu-footer">Showing 25 of 25</footer>
          </div>
        </div>
      </details>

      <div className="d-sm-none" style={{height: '600px'}}></div>
      <div className="d-none d-sm-block" style={{height: '180px'}}></div>
    </>
  )
}

export const Tabs = () => {
  return (
    <>
      <details className="details-reset details-overlay" open>
        <summary className="btn" aria-haspopup="true">
          Choose an item
        </summary>
        <div className="SelectMenu SelectMenu--hasFilter">
          <div className="SelectMenu-modal">
            <header className="SelectMenu-header">
              <h3 className="SelectMenu-title">Title</h3>
              <button className="SelectMenu-closeButton" type="button">
                <svg
                  className="octicon octicon-x"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  {' '}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.72 3.72C3.86062 3.57955 4.05125 3.50066 4.25 3.50066C4.44875 3.50066 4.63937 3.57955 4.78 3.72L8 6.94L11.22 3.72C11.2887 3.64631 11.3715 3.58721 11.4635 3.54622C11.5555 3.50523 11.6548 3.48319 11.7555 3.48141C11.8562 3.47963 11.9562 3.49816 12.0496 3.53588C12.143 3.5736 12.2278 3.62974 12.299 3.70096C12.3703 3.77218 12.4264 3.85702 12.4641 3.9504C12.5018 4.04379 12.5204 4.14382 12.5186 4.24452C12.5168 4.34523 12.4948 4.44454 12.4538 4.53654C12.4128 4.62854 12.3537 4.71134 12.28 4.78L9.06 8L12.28 11.22C12.3537 11.2887 12.4128 11.3715 12.4538 11.4635C12.4948 11.5555 12.5168 11.6548 12.5186 11.7555C12.5204 11.8562 12.5018 11.9562 12.4641 12.0496C12.4264 12.143 12.3703 12.2278 12.299 12.299C12.2278 12.3703 12.143 12.4264 12.0496 12.4641C11.9562 12.5018 11.8562 12.5204 11.7555 12.5186C11.6548 12.5168 11.5555 12.4948 11.4635 12.4538C11.3715 12.4128 11.2887 12.3537 11.22 12.28L8 9.06L4.78 12.28C4.63782 12.4125 4.44977 12.4846 4.25547 12.4812C4.06117 12.4777 3.87579 12.399 3.73837 12.2616C3.60096 12.1242 3.52225 11.9388 3.51882 11.7445C3.51539 11.5502 3.58752 11.3622 3.72 11.22L6.94 8L3.72 4.78C3.57955 4.63938 3.50066 4.44875 3.50066 4.25C3.50066 4.05125 3.57955 3.86063 3.72 3.72Z"
                  ></path>
                </svg>
              </button>
            </header>
            <form className="SelectMenu-filter">
              <input className="SelectMenu-input form-control" type="text" placeholder="Filter" aria-label="Filter" />
            </form>
            <nav className="SelectMenu-tabs">
              <button className="SelectMenu-tab" aria-selected="true">
                Branches
              </button>
              <button className="SelectMenu-tab">Tags</button>
            </nav>
            <div className="SelectMenu-list">
              <button className="SelectMenu-item" role="menuitem">
                Branch 1
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Branch 2
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Branch 3
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Branch 4
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Branch 5
              </button>
            </div>
            <div className="SelectMenu-list" hidden>
              <button className="SelectMenu-item" role="menuitem">
                Tag 1
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Tag 2
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Tag 3
              </button>
            </div>
            <footer className="SelectMenu-footer">Showing 5 of 5</footer>
          </div>
        </div>
      </details>
      <div className="d-sm-none" style={{height: '600px'}}></div>
      <div className="d-none d-sm-block" style={{height: '180px'}}></div>
    </>
  )
}

export const Message = () => {
  return (
    <>
      <details className="details-reset details-overlay" open>
        <summary className="btn" aria-haspopup="true">
          Choose an item
        </summary>
        <div className="SelectMenu">
          <div className="SelectMenu-modal">
            <header className="SelectMenu-header">
              <h3 className="SelectMenu-title">Title</h3>
              <button className="SelectMenu-closeButton" type="button">
                <svg
                  className="octicon octicon-x"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  {' '}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.72 3.72C3.86062 3.57955 4.05125 3.50066 4.25 3.50066C4.44875 3.50066 4.63937 3.57955 4.78 3.72L8 6.94L11.22 3.72C11.2887 3.64631 11.3715 3.58721 11.4635 3.54622C11.5555 3.50523 11.6548 3.48319 11.7555 3.48141C11.8562 3.47963 11.9562 3.49816 12.0496 3.53588C12.143 3.5736 12.2278 3.62974 12.299 3.70096C12.3703 3.77218 12.4264 3.85702 12.4641 3.9504C12.5018 4.04379 12.5204 4.14382 12.5186 4.24452C12.5168 4.34523 12.4948 4.44454 12.4538 4.53654C12.4128 4.62854 12.3537 4.71134 12.28 4.78L9.06 8L12.28 11.22C12.3537 11.2887 12.4128 11.3715 12.4538 11.4635C12.4948 11.5555 12.5168 11.6548 12.5186 11.7555C12.5204 11.8562 12.5018 11.9562 12.4641 12.0496C12.4264 12.143 12.3703 12.2278 12.299 12.299C12.2278 12.3703 12.143 12.4264 12.0496 12.4641C11.9562 12.5018 11.8562 12.5204 11.7555 12.5186C11.6548 12.5168 11.5555 12.4948 11.4635 12.4538C11.3715 12.4128 11.2887 12.3537 11.22 12.28L8 9.06L4.78 12.28C4.63782 12.4125 4.44977 12.4846 4.25547 12.4812C4.06117 12.4777 3.87579 12.399 3.73837 12.2616C3.60096 12.1242 3.52225 11.9388 3.51882 11.7445C3.51539 11.5502 3.58752 11.3622 3.72 11.22L6.94 8L3.72 4.78C3.57955 4.63938 3.50066 4.44875 3.50066 4.25C3.50066 4.05125 3.57955 3.86063 3.72 3.72Z"
                  ></path>
                </svg>
              </button>
            </header>
            <div className="SelectMenu-list">
              <div className="SelectMenu-message color-bg-danger color-fg-danger">Message goes here</div>
              <button className="SelectMenu-item" role="menuitem">
                Item 1
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 2
              </button>
              <button className="SelectMenu-item" role="menuitem">
                Item 3
              </button>
            </div>
          </div>
        </div>
      </details>
      <div className="d-sm-none" style={{height: '600px'}}></div>
      <div className="d-none d-sm-block" style={{height: '180px'}}></div>
    </>
  )
}

export const Loading = () => {
  return (
    <>
      <details className="details-reset details-overlay" open>
        <summary className="btn" aria-haspopup="true">
          Choose an item
        </summary>
        <div className="SelectMenu">
          <div className="SelectMenu-modal">
            <header className="SelectMenu-header">
              <h3 className="SelectMenu-title">Title</h3>
              <button className="SelectMenu-closeButton" type="button">
                <svg
                  className="octicon octicon-x"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  {' '}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.72 3.72C3.86062 3.57955 4.05125 3.50066 4.25 3.50066C4.44875 3.50066 4.63937 3.57955 4.78 3.72L8 6.94L11.22 3.72C11.2887 3.64631 11.3715 3.58721 11.4635 3.54622C11.5555 3.50523 11.6548 3.48319 11.7555 3.48141C11.8562 3.47963 11.9562 3.49816 12.0496 3.53588C12.143 3.5736 12.2278 3.62974 12.299 3.70096C12.3703 3.77218 12.4264 3.85702 12.4641 3.9504C12.5018 4.04379 12.5204 4.14382 12.5186 4.24452C12.5168 4.34523 12.4948 4.44454 12.4538 4.53654C12.4128 4.62854 12.3537 4.71134 12.28 4.78L9.06 8L12.28 11.22C12.3537 11.2887 12.4128 11.3715 12.4538 11.4635C12.4948 11.5555 12.5168 11.6548 12.5186 11.7555C12.5204 11.8562 12.5018 11.9562 12.4641 12.0496C12.4264 12.143 12.3703 12.2278 12.299 12.299C12.2278 12.3703 12.143 12.4264 12.0496 12.4641C11.9562 12.5018 11.8562 12.5204 11.7555 12.5186C11.6548 12.5168 11.5555 12.4948 11.4635 12.4538C11.3715 12.4128 11.2887 12.3537 11.22 12.28L8 9.06L4.78 12.28C4.63782 12.4125 4.44977 12.4846 4.25547 12.4812C4.06117 12.4777 3.87579 12.399 3.73837 12.2616C3.60096 12.1242 3.52225 11.9388 3.51882 11.7445C3.51539 11.5502 3.58752 11.3622 3.72 11.22L6.94 8L3.72 4.78C3.57955 4.63938 3.50066 4.44875 3.50066 4.25C3.50066 4.05125 3.57955 3.86063 3.72 3.72Z"
                  ></path>
                </svg>
              </button>
            </header>
            <div className="SelectMenu-list">
              <div className="SelectMenu-loading">
                <svg
                  width="32 "
                  height="32"
                  viewBox="0 0 16 16"
                  className="octicon octicon-octoface anim-pulse"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"
                  />
                </svg>
              </div>
            </div>
            <footer className="SelectMenu-footer">Loading...</footer>
          </div>
        </div>
      </details>
      <div className="d-sm-none" style={{height: '600px'}}></div>
      <div className="d-none d-sm-block" style={{height: '180px'}}></div>
    </>
  )
}

export const Disabled = () => {
  return (
    <>
      <details className="details-reset details-overlay" open>
        <summary className="btn" aria-haspopup="true">
          Choose an item
        </summary>
        <div className="SelectMenu">
          <div className="SelectMenu-modal">
            <div className="SelectMenu-list">
              <button className="SelectMenu-item" role="menuitem">
                Item 1
              </button>
              <button className="SelectMenu-item" role="menuitem" disabled>
                Item 2 (disabled)
              </button>
              <a className="SelectMenu-item" role="menuitem" href="#">
                Item 3
              </a>
              <a className="SelectMenu-item" role="menuitem" aria-disabled="true">
                Item 4 (disabled)
              </a>
            </div>
          </div>
        </div>
      </details>
      <div className="d-sm-none" style={{height: '600px'}}></div>
      <div className="d-none d-sm-block" style={{height: '180px'}}></div>
    </>
  )
}

export const BlankSlate = () => {
  return (
    <>
      <details className="details-reset details-overlay" open>
        <summary className="btn" aria-haspopup="true">
          Choose an item
        </summary>
        <div className="SelectMenu">
          <div className="SelectMenu-modal">
            <header className="SelectMenu-header">
              <h3 className="SelectMenu-title">Title</h3>
              <button className="SelectMenu-closeButton" type="button">
                <svg
                  className="octicon octicon-x"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  {' '}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.72 3.72C3.86062 3.57955 4.05125 3.50066 4.25 3.50066C4.44875 3.50066 4.63937 3.57955 4.78 3.72L8 6.94L11.22 3.72C11.2887 3.64631 11.3715 3.58721 11.4635 3.54622C11.5555 3.50523 11.6548 3.48319 11.7555 3.48141C11.8562 3.47963 11.9562 3.49816 12.0496 3.53588C12.143 3.5736 12.2278 3.62974 12.299 3.70096C12.3703 3.77218 12.4264 3.85702 12.4641 3.9504C12.5018 4.04379 12.5204 4.14382 12.5186 4.24452C12.5168 4.34523 12.4948 4.44454 12.4538 4.53654C12.4128 4.62854 12.3537 4.71134 12.28 4.78L9.06 8L12.28 11.22C12.3537 11.2887 12.4128 11.3715 12.4538 11.4635C12.4948 11.5555 12.5168 11.6548 12.5186 11.7555C12.5204 11.8562 12.5018 11.9562 12.4641 12.0496C12.4264 12.143 12.3703 12.2278 12.299 12.299C12.2278 12.3703 12.143 12.4264 12.0496 12.4641C11.9562 12.5018 11.8562 12.5204 11.7555 12.5186C11.6548 12.5168 11.5555 12.4948 11.4635 12.4538C11.3715 12.4128 11.2887 12.3537 11.22 12.28L8 9.06L4.78 12.28C4.63782 12.4125 4.44977 12.4846 4.25547 12.4812C4.06117 12.4777 3.87579 12.399 3.73837 12.2616C3.60096 12.1242 3.52225 11.9388 3.51882 11.7445C3.51539 11.5502 3.58752 11.3622 3.72 11.22L6.94 8L3.72 4.78C3.57955 4.63938 3.50066 4.44875 3.50066 4.25C3.50066 4.05125 3.57955 3.86063 3.72 3.72Z"
                  ></path>
                </svg>
              </button>
            </header>
            <div className="SelectMenu-list">
              <div className="SelectMenu-blankslate">
                <svg
                  width="24 "
                  height="32"
                  viewBox="0 0 12 16"
                  className="octicon octicon-repo color-gray-3"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                  />
                </svg>
                <h4 className="my-2">No repositories</h4>
                <p className="mb-3 color-fg-muted">We didn’t find any matching repositories that you can commit to.</p>
                <button type="button" className="btn btn-sm btn-primary">
                  Create a repository
                </button>
              </div>
            </div>
          </div>
        </div>
      </details>
      <div className="d-sm-none" style={{height: '600px'}}></div>
      <div className="d-none d-sm-block" style={{height: '180px'}}></div>
    </>
  )
}
