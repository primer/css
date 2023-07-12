import React from 'react'

export default {
  title: 'Deprecated/Pagination',
}

export const Default = () => {
  return (
    <>
      <nav className="paginate-container" aria-label="Pagination">
        <div className="pagination">
          <span className="previous_page" aria-disabled="true">
            Previous
          </span>
          <a className="next_page" rel="next" href="#url" aria-label="Next Page">
            Next
          </a>
        </div>
      </nav>
    </>
  )
}

export const Numbered = () => {
  return (
    <nav className="paginate-container" aria-label="Pagination">
      <div className="pagination">
        <span className="previous_page" aria-disabled="true">
          Previous
        </span>
        <em aria-current="page">1</em>
        <a href="#url" aria-label="Page 2">
          2
        </a>
        <a href="#url" aria-label="Page 3">
          3
        </a>
        <span className="gap">…</span>
        <a href="#url" aria-label="Page 8">
          8
        </a>
        <a href="#url" aria-label="Page 9">
          9
        </a>
        <a href="#url" aria-label="Page 10">
          10
        </a>
        <a className="next_page" rel="next" href="#url" aria-label="Next Page">
          Next
        </a>
      </div>
    </nav>
  )
}
