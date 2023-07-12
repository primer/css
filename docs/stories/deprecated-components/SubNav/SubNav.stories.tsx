import React from 'react'

export default {
  title: 'Deprecated/SubNav',
  parameters: {
    storyType: 'banner',
    controls: {hideNoControlsWarning: true},
  },
}

export const Default = () => {
  return (
    <>
      <nav className="subnav" aria-label="Repository">
        <a className="subnav-item" href="#url" aria-current="page">
          Item 1
        </a>
        <a className="subnav-item" href="#url">
          Item 2
        </a>
        <a className="subnav-item" href="#url">
          Item 3
        </a>
      </nav>
    </>
  )
}

export const Search = () => {
  return (
    <>
      <div className="subnav">
        <nav className="subnav-links" aria-label="Repository">
          <a className="subnav-item" href="#url" aria-current="page">
            Item 1
          </a>
          <a className="subnav-item" href="#url">
            Item 2
          </a>
          <a className="subnav-item" href="#url">
            Item 3
          </a>
        </nav>
        <div className="subnav-search float-left">
          <input
            type="search"
            name="name"
            className="form-control subnav-search-input"
            value=""
            aria-label="Search site"
          />
          <svg
            className="subnav-search-icon octicon octicon-search"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            {' '}
            <path
              fill-rule="evenodd"
              d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"
            />{' '}
          </svg>
        </div>
      </div>
    </>
  )
}

export const SearchContext = () => {
  return (
    <>
      <div className="subnav">
        <nav className="subnav-links">
          <a className="subnav-item" href="#url" aria-current="page">
            Item 1
          </a>
          <a className="subnav-item" href="#url">
            Item 2
          </a>
          <a className="subnav-item" href="#url">
            Item 3
          </a>
        </nav>
      </div>
      <div className="subnav">
        <div className="float-left subnav-search-context">
          <button className="btn" type="button" name="button" aria-expanded="false" aria-haspopup="true">
            Filters
            <span className="dropdown-caret"></span>
          </button>
        </div>
        <div className="subnav-search float-left">
          <input
            type="search"
            name="name"
            className="form-control subnav-search-input"
            value=""
            aria-label="Search site"
          />
          <svg
            className="subnav-search-icon octicon octicon-search"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            {' '}
            <path
              fill-rule="evenodd"
              d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"
            />{' '}
          </svg>
        </div>
      </div>
    </>
  )
}
