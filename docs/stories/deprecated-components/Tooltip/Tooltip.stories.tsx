import React from 'react'

export default {
  title: 'Deprecated/Tooltip',
}

export const Default = () => {
  return (
    <>
      <div className="d-flex flex-justify-center pt-4">
        <button
          type="button"
          className="tooltipped tooltipped-nw m-2 p-2 border"
          aria-label="This is the tooltip on the North West side."
        >
          .tooltipped-nw
        </button>
        <button
          type="button"
          className="tooltipped tooltipped-n m-2 p-2 border"
          aria-label="This is the tooltip on the North side."
        >
          .tooltipped-n
        </button>
        <button
          type="button"
          className="tooltipped tooltipped-ne m-2 p-2 border"
          aria-label="This is the tooltip on the North East side."
        >
          .tooltipped-ne
        </button>
      </div>
      <div className="d-flex flex-justify-center">
        <button
          type="button"
          className="tooltipped tooltipped-w m-2 p-2 border"
          aria-label="This is the tooltip on the West side."
        >
          .tooltipped-w
        </button>
        <button
          type="button"
          className="tooltipped tooltipped-e m-2 p-2 border"
          aria-label="This is the tooltip on the East side."
        >
          .tooltipped-e
        </button>
      </div>
      <div className="d-flex flex-justify-center pb-4">
        <button
          type="button"
          className="tooltipped tooltipped-sw m-2 p-2 border"
          aria-label="This is the tooltip on the South West side."
        >
          .tooltipped-sw
        </button>
        <button
          type="button"
          className="tooltipped tooltipped-s m-2 p-2 border"
          aria-label="This is the tooltip on the South side."
        >
          .tooltipped-s
        </button>
        <button
          type="button"
          className="tooltipped tooltipped-se m-2 p-2 border"
          aria-label="This is the tooltip on the South East side."
        >
          .tooltipped-se
        </button>
      </div>
    </>
  )
}

export const Alignment = () => {
  return (
    <>
      <div className="d-flex flex-justify-center pt-4">
        <button
          type="button"
          className="tooltipped tooltipped-nw tooltipped-align-right-1 m-2 p-2 border"
          aria-label="Tooltipped NW and aligned right."
        >
          .tooltipped-nw .tooltipped-align-right-1
        </button>
        <button
          type="button"
          className="tooltipped tooltipped-ne tooltipped-align-left-1 m-2 p-2 border"
          aria-label="Tooltipped NE and aligned left."
        >
          .tooltipped-ne .tooltipped-align-left-1
        </button>
      </div>
      <div className="d-flex flex-justify-center">
        <button
          type="button"
          className="tooltipped tooltipped-nw tooltipped-align-right-2 m-2 p-2 border"
          aria-label="Tooltipped NW and aligned right."
        >
          .tooltipped-nw .tooltipped-align-right-2
        </button>
        <button
          type="button"
          className="tooltipped tooltipped-ne tooltipped-align-left-2 m-2 p-2 border"
          aria-label="Tooltipped NE and aligned left."
        >
          .tooltipped-ne .tooltipped-align-left-2
        </button>
      </div>
      <div className="d-flex flex-justify-center">
        <button
          type="button"
          className="tooltipped tooltipped-sw tooltipped-align-right-1 m-2 p-2 border"
          aria-label="Tooltipped SE and aligned right."
        >
          .tooltipped-sw .tooltipped-align-right-1
        </button>
        <button
          type="button"
          className="tooltipped tooltipped-se tooltipped-align-left-1 m-2 p-2 border"
          aria-label="Tooltipped SW and aligned left."
        >
          .tooltipped-se .tooltipped-align-left-1
        </button>
      </div>
      <div className="d-flex flex-justify-center pb-4">
        <button
          type="button"
          className="tooltipped tooltipped-sw tooltipped-align-right-2 m-2 p-2 border"
          aria-label="Tooltipped SE and aligned right."
        >
          .tooltipped-sw .tooltipped-align-right-2
        </button>
        <button
          type="button"
          className="tooltipped tooltipped-se tooltipped-align-left-2 m-2 p-2 border"
          aria-label="Tooltipped SW and aligned left."
        >
          .tooltipped-se .tooltipped-align-left-2
        </button>
      </div>
    </>
  )
}

export const MultiLine = () => {
  return (
    <>
      <div className="d-flex flex-justify-center pt-6">
        <button
          type="button"
          className="tooltipped tooltipped-n tooltipped-multiline m-2 p-2 border"
          aria-label="This is the tooltip with multiple lines. This is the tooltip with multiple lines."
        >
          .tooltipped-multiline
        </button>
      </div>
    </>
  )
}

export const NoDelay = () => {
  return (
    <>
      <div className="d-flex flex-justify-center pt-4">
        <button
          type="button"
          className="tooltipped tooltipped-n tooltipped-no-delay m-2 p-2 border"
          aria-label="This is the tooltip on the no delay side."
        >
          .tooltipped-no-delay
        </button>
      </div>
    </>
  )
}
