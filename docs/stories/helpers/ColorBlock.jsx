import React from 'react'
import PropTypes from 'prop-types'

const ColorBlock = ({backgroundColor, showValueLabel}) => {
  return (
    <div className="colorBlock">
      <div className="colorBlockItem" style={{backgroundColor: backgroundColor}}></div>
      {showValueLabel && <div>{backgroundColor}</div>}
    </div>
  )
}

ColorBlock.propTypes = {
  backgroundColor: PropTypes.string,
  showValueLabel: PropTypes.bool
}

ColorBlock.defaultProps = {
  backgroundColor: null,
  showValueLabel: false
}

export default ColorBlock
