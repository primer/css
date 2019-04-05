import React, {useState} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {theme} from '@primer/components'
import {space, color} from 'styled-system'

const DetailsReset = styled('details')`
  cursor: pointer;
  & > summary {
    list-style: none;
  }
  & > summary::-webkit-details-marker {
    display: none;
  }
`
function getRenderer(children) {
  return typeof children === 'function' ? children : () => children
}

function DetailsBase({children, overlay, render = getRenderer(children), ...rest}) {
  const [open, setOpen] = useState(Boolean(rest.open))

  function toggle(event) {
    if (event) event.preventDefault()
    if (overlay) {
      openMenu()
    } else {
      setOpen(!open)
    }
  }

  function openMenu() {
    if (!open) {
      setOpen(true)
      document.addEventListener('click', closeMenu)
    }
  }

  function closeMenu() {
    setOpen(false)
    document.removeEventListener('click', closeMenu)
  }
  return (
    <DetailsReset {...rest} open={open} overlay={overlay}>
      {render({open, toggle})}
    </DetailsReset>
  )
}

const Details = styled(DetailsBase)`
  ${space};
  ${color};
`

Details.defaultProps = {
  theme,
  overlay: false
}

Details.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  className: PropTypes.string,
  open: PropTypes.bool,
  overlay: PropTypes.bool,
  render: PropTypes.func,
  theme: PropTypes.object
}

export default Details
